import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        device: null,
        isMobile: false,
        showMask: false,
        result: null,
        loading: true,
    },
    mutations: {
        setDevice(state, payload) {
            state.device = payload;
        },
        setDeviceType(state, payload) {
            state.isMobile = payload;
        },
        setMask(state, payload) {
            state.showMask = payload;
        },
        setData(state, payload) {
            state.result = payload;
        },
        setLoading(state, payload) {
            state.loading = payload;
        },
    },
    actions: {
        getData({commit}) {
            axios.get('db.json').then(res => commit('setData', res.data));
        },
    }
})
