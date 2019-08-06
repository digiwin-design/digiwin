httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/intro/main-header.vue');
httpVueLoader.register(Vue, 'components/intro/article-component.vue');
httpVueLoader.register(Vue, 'components/intro/svg/section1-svg.vue');
httpVueLoader.register(Vue, 'components/intro/svg/section2-svg.vue');
httpVueLoader.register(Vue, 'components/intro/svg/section3-svg.vue');
httpVueLoader.register(Vue, 'components/intro/svg/section4-svg.vue');
httpVueLoader.register(Vue, 'components/intro/svg/section5-svg.vue');

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
        isIE() {
            return detectIE();
        },
        result() {
            return store.state.result;
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