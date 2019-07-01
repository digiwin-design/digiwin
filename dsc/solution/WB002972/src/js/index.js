httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/index/hover-box.vue');
httpVueLoader.register(Vue, 'components/index/slider-banner.vue');
httpVueLoader.register(Vue, 'components/index/slider-banner-s.vue');
httpVueLoader.register(Vue, 'components/index/slider.vue');
httpVueLoader.register(Vue, 'components/index/svg/section2-svg.vue');
httpVueLoader.register(Vue, 'components/index/svg/section3-svg.vue');
httpVueLoader.register(Vue, 'components/index/svg/section3-svg-s.vue');
httpVueLoader.register(Vue, 'components/index/svg/section4-svg.vue');
httpVueLoader.register(Vue, 'components/index/svg/section5-svg.vue');
httpVueLoader.register(Vue, 'components/index/svg/section6-svg.vue');
httpVueLoader.register(Vue, 'components/index/svg/section7-svg.vue');
httpVueLoader.register(Vue, 'components/index/slider-title.vue');

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
            return store.state.result;
        },
    },
    methods: {
        mediaSensor: _.throttle(function () {
            let mm = window.matchMedia('(min-width: 769px)');
            mm.addListener(this.resizeWidth);
            this.resizeWidth(mm);
        }, 100),
        resizeWidth(pMatchMedia) {
            let isMobile = pMatchMedia.matches ? false : true;
            store.commit('updateDevice', isMobile);
        },
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        window.addEventListener('resize', this.mediaSensor);
        this.mediaSensor();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.mediaSensor);
    }
});