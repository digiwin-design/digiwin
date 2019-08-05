<template>
    <div class="lists container">
        <a href v-for="(item, idx) in context" :key="item.name" @click.prevent="popupShow(idx)" class="list">
            <div class="figure">
                <div class="figure-img">
                    <img :src="require(`~/assets/images/cast-avatar${idx+1}.png`)" alt>
                </div>
                <div class="figcaption">
                    <p class="list-feature">{{item.feature}}</p>
                    <p class="list-position">{{item.position}}</p>
                    <p class="list-name">{{item.name}}</p>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: ['context'],
    methods: {
        popupShow(idx) {
            this.$nuxt.$emit('slideToHandler', idx);
            this.$store.commit('setCastSlideIdx', idx);
            $('#cast_popup').popup('show');
            $.smartScroll($('#cast_popup_wrapper'), $('.js-cast-content')); // 阻止body滾動
        }
    },
}
</script>

<style lang="scss" src="~/assets/sass/components/_castList.scss" scoped></style>
