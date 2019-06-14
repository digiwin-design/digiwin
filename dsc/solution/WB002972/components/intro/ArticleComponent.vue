<template>
    <article class="articleComponent" :class="section">
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