<template>
    <nav class="nav js-fixedNav" :class="{mbnav:device==='mobile'}">
        <div class="container">
            <a
                v-for="(link, idx) in links[device]"
                v-html="link.text"
                :key="link.href"
                :href="link.href"
                :target="link.target ? link.target : '_self'"
                :class="setFirstLinkClass(idx)"
            ></a>
        </div>
    </nav>
</template>

<script>
import _ from 'lodash';

export default {
    props: ['links'],
    data() {
        return {
            isActive: false
        };
    },
    computed: {
        device() {
            return this.$store.state.isMobile ? 'mobile' : 'desktop';
        },
    },
    methods: {
        stickyInit() {
            let elements = document.querySelectorAll('.js-fixedNav');
            let Stickyfill = require('stickyfill');
            let stickyfill = Stickyfill();
            stickyfill.add(elements);
        },
        navScrollInit() {
            $('.js-fixedNav').navScroll({ scrollSpy: true });
        },
        scrollHandler: _.throttle(function () {
            let topPos = $(this.links[this.device][0].href).offset().top;
            let pos = document.documentElement.scrollTop;
            this.isActive = (pos + 510 >= topPos) ? true : false;
        }, 100),
        setFirstLinkClass(idx) {
            return {
                active: idx === 0 ? this.isActive : ''
            };
        }
    },
    mounted() {
        this.stickyInit();
        this.navScrollInit();
        window.addEventListener('scroll', this.scrollHandler);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollHandler);
    }
}
</script>
