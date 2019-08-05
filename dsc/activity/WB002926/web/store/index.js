export const state = () => ({
    isMobile: false,
    showMask: false,
    castSlideIdx: 0,
});

export const mutations = {
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