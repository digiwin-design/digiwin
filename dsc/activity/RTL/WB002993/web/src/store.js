import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        device: null,
        isMobile: false,
        showMask: false,
        showPopup: false,
        result: null,
    },
    mutations: {
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
        togglePopup(state, payload) {
            state.showPopup = payload;
        },
    },
    actions: {
        getData({commit}) {
            axios.get('db.json').then(res => commit('setData', res.data));
        }
    }
})
