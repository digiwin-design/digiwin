export const state = () => ({
    device: null,
    isMobile: false,
    showMask: false,
    castSlideIdx: 0,
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
    setCastSlideIdx(state, payload) {
        state.castSlideIdx = payload;
    },
};