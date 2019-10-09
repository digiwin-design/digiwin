httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, '/tw/dsc/assets/industry-list-v2/industry.vue');
Vue.use(VueAwesomeSwiper);

const store = new Vuex.Store({
    state: {
        isMobile: false,
        result: null,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        setData(state, payload) {
            state.result = payload;
        },
    },
    actions: {
        getData(context) {
            axios.get('db.json').then(res => {
                context.commit('setData', res.data);
                app.$nextTick(() => {
                    // 依據選單高度設定main上方間距
                    let menuHeight = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
                    document.querySelector('main').style.paddingTop = menuHeight > 50 ? '50px' : 0;
                });
            });
        },
    }
});

let app = new Vue({
    el: 'main',
    components: {
        LocalSwiper: VueAwesomeSwiper.swiper,
        LocalSlide: VueAwesomeSwiper.swiperSlide,
    },
    data: {
        swiperOptionA: {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        }
    },
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
        result() {
            return store.state.result;
        },
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
    methods: {
        mediaSensor() {
            let mm = window.matchMedia('(min-width: 769px)');
            mm.addListener(this.resizeWidth);
            this.resizeWidth(mm);
        },
        resizeWidth(pMatchMedia) {
            let isMobile = pMatchMedia.matches ? false : true;
            store.commit('updateDevice', isMobile);
        },
        scrollTo(target) {
            let offset = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
            let targetPos = document.querySelector(target).offsetTop;
            let finalPos = offset ? targetPos - offset : targetPos;
            window.scroll({ top: finalPos, left: 0, behavior: 'smooth' });
        }
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor();
    },
});