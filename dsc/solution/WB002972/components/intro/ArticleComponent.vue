<template>
    <article :class="section">
        <div class="container">
            <h1 class="sectionTitle">
                <slot name="title"></slot>
            </h1>
            <div v-show="desc" class="articleDesc">
                <slot v-if="isMobile" name="desc-s"></slot>
                <slot v-else name="desc"></slot>
            </div>
            <picture>
                <source :srcset="'images/intro/' + section + '-illust.png'" media="(min-width:769px)">
                <img :src="'images/intro/' + section + '-illust-s.png'" alt="">
            </picture>
        </div>
    </article>
</template>

<script>
module.exports = {
    props: ['section', 'desc'],
    computed: {
        isMobile() {
            return store.state.isMobile;
        }
    },
}
</script>

<style>
main article {
    padding-bottom: 72px;
}
main article:nth-of-type(even) {
    background-color: #dcdcdc;
}
main article .articleDesc {
    margin-bottom: 2em;
    text-align: center;
}
main article img {
    display: block;
    margin: 0 auto;
}
main article strong {
    font-weight: bold;
}
main article .highlight {
    color: #ff6c00;
}
@media (min-width: 769px) {
    main article .mark {
        font-size: 22px;
    }
}
</style>
