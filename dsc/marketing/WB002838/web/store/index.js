import axios from 'axios';

export const state = () => ({
    device: null,
    isMobile: false,
    isMediumWidth: false,
    showMask: false,
    showAd: true,
});

export const mutations = {
    setDevice(state, payload) {
        state.device = payload;
    },
    updateDevice(state, payload) {
        state.isMobile = payload;
    },
    updateDevice2(state, payload) {
        state.isMediumWidth = payload;
    },
    toggleMask(state, payload) {
        state.showMask = payload;
    },
    toggleAd(state, payload) {
        state.showAd = payload;
    },
};