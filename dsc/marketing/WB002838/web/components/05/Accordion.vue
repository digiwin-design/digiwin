<template>
    <div class="accordion">
        <template v-for="(list,idx) in lists">
            <div class="accordion-title js-accordion-title" :class="{active:idx===0}" :key="list.title[0]" onclick @click="slideToggle">
                <div class="col">
                    <p v-for="item in list.title" :key="item">{{item}}</p>
                </div>
                <div class="col">解決<br>方案</div>
            </div>
            <div class="accordion-content" :key="list.content">
                <p>{{list.content}}</p>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: ['lists'],
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
    },
    watch: {
        isMobile(value) {
            // mobile->desktop時預設展開第一項
            if (!value) {
                $('.js-accordion-title').eq(0).addClass('active').next().slideDown()
                    .end().siblings('.js-accordion-title').removeClass('active').next().slideUp();
            }
        }
    },
    methods: {
        slideToggle(event) {
            let $target = $(event.target).parents('.js-accordion-title');
            $target.toggleClass('active').next().slideToggle();
            if (!this.isMobile) {
                $target.siblings('.accordion-title').removeClass('active').next().slideUp();
            }
        },
    },
}
</script>