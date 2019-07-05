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
                <section v-for="item in result.section1" :key="item.title">
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
                ></section-title>
                <section>
                    <h1>跳脫量產新纖毛利衝新高</h1>
                    <p class="section2-content">過去新纖接單量動輒以200噸起跳，但現在許多訂單都是20噸為單位，量少了，不過在少量多樣、客製化要求下，毛利率、營業淨利率…</p>
                    <p class="section2-source">2017/01/11 中時電子報</p>
                </section>
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
