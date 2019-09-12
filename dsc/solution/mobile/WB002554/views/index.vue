<template>
    <div class="index">
        <main-header>
            <template slot="content">
                <h1>別讓回收料拖垮品質及企業信譽</h1>
                <p>
                    企業常忽略次料管理，
                    <br />造成生產品質不符合客戶要求的規範?
                    <br />次料要如何確實記錄BOM表，成為生產依據?
                    <br />次料常因收集不易未計入產品成本，造成產品成本扭曲?
                </p>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <section-title
                    title="塑膠產業接單吹起少量多樣風"
                    desc="從上游原料供應到下游成品製造，塑膠產業已經開始少量多樣接單，究其原因無非是為了更高的毛利或是產業升級等重要考量。而以往<strong>次料成本、模具妥善、訂單排程、製造現場</strong>等塑膠業重視的管理議題又該如何隨著少量多樣作調整?"
                    padding-bottom="1em"
                ></section-title>
            </div>

            <carousel :slides="index.slides"></carousel>

            <div class="container">
                <div class="section1-list">
                    <ul>
                        <li>少量多樣接單，引發那些轉變及衝擊?</li>
                        <li>少量多樣接單，塑膠產業同業們怎麼做?</li>
                        <li>少量多樣接單，內部作業流程與生產製造如何運作?</li>
                    </ul>
                    <a href="/tw/dsc/solution/WB002554/WB00255401_control.html">
                        <i class="material-icons">arrow_forward</i>
                        因應複雜多變的產業環境，您可以這樣作!
                    </a>
                </div>
            </div>
        </article>

        <article class="section2">
            <div class="container">
                <section-title
                    title="副總的訂單要先做才是對的?"
                    desc="一家塑膠老客的生管人員告訴鼎新:副總的訂單他就會優先安排，年資越淺的業務他就會排越後面，造成交期永遠都會逾期，產銷會議時大家總是抱怨連連...........生管真難為?業務與生管之  間還有那些美麗與哀愁?"
                ></section-title>
                <pain
                    v-for="pain in index.pains"
                    :key="pain.title"
                    :content="pain"
                ></pain>
            </div>
        </article>

        <article class="section3">
            <div class="container">
                <section-title
                    title="成就客戶創造應用價值"
                    desc="鼎新累積30多年塑膠產業輔導經驗，<strong>品茂塑膠、上溢精密、集泉塑膠、嘉碁科技、成綸企業、愛子美實業、金上吉塑膠</strong>等多家企業成功案例，提供您最佳服務與支援！"
                    padding-bottom="1em"
                ></section-title>
                <img src="images/index/section3-illust.png" alt />
            </div>
        </article>

        <article class="section4">
            <div class="container">
                <section-title
                    title="塑膠業精實生產模具、設備、排程  缺一不可"
                    desc="鼎新電腦提供塑膠產業一套完整符合並能掌握生產環節的管理模式，也因應工業4.0之發展趨勢，開發出<strong>新型整合設備，整合傳a統三色燈及機台生產資訊</strong>，並與<strong>模具系統及自動排程系統深度整合</strong>，引領塑膠業以<strong>現場生產管理</strong>為主軸，打造通往智能生產、智慧工廠的生產環境。"
                    padding-bottom="1em"
                ></section-title>
                <img src="images/index/section4-illust.png" alt />
                <a href="/tw/dsc/solution/WB002554/WB00255401_control.html">
                    <i class="material-icons">arrow_forward</i>
                    因應複雜多變的產業環境，您可以這樣作!
                </a>
            </div>
        </article>

        <article class="section5">
            <div class="container">
                <section-title title="塑膠產業完整解決方案" padding-bottom="1em"></section-title>
                <img src="images/index/section5-illust.png" alt />
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'Index',
    components: {
        'carousel': httpVueLoader('components/index/carousel.vue'),
    },
    computed: {
        index() {
            return store.state.result.index;
        }
    },
}
</script>