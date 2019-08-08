<template>
    <main v-if="result">
        <StickyNav v-if="isMobile"></StickyNav>
        
        <header></header>
        
        <StickyNav v-if="!isMobile"></StickyNav>

        <article id="first">first</article>
        
        <article id="section1" class="section1">section1</article>
        
        <article id="section2" class="section2">section2</article>
        
        <article id="section3" class="section3">section3</article>
        
        <article id="section4" class="section4">section4</article>

        <Contact></Contact>
    </main>
</template>

<script>
import axios from 'axios';
import StickyNav from '~/components/index/StickyNav';
import Contact from '~/components/index/Contact';
import EventEnd from '~/components/EventEnd';

export default {
    head: {
        title: '勞動檢查持續進行，免被開罰秘笈大公開！',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: '面對勞檢人員，擔心文件準備不齊全而被罰款？未依規定加給延長工時工資、未依規定記載勞工出勤紀錄等等等，企業最常違規法令前5名你中了幾項？不想違規？解決方案報你知！'
            }
        ]
    },
    components: {
        StickyNav,
        Contact,
        EventEnd,
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        result() {
            return this.$store.state.result;
        },
        endDate() {
            return '2018/10/19';
        },
    },
    methods: {
        getData() {
            axios.get('public/db.json').then(res => {
                this.$store.commit('setData', res.data['index']);
            });
        },
    },
    created() {
        this.getData();
    },
};
</script>

<style lang="scss" src="~/assets/sass/index/style.scss"></style>