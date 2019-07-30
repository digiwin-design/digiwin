const store = new Vuex.Store({
    state: {
        isMobile: true,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
    }
});

new Vue({
    el: '#section1-app',
    components: {
        'Mobile': httpVueLoader('components/Section1-mobile.vue'),
        'Desktop': httpVueLoader('components/Section1-desktop.vue'),
    },
    computed: {
        isMobile() {
            return store.state.isMobile;
        }
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
    mounted() {
        this.mediaSensor();
        new WOW().init();
    },
    template: `
        <div>
            <Mobile v-if="isMobile"></Mobile>
            <Desktop v-if="!isMobile"></Desktop>
        </div>
    `,
});