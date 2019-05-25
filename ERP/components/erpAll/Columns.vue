<template>
    <div class="columns">
        <div v-for="column in columns" v-bind:key="column.title" class="col">
            <a
                v-bind:href="column.url"
                v-on:mouseenter="hoverHandler(true,$event)"
                v-on:mouseleave="hoverHandler(false,$event)"
                v-on:click="removeClass"
                v-bind:class="{disabled:!isLink}"
                class="js-columns-link js-nav"
            >
                <div>
                    <img v-bind:src="column.imgSrc" class="mouseenter" alt>
                    <img v-if="column.hoverImgSrc" v-bind:src="column.hoverImgSrc" class="mouseleave" alt>
                </div>
                <p>{{column.title}}</p>
                <p>{{column.content}}</p>
            </a>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: {
        columns: Array,
        isLink: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        hoverHandler: function (value, evt) {
            if (!this.isLink) return;
            if (value) {
                evt.target.classList.add('is-hover');
            }
            else {
                evt.target.classList.remove('is-hover');
            }
        },
        removeClass: function() {
            // 移除手機點擊後加入的class(觸發mouseenter)
            $('.js-columns-link').removeClass('is-hover');
        }
    },
}
</script>