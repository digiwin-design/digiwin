<template>
    <div>
        <template v-if="isMobile">
            <img src="images/index/section3-illust-s.png" usemap="#image-map">
            <map name="image-map">
                <area target="" alt="" title="" href="#section4" coords="203,59,31" shape="circle">
                <area target="" alt="" title="" href="#section5" coords="323,58,32" shape="circle">
                <area target="" alt="" title="" href="#section6" coords="55,338,30" shape="circle">
                <area target="" alt="" title="" href="#section7" coords="158,338,30" shape="circle">
            </map>
        </template>
        <template v-else>
            <img src="images/index/section3-illust.png" usemap="#image-map">
            <map name="image-map">
                <area href="#section4" class="js-nav" coords="711, 98, 55" shape="circle">
                <area href="#section5" class="js-nav" coords="865, 98, 56" shape="circle">
                <area href="#section6" class="js-nav" coords="198, 512, 56" shape="circle">
                <area href="#section7" class="js-nav" coords="341, 511, 54" shape="circle">
            </map>
        </template>
    </div>
</template>

<script>
module.exports = {
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        },
    },
    mounted: function () {
        $('img[usemap]').rwdImageMaps();
    },
}
</script>

<style>
</style>
