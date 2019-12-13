<template>
    <main>
        <template v-if="result">
            <StickyNav :links="result.links" v-if="isMobile"></StickyNav>

            <header>
                <div class="container">
                    <hgroup>
                        <h1 data-tag="企業法遵情況納入評鑑">
                            投資抵減、換發執照申請門檻變嚴！
                            <br />勞動事件法迎面而來，
                            <br />人資改革就是現在！
                        </h1>
                        <h2>鼎新人資解決方案，奠定企業運營的基石</h2>
                    </hgroup>
                </div>
            </header>

            <StickyNav :links="result.links" v-if="!isMobile"></StickyNav>

            <article id="section1" class="section1">
                <div class="container">
                    <h1 class="sectionTitle">2019法令政策新變革，準備好接招了嗎？</h1>
                    <ul class="section1-list">
                        <li v-for="list in result.section1" :key="list">
                            <p v-html="list"></p>
                        </li>
                    </ul>
                </div>
            </article>

            <article id="section2" class="section2">
                <div class="container">
                    <div class="sectionHeader">
                        <h1 class="sectionTitle">
                            不定時炸彈就在身邊！觸犯
                            <i>【勞動事件法】</i>將嚴重威脅企業利潤
                        </h1>
                        <p class="sectionDesc">
                            面對勞檢已有氣無力，《勞動事件法》又緊接而來！
                            <br />該法給企業帶來的殺傷力不亞於一例一休，若忽視它，您得來不易的利潤將受到威脅！
                        </p>
                    </div>
                    <div class="section2-boxs">
                        <HoverBox v-for="(item,idx) in result.section2" :key="item.title">
                            <template slot="content">
                                <p v-html="item.title" class="hoverBox-title"></p>
                                <div class="hoverBox-content">
                                    <p v-for="part in item.content" v-html="part" :key="part"></p>
                                </div>
                                <p class="hoverBox-bottom">
                                    <i>雇主面臨威脅</i>
                                </p>
                            </template>
                            <template slot="hover">
                                <p class="hoverBox-hover-title">雇主面臨威脅</p>
                                <div class="hoverBox-hover-content">
                                    <img
                                        :src="require(`~/assets/images/05/hoverBox-icon${idx+1}.png`)"
                                        alt
                                    />
                                    <p v-html="item.hoverContent"></p>
                                </div>
                            </template>
                        </HoverBox>
                    </div>
                    <p
                        class="section2-caption"
                    >說明：《勞動事件法》為針對勞資爭議訴訟處理，強化弱勢勞動者保障之政策，已於2018/11/9完成三讀通過，需於一年內正式實施上路。</p>
                </div>
            </article>

            <article id="section3" class="section3">
                <div class="container">
                    <div class="sectionHeader">
                        <h1 class="sectionTitle">
                            藉由依需規劃的管理應用方案，構建
                            <i>人資全方位發展</i>的藍圖
                        </h1>
                        <p class="sectionDesc">
                            《勞動事件法》將衝擊企業運營，如何避免讓員工心懷不滿，建立法遵完善的企業制度為重大根本！
                            <br />鼎新HRM與HRD提供與企業運營環環相扣的
                            <i>法令防範、人力資源、人才培育</i>等因應方案，
                            <br />與您一同實現
                            <i>｢罰鍰不上身、勞資相融洽、租稅都能省、營運向前行！｣</i>
                        </p>
                    </div>
                    <img src="~/assets/images/05/section3-illust.jpg" alt />
                </div>
            </article>

            <article id="section4" class="section4">
                <div class="container">
                    <h1 class="sectionTitle">HRM全面支持</h1>
                    <h2 class="sectionDesc">現在開始主動出擊！善用鼎新HRM，人資改革不成問題！</h2>
                    <Accordion :lists="result.section4"></Accordion>
                </div>
            </article>

            <Contact></Contact>
            <Ad></Ad>
        </template>
    </main>
</template>

<script>
import StickyNav from '~/components/05/StickyNav';
import Contact from '~/components/05/Contact';
import HoverBox from '~/components/05/HoverBox';
import Accordion from '~/components/05/Accordion';
import Ad from '~/components/05/Ad';

export default {
    head: {
        title: '投資抵減、換發執照申請門檻變嚴，勞動事件法迎面而來，人資改革就是現在！',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: '面對勞檢已有氣無力，《勞動事件法》又緊接而來！該法給企業帶來的殺傷力不亞於一例一休，若忽視它，您得來不易的利潤將受到威脅！'
            }
        ],
        link: [
            { rel: 'preload', href: `${process.env.BASE_URL}public/images/05/ad.jpg`, as: 'image' },
        ]
    },
    components: {
        StickyNav,
        Contact,
        HoverBox,
        Accordion,
        Ad,
    },
    asyncData({ $axios }) {
        return $axios.$get(`${process.env.API_URL}public/db.json`)
            .then(res => {
                return {
                    result: res['05'],
                };
            });
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
    },
};
</script>

<style lang="scss" src="~/assets/sass/05/style.scss"></style>