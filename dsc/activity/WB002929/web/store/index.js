export const state = () => ({
    device: null,
    isMobile: false,
    showMask: false,
    showPopup: false,
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
    togglePopup(state, payload) {
        state.showPopup = payload;
    },
};