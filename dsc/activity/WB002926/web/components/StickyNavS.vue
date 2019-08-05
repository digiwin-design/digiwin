<template>
    <nav class="nav is-mobile js-nav" :class="{ active: true }">
        <div class="container">
            <div id="is-sticky" class="is-sticky">
                <a
                    v-for="(link, idx) in links.anchor"
                    v-html="link.text"
                    :key="link.href"
                    :href="link.href"
                    :target="link.target ? link.target : '_self'"
                    :class="setClass(idx)"
                ></a>
            </div>
            <div class="no-sticky">
                <a
                    v-for="link in links.external"
                    v-html="link.mobile.text"
                    :key="link.mobile.href"
                    :href="link.mobile.href"
                    :class="{'is-disabled':link.mobile.href===''}"
                    target="_blank"
                ></a>
            </div>
        </div>
    </nav>
</template>

<script>
import _ from 'lodash';
export default {
    props: ['links'],
    data() {
        return {
            topPos: 0,
            isActive: false,
            isShow: false
        };
    },
    methods: {
        navScrollInit() {
            $('#is-sticky').navScroll({
                scrollSpy: true,
                navHeight: 0
            });
        },
        getTopPos: _.throttle(function () {
            this.topPos = $(this.links.anchor[0].href).offset().top;
        }, 100),
        setTopClass: _.throttle(function () {
            let pos = $(window).scrollTop();
            this.isActive = (pos + 510 >= this.topPos) ? true : false;
            this.isShow = pos >= document.querySelector('#TOP-MENU').offsetHeight;
        }, 100),
        setClass(idx) {
            return {
                active: idx === 0 ? this.isActive : ''
            };
        },
    },
    mounted() {
        this.navScrollInit();
        this.getTopPos();
        window.addEventListener('resize', this.getTopPos);
        window.addEventListener('scroll', this.setTopClass);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getTopPos);
        window.removeEventListener('scroll', this.setTopClass);
    }
}
</script>

<style lang="scss" src="~/assets/sass/components/_stickyNav.scss" scoped></style>
