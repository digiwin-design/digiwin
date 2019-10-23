<template lang="pug">
    div.top
        //- 手機版的LOGO+右上按鈕
        #TOP-MENU
            h4#LOGO_M 鼎新電腦

        //- 主選單區
        #nav
            a(href='http://www.digiwin.com/tw', target='_blank')
                img.logo(src='http://www.digiwin.com/tw/dsc/Library/images/logo.png', alt='鼎新官網', width='90', height='29')
</template>

<script>
export default {
    methods: {
        initMenu() {
            /*-------上方企業識別Nav-------------*/
            /*$("#nav ul ul").hide();*/

            $("#nav > ul > li").hover(function () {
                var N = $(this).index();
                $("#nav > ul > li").eq(N).find("ul").stop(true, true).slideDown(100);
            }, function () {
                var N = $(this).index();
                $("#nav > ul > li").eq(N).find("ul").stop(true, true).slideUp(100);
            })


            /*-------手機版Nav-------------*/

            $("#BTN").on("click", this.OPENOPEN);

            $(window).on("resize", CLEARSTYLE)
            function CLEARSTYLE() {
                if ($(window).innerWidth() > 768) {
                    $("#nav").attr("style", "");
                }
            }

            $("#LOGO_M").on("click", DIGIWIN);
            function DIGIWIN() {
                window.open("http://www.digiwin.com/tw");

            }
        },
        OPENOPEN() {
            $("#nav").slideToggle(300);
            this.$store.commit('toggleMask', !this.$store.state.showMask);
        },
        slideUpNav() {
            if ($(window).innerWidth() <= 768) {
                $("#nav").slideUp(300);
            }
        },
    },
    mounted() {
        this.initMenu();
        document.querySelector('#mask').addEventListener('click', this.slideUpNav);
        document.querySelector('#mask').addEventListener('touchstart', this.slideUpNav);
    },
    beforeDestroy() {
        document.querySelector('#mask').removeEventListener('click', this.slideUpNav);
        document.querySelector('#mask').removeEventListener('touchstart', this.slideUpNav);
    }
}
</script>

<style lang="scss" scoped>
.top {
    position: relative;
    z-index: 5;
}
</style>
