<template>
    <nav class="nav js-fixedNav" :class="{ mbnav:device === 'mobile' }">
        <div class="container">
            <a
                v-for="(link, idx) in links[device]"
                v-html="link.text"
                :key="link.href"
                :href="link.href"
                :target="link.target ? link.target : '_self'"
                :class="{ active: activeNav[idx] }"
                @click="clickHandler"
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
            isActive: false,
            sectionTop: [],
            windowCenter: 0,
        };
    },
    computed: {
        device() {
            return this.$store.state.isMobile ? 'mobile' : 'desktop';
        },
        activeNav() {
            return this.sectionTop.map((val, idx, arr) => {
                if (idx === this.sectionTop.length - 1) {
                    return this.windowCenter >= arr[idx];
                }
                else {
                    return this.windowCenter >= arr[idx] && this.windowCenter < arr[idx + 1];
                }
            });
        }
    },
    methods: {
        stickyInit() {
            let elements = document.querySelectorAll('.js-fixedNav');
            let Stickyfill = require('stickyfill');
            let stickyfill = Stickyfill();
            stickyfill.add(elements);
        },
        scrollHandler: _.throttle(function () {
            this.getWindowCenter();
        }, 100),
        resizeHandler: _.throttle(function () {
            this.getSectionTop();
        }, 100),
        getWindowCenter() {
            this.windowCenter = window.innerHeight / 2 + window.pageYOffset + this.$el.offsetHeight;
        },
        getSectionTop() {
            let sectionTop = [];
            document.querySelectorAll('.js-section').forEach(el => {
                let top = el.getBoundingClientRect().top + window.pageYOffset;
                sectionTop.push(top);
            });
            this.sectionTop = sectionTop;
        },
        clickHandler() {
            event.preventDefault();
            let target = event.target.getAttribute('href');
            let offset = this.$el.offsetHeight;
            let targetPos = document.querySelector(target).getBoundingClientRect().top + window.pageYOffset;
            window.scroll({ top: targetPos - offset, left: 0, behavior: 'smooth' });
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.resizeHandler);
        this.stickyInit();
        this.getWindowCenter();
        this.getSectionTop();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollHandler);
    }
}
</script>
