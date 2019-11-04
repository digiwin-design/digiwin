<template>
    <main v-if="result">
        <div class="hero">
            <div class="container">
                <h1>
                    <picture>
                        <source srcset="~/assets/images/03/hero-title.png" media="(min-width: 769px)">
                        <img src="~/assets/images/03/hero-title-s.png" alt="MES 打造透明生產現場 整合IT與OT 實現精實管理 降本增效提質">
                    </picture>
                </h1>
                <div class="hero__btn">
                    <a href="">立即諮詢</a>
                    <a href="">【線上研討會】<br>從《工業3.5》看台灣產業發展</a>
                </div>
            </div>
        </div>
        <article class="section1">
            <div class="container">
                <SectionTitle
                    title="鼎新MES，完整掌握生產現場即時訊息"
                    desc="鼎新MES，與ERP無縫整合，隨需搭建智慧化工廠，實現從入庫、派工、報工、出場及設備狀態全程追溯，滿足企業在製品管理(WIP)、品質控管(SPC)、設備整合與管理(EMS)、問題追溯分析、生產現場的即時數據採集等關鍵需求，為企業做出更準確的生產管理決策。"
                ></SectionTitle>
            </div>
        </article>
        <Contact></Contact>
    </main>
</template>

<script>
import axios from 'axios';
import Contact from '~/components/03/Contact';
import SectionTitle from '~/components/03/SectionTitle';

export default {
    head: {
        title: '鼎新MES-將過程經驗數據化，打造人機協作透明製造現場',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: '台灣製造業的智慧製造轉型路徑─人機協作鋼鐵人，透過MES智能現場執行系統，連結人腦與數據大腦，打造高效、精益、透明化現場管理，只有通過精益製造和數字化管理等先進的生產，管理方式優化工廠底層資源，改善數據採集品質，提高生產透明度與效益。'
            }
        ]
    },
    components: {
        Contact,
        SectionTitle,
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        result() {
            return this.$store.state.result;
        },
    },
    methods: {
        getData() {
            axios.get('public/db.json').then(res => {
                this.$store.commit('setData', res.data['03']);
            });
        },
    },
    created() {
        this.getData();
    },
};
</script>

<style lang="scss" src="~/assets/sass/03.scss"></style>