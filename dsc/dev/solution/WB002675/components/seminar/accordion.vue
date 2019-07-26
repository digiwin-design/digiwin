<template>
    <div class="accordion">
        <p class="container">{{accordion.category}}：</p>
        <div ref="accordion">
            <h2 v-on:click="slideToggle">
                <span class="accordion-title" v-html="accordion.title"></span>
                <span class="accordion-more">
                    <i>more</i>
                </span>
            </h2>
            <div class="accordion-content">
                <div class="container">
                    <div class="accordion-col">
                        <div class="accordion-illust">
                            <img :src="'images/seminar/accordion/illust'+(index+1)+'.jpg'" alt>
                        </div>
                        <div class="accordion-btns">
                            <a
                                v-for="link in accordion.links"
                                :href="link.href"
                                :class="{'js-nav':btnClass(link.href)}"
                                :key="link.href"
                                target="_blank"
                            >{{link.text}}</a>
                        </div>
                    </div>
                    <div class="accordion-col" :class="'text'+(index+1)">
                        <template v-for="content in accordion.contents">
                            <h3 v-if="content.title" :key="content.title">{{content.title}}</h3>
                            <h4 v-if="content.subtitle" :key="content.subtitle">{{content.subtitle}}</h4>
                            <div v-html="content.html" class="accordion-detail" :key="content.html"></div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['accordion', 'index'],
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        }
    },
    watch: {
        isMobile: function (val) {
            if (val) {
                this.destroyAccordion();
            }
            else {
                this.initAccordion();
            }
        }
    },
    methods: {
        btnClass: function (href) {
            return href === '#contact';
        },
        slideToggle: function (event) {
            if (this.isMobile) {
                $(event.target).toggleClass('active').next().slideToggle();
            }
        },
        initAccordion: function () {
            $(this.$refs.accordion).find('h2').removeClass('active');
            $(this.$refs.accordion).accordion({
                collapsible: true,
                heightStyle: 'content',
            });
        },
        destroyAccordion: function () {
            $(this.$refs.accordion).find('h2').eq(0).addClass('active');
            $(this.$refs.accordion).accordion('destroy');
        },
    },
    mounted: function () {
        if (!this.isMobile) {
            this.initAccordion();
        }
        else {
            $(this.$refs.accordion).find('h2').eq(0).addClass('active');
        }
    },
};
</script>
