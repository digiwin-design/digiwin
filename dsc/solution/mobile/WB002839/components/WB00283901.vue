<template>
    <div class="WB00283901">
        <div class="header">
            <div class="container">
                <h1 class="mainTitle">管好帳、管好貨、管現場</h1>
                <h2>但人就是這麼多...怎麼管?</h2>
            </div>
        </div>

        <article id="problem" class="section1">
            <div class="container">
                <h1 class="sectionTitle">經營中小企業，你有沒有發生這些問題?</h1>
                <p class="section1-content1 sectionDesc">無論是製造業還是買賣業，中小企業總是有著各自的管理面向需要關注，
                    <br>從帳務到工廠管理，從貿易到通路經營，
                    <br>還有各項政府法規與稅制要因應，
                    <br>這些問題恐怕只是冰山一角！
                </p>
            </div>
            <img src="images/WB00283901/section1-illust.jpg" class="section1-illust" alt>
            <div class="section1-content2 container">
                <ul>
                    <li>會員人數約3萬多筆，只用Excel記錄，無法妥善管理客戶資料。</li>
                    <li>電子發票實施後，有些客戶接受電子發票，有些客戶接受紙本發票，有些客戶有指定的第三方加值服務平台，這麼多種的發票平台開立和交付形式....怎麼辦?</li>
                    <li>門市預計拓展至10個據點，希望門市資料可傳回總部，讓總經理可即時看到相關數據。</li>
                    <li>人工作業造成基本的損益表產出都容易有問題，公司業績成長訂單量增加，業務說要在外面能夠即時得知庫存狀況....</li>
                    <li>委外工廠生產排程及出貨進度追蹤都人工處理，很花時間。</li>
                    <li>公司後續會再成立新的事業體，希望能將不同產業做多公司帳，方便管控損益。</li>
                    <li>近期新增北京據點，希望台灣與大陸可互相連線，統整相關資訊。</li>
                    <li>原帳務都委外會計師處理，老闆想拉回來自己作，並希望系統可因應公司未來上市櫃需求。</li>
                </ul>
            </div>
            <div class="section1-btns container">
                <router-link :to="'/manufacture/2'">前往製造業
                    <br>(OEM、ODM、OBM)
                </router-link>
                <router-link :to="'/merchandise/3'">前往買賣業
                    <br>(內外銷、品牌代理、買賣維修)
                </router-link>
            </div>
        </article>

        <article class="section2">
            <div class="container">
                <h1 class="sectionTitle">基礎管理制度</h1>
                <p>強化企業內部流程，才有足夠的能量面對市場的需要及挑戰
                    <br>提供客戶專業的服務，需要穩健而順暢的企業流程做為後勤支援
                </p>
                <p>建立基本的管理制度：從市場開發 → 提供服務或商品 → 收款 → 售後服務</p>
                <img src="images/WB00283901/section2-illust.png" alt>
            </div>
        </article>

        <article class="section3">
            <div class="container">
                <h1 class="sectionTitle">財務融資</h1>
                <blockquote>
                    財政部官員認為，記帳士評鑑主要是看營業稅申報件數等稅務相關資料，較無財務相關指標；金管會銀行局也認為，銀行融資給企業，主要看企業的營運前景，及授件5P指標，不易由記帳士好壞認定企業前景。
                    <span>(來源：經濟日報)</span>
                </blockquote>
                <p>因此，如企業能自行建置系統並透過系統快速產出401、403與新版資產負債表，新版綜合損益表，將能為企業降低委外編列財報的成本，並大幅提升財報透明度，順利向銀行取得低利融資，為企業注入資金活水。</p>
                <figure>
                    <img src="images/WB00283901/section3-illust1.png" alt>
                    <figcaption>鼎新電腦資訊系統支持重點。財報延續及比較，系統產出財報完全支持新制格式。</figcaption>
                </figure>
            </div>
            <img src="images/WB00283901/section3-illust2.png" usemap="#image-map">
            <map name="image-map">
                <area
                    target="_blank"
                    alt
                    title
                    href="http://www.smeg.org.tw/"
                    coords="51, 136, 373, 170"
                    shape="rect"
                >
            </map>
        </article>

        <article class="section4">
            <div class="container">
                <h1 class="sectionTitle">電子發票已經開始實施！</h1>
                <p>電子發票絕不僅僅是把發票上傳到財政部電子發票平台如此簡單，當發票開立時，您的有些客戶接受電子發票，有些客戶接受紙本發票，或是有些客戶有指定的第三方加值服務平台，這麼多種的發票平台開立和交付形式，如果開錯、漏開、漏傳將可能面對法規罰則與客戶抱怨。而發票開立後，如何確保所有電子發票正確交付給對方，且皆準時送達財政部電子發票平台?最後來到帳務核對與營業稅申報階段，該怎麼縮短簡化對帳時程?</p>
                <p>鼎新電腦一體化整合方案，協助企業從開立每張電子發票到上傳、請款、對帳所有的困擾，用最短時程、最少人力、最自動化的監控，完美協助您日常的電子發票作業。</p>
                <img src="images/WB00283901/section4-illust.png" alt>
                <a
                    href="/tw/dsc/solution/WB002742/WB00274201.html"
                    class="moreBtn"
                    target="_blank"
                >了解更多</a>
            </div>
        </article>

        <div class="section5">
            <div class="container">
                <h1>研討會資訊</h1>
                <local-swiper ref="awesomeSwiperA" :options="swiperOptionA">
                    <local-slide v-for="slide in slides" :key="slide.title">
                        <article class="content">
                            <h2>{{slide.title}}</h2>
                            <p class="law-content">{{slide.content}}</p>
                            <a :href="slide.url" class="law-btn" target="_blank">了解更多課程內容</a>
                        </article>
                    </local-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </local-swiper>
            </div>
        </div>

        <article class="section6">
            <div class="container">
                <h1 class="sectionTitle">每個產業，我們都是專家</h1>
                <p>累積30多年產業輔導經驗，50,000 多家企業成功案例
                    <br>轉化成行業解決方案，提供您最佳服務與支援
                </p>
                <Industry-list/>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    components: {
        'IndustryList': httpVueLoader('../../../../assets/industry-list-v2/industry.vue'),
        LocalSwiper: VueAwesomeSwiper.swiper,
        LocalSlide: VueAwesomeSwiper.swiperSlide,
    },
    data() {
        return {
            swiperOptionA: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            }
        };
    },
    computed: {
        swiperA() {
            return this.$refs.awesomeSwiperA.swiper;
        },
        slides() {
            return [
                {
                    title: '做好銷售預測，運用資訊科技抓住獲利',
                    content: 'C2B時代來臨，最末端的消費者成為市場需求帶動者，供需模式已然翻轉，抓住消費者脈動方能掌握未來致勝關鍵，市場環境瞬息萬變，做好短期銷售下訂、長期商品銷售庫存策略，縮短採購、庫存置銷售的反應時間，亦才能抓住C2B時代商機，站穩腳步長久營運。鼎新電腦多年來深耕流通零售領域，持續關注最新趨勢與動態，希望帶領企業夥伴從消費者角度出發，運用工具掌握短期銷售，放遠長期經營!',
                    url: 'https://www.digiwin.com/tw/dsc/activity/WB002840/WB00284001.htm'
                },
                {
                    title: '因應少量多樣生產挑戰 打造產銷透明平台，提高企業競爭力',
                    content: '中小企業被視為台灣經濟發展的主力，但隨著市場需求日新月異，導致供應鏈管理快速的改變，生產製造如何正確即時實現訂單能力，已成為中小企業是否具備市場競爭力的重要指標。生產製造所需要提昇的管理能力，即是找到一個合適的行業管理模式加上資訊工具的整合，做到管理與資訊一體化的應用。本次研討會邀請擁有多加企業輔導經驗的專家，從如何善用資訊工具到正確分析大量且即時的現場生產資訊，讓企業能夠快速掌握『物料』和『產能』供給狀況，促使訂單準時達交！',
                    url: 'https://www.digiwin.com/tw/dsc/activity/WB002846/WB00284602.htm'
                },
                {
                    title: '掌握最適庫存管理，抓住營收翻倍成長秘訣',
                    content: '中小企業為台灣經濟前進主力，佔全台九成以上比例，因應市場需求日新月異，「速度」將成為企業致勝關鍵，訣竅就在於如何做好庫存管理！鼎新電腦多年來擁有豐富行業輔導經驗，掌握台灣中小企業市場最新趨勢與動態，建立一套完整的標準SOP，協助企業管理、決策者快速掌握庫存管理，順暢接單、採購、生產各項關鍵程序，放遠長期經營！',
                    url: 'https://www.digiwin.com/tw/dsc/activity/WB002884/WB00288401.htm'
                },
                {
                    title: '運用資訊系統 提升企業財務管理能力',
                    content: '中小企業占全台企業比例超過九成，而多數中小企業主如何在營運過程中建立長久發展的基礎？要從競爭激烈的中小企業戰場中脫穎而出，內部的營運管理是重要關鍵。從起步、經營、到擴張，做好財務管理的基礎才能創造長久營運。本次研討會邀請到擁有輔導多家企業 與專業財務背景的專家，從營運管理五大面向展開，協助企業做「對」的財務規劃，並透過資訊工具的應用，讓中小企業能達到事半功倍的營運管理效益！',
                    url: 'https://www.digiwin.com/tw/dsc/activity/WB002830/WB00283003.htm'
                },
                {
                    title: '嗶！自動搞定採購進貨、訂單銷貨、庫存異動與盤點',
                    content: '利用條碼的精準辨識和手持式智慧裝置的移動特性，簡化作業流程、 新進人員可以達成跟熟手一樣的作業水平，讓物料精準供應、庫存即時正確、出貨準確快 速，並搭配警訊報表通知，打好營收翻倍的基礎。 本次研討會透過擁有多家企業輔導案例的專家，詳細說明 ERP 和手持式裝置的整合運用效益，且提供實際案例情境和系統作業的畫面，讓與會人員深入了解方案的效益和 作業方式。 ',
                    url: 'https://www.digiwin.com/tw/dsc/activity/WB002890/WB00289002.htm'
                },
            ];
        }
    },
    mounted() {
        $('img[usemap]').rwdImageMaps();
    }
}
</script>