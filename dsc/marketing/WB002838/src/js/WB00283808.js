let md = new MobileDetect(window.navigator.userAgent);
if (md.mobile()) {
    new WOW().init();
}

const store = new Vuex.Store({
    state: {
        isMobile: false,
        showMask: true,
        showAd: true,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        toggleMask(state, payload) {
            state.showMask = payload;
        },
        toggleAd(state, payload) {
            state.showAd = payload;
        },
    }
});

new Vue({
    el: '#ad',
    components: {
        'ad': httpVueLoader('components/Ad.vue'),
        'menu-mask': httpVueLoader('components/MenuMask.vue'),
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
    },
    mounted() {
        this.mediaSensor();
    },
});