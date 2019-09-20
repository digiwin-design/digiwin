httpVueLoader.register(Vue, 'components/top.vue');
httpVueLoader.register(Vue, 'components/bottom.vue');
httpVueLoader.register(Vue, 'components/sub-links.vue');
httpVueLoader.register(Vue, 'components/1903_index/share-links.vue');
httpVueLoader.register(Vue, 'components/1903_index/hover-box.vue');
httpVueLoader.register(Vue, 'components/1903_index/focus.vue');

const store = new Vuex.Store({
    state: {
        isMobile: false,
        result: null,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        setData(state, payload) {
            state.result = payload;
        },
    },
    actions: {
        getData(context) {
            axios.get('db.json').then(res => {
                context.commit('setData', res.data);
            });
        },
    }
});

new Vue({
    el: 'main',
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
        result() {
            return store.state.result && store.state.result['1903'];
        },
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
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor();
    },
});