export const state = () => ({
    device: null,
    isMobile: true,
    showMask: false,
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
    setData(state, payload) {
        state.result = payload;
    },
};