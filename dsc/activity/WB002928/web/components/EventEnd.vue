<template>
    <div v-if="expired && url" class="endBanner" :class="{'is-hidden':isHidden}">
        <div class="endBanner-main">
            <a :href="url.href" class="endBanner-link" target="_blank"></a>
            <div class="endBanner-container">
                <img src="~/assets/images/event-end/event_end.png" class="endBanner-img">
                <a href class="endBanner-close" @click.prevent="toggleHandler"></a>
            </div>
        </div>
        <a href class="endBanner-open" @click.prevent="toggleHandler">留言諮詢</a>
    </div>
</template>

<script>
export default {
    props: ['endDate', 'page', 'urlMap'],
    data() {
        return {
            expired: false,
            isHidden: false,
        };
    },
    computed: {
        url() {
            if (this.page && this.urlMap) {
                return this.urlMap.find(item => this.page === item.page);
            }
            else {
                return { href: 'http://www.digiwin.com/tw/contact/eform.html' };
            }
        },
    },
    methods: {
        toggleHandler() {
            this.isHidden = !this.isHidden;
        },
    },
    created() {
        let currentDate = Date.parse((new Date()).toDateString());
        let endDate = Date.parse(this.endDate);
        this.expired = currentDate > endDate ? true : false;
    },
}
</script>

<style lang="scss" src="~/assets/sass/components/_eventEnd.scss" scoped></style>
