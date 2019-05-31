// Vue.use(VueAwesomeSwiper);
// httpVueLoader.register(Vue, 'components/HoverBox.vue');
httpVueLoader.register(Vue, 'components/Contact.vue');
httpVueLoader.register(Vue, 'components/VideoSection.vue');
httpVueLoader.register(Vue, 'components/Popup.vue');
httpVueLoader.register(Vue, 'components/Accordion.vue');
httpVueLoader.register(Vue, 'components/Process.vue');

const store = new Vuex.Store({
    state: {
        isMobile: false,
        isSmallScreen: false,
        result: null,
        slideIdx: 0,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        updateSmallDevice(state, payload) {
            state.isSmallScreen = payload;
        },
        setData(state, payload) {
            state.result = payload;
        },
        setSlideIdx(state, payload) {
            state.slideIdx = payload;
        },
    }
});

new Vue({
    el: 'main',
    data() {
        return {
            processId: 0,
        };
    },
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
        isSmallScreen() {
            return store.state.isSmallScreen;
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
        mediaSensorBySmall: _.throttle(function () {
            let mm = window.matchMedia('(min-width: 1200px)');
            mm.addListener(this.resizeWidthBySmall);
            this.resizeWidthBySmall(mm);
        }, 100),
        resizeWidthBySmall(pMatchMedia) {
            let isSmallScreen = pMatchMedia.matches ? false : true;
            store.commit('updateSmallDevice', isSmallScreen);
        },
        getData() {
            axios.get('db.json').then(res => {
                store.commit('setData', res.data);
            });
        },
        showPopup(idx) {
            store.commit('setSlideIdx', idx);
            $('#popup').popup('show');
            $.smartScroll($('#popup_wrapper'), $('#popup')); // 阻止body滾動
        },
    },
    created() {
        this.getData();
    },
    mounted() {
        window.addEventListener('resize', this.mediaSensor);
        this.mediaSensor();
        window.addEventListener('resize', this.mediaSensorBySmall);
        this.mediaSensorBySmall();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.mediaSensor);
        window.removeEventListener('resize', this.mediaSensorBySmall);
    }
});