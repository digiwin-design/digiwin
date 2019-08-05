export const state = () => ({
    device: null,
    isMobile: false,
    showMask: false,
    showAd: true,
    result: null,
});

export const mutations = {
    setDevice(state, payload) {
        state.device = payload;
    },
    updateDevice(state, payload) {
        state.isMobile = payload;
    },
    toggleMask(state, payload) {
        state.showMask = payload;
    },
    toggleAd(state, payload) {
        state.showAd = payload;
    },
    setData(state, payload) {
        state.result = payload;
    },
};