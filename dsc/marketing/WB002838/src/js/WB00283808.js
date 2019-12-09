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