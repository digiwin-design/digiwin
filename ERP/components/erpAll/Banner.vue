<template>
    <div class="banner">
        <div class="container">
            <div>
                <h1 v-html="banner.title"></h1>
                <p v-html="banner.desc" class="banner-desc"></p>
                <div class="banner-btns">
                    <a
                        v-if="banner.link"
                        v-bind:href="banner.link.url"
                        v-bind:target="banner.link.target"
                        class="btn"
                    >想要了解更多</a>
                    <a v-else href="#contact" class="btn js-nav">想要了解更多</a>
                    <a href="#contact" class="btn js-nav">預約諮詢服務</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['banner'],
}
</script>
