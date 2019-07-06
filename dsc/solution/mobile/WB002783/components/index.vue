<template>
    <div class="index">
        <main-header>
            <template slot="content">
                <h1>
                    廠長的一天就從
                    <br />晨會與巡廠開始嗎?
                </h1>
                <p>晨會午會一個接一個，每天巡5s缺失改善一直提，還有業務、採購、生產開不完的協調會，為什麼還是有處理不完的狀況？</p>
            </template>
        </main-header>

        <article class="section1">
            <div class="container">
                <section-title
                    title="接單後，您也是這樣嗎？"
                    desc="製造業從業務接單到採購進料，接著生產組裝及最後測試到出貨，都需要有效率的流程串接支撐著工廠運作。然而市場瞬息萬變，客戶下單也是如此，急單插單是常見的狀況，接大單本應是全體上下歡欣鼓舞的喜事，為何最後落得各部門怨聲載道，產線運作出現危機，甚至還發生客訴？"
                ></section-title>
                <section v-for="item in result.index.section1" :key="item.title">
                    <h1 :class="item.titleClass">{{item.title}}</h1>
                    <p>{{item.content}}</p>
                </section>
            </div>
        </article>
        
        <article class="section2">
            <div class="container">
                <section-title
                    title="製造業接單方式已經改變了！"
                    desc="從紡織、金屬等傳統產業到電子科技業，各行各業已經開始少量多樣接單，究其原因無非是為了更高的毛利或是產業升級等重要考量而客製化接單帶來的衝擊與影響遠遠擴及企業內部流程，改善與否都讓企業感到為難！"
                    custom-style="padding-bottom:40px"
                ></section-title>
                <section v-for="item in result.index.section2" :key="item.title">
                    <div :class="item.class">
                        <h1>{{item.title}}</h1>
                        <p class="section2-content" v-html="item.content"></p>
                        <p class="section2-source">{{item.source}}</p>
                    </div>
                </section>
            </div>
        </article>

        <article class="section3">
            <div class="container">
                <section-title
                    title="少量多樣已是市場趨勢，要改變的絕不只是接單模式"
                    custom-style="padding-bottom:1em"
                ></section-title>
                <p>客戶的下單習慣已轉向少量多樣、生產週期要求更短，需求變動也愈趨頻繁研發速度、庫存備料、訂單進度、生產效率、換線換模、交期承諾、品質要求，要調整可不只是這些，企業的挑戰這時正要開始......</p>
                <a href="/tw/dsc/solution/WB002783/WB00278301_customized.html"><span>了解因應客製化議題之精簡化<i>與高速化的管理模式</i></span></a>
            </div>
        </article>

        <article class="section4">
            <div class="container">
                <section-title
                    title="工廠管理從串連起每一個重要環節開始！"
                    custom-style="padding-bottom:1em"
                ></section-title>
                <p>工廠管理除了最基本的生產進度與品質管控，生產現場資訊能否即時回饋？生產現場是否有異常監控？正因為即時反應的速度關係到事後改善的成效，過去只能透過電話或親赴現場詢問狀況的作法已經過時，未來您可以透過系統提供的製程變更、線上派工、電子看板及機台查詢等功能，快速的更新資料，即時調整生產狀況。從接單、投料、製造、外包、至完工入庫，全程掌握生產資訊一點都不難！</p>
                <img src="images/index/section4-illust.png" alt="">
                <a href="/tw/dsc/solution/WB002783/WB00278301_factoryManage.html">了解更多</a>
            </div>
        </article>

        <article class="section5">
            <div class="container">
                <section-title
                    title="各行各業，獨到專精"
                    desc="<p>累積30多年產業輔導經驗，50,000 多家企業成功案例<br>轉化成行業解決方案，提供您最佳服務與支援</p>"
                ></section-title>
                <industry></industry>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    computed: {
        result: function () {
            return store.state.result;
        }
    },
}
</script>
