<template>
    <a href :class="{'no-fixed':!isFixed}" @click.prevent="moveTo(target)"></a>
</template>

<script>
import _ from 'lodash';
export default {
    props: ['target', 'offsetObj'],
    data() {
        return {
            isFixed: true
        };
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
    },
    methods: {
        locateArrow: _.throttle(function () {
            if (this.isMobile) {
                let pos = $(window).scrollTop();
                let distance = $(this.target).offset().top - window.innerHeight;
                this.isFixed = !(pos >= distance);
            }
        }, 100),
        moveTo(target) {
            let offset = this.offsetObj ? document.querySelector(this.offsetObj).offsetHeight : 0;
            let targetPos = $(target).offset().top;
            let finalPos = this.isMobile ? targetPos : targetPos - offset;
            $('html, body').animate({ scrollTop: finalPos });
        },
    },
    mounted() {
        window.addEventListener('resize', this.locateArrow);
        window.addEventListener('scroll', this.locateArrow);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.locateArrow);
        window.removeEventListener('scroll', this.locateArrow);
    }
}
</script>

<style lang="scss" scoped>
a {
    position: absolute;
    bottom: 20px;
    left: 50%;
    width: 79px;
    height: 40px;
    background-image: url("~assets/images/arrow-down.png");
    transform: translateX(-50%) scale(0.7);
    @media (max-width: 768px) {
        position: fixed;
        &.no-fixed {
            position: absolute;
        }
    }
}
</style>
