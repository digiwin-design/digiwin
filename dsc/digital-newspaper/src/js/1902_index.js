Vue.use(VueAwesomeSwiper);
httpVueLoader.register(Vue, 'components/1902/Player.vue');
httpVueLoader.register(Vue, 'components/1902/HoverBox.vue');

const store = new Vuex.Store({
    state: {
        isMobile: false,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
    }
});

new Vue({
    el: 'main',
    data: {
        result: null,
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
        getData() {
            axios.get('db.json').then(res => {
                this.result = res.data['1902'];
            });
        },
        slideToggle(evt) {
            $(evt.target).toggleClass('active').next().slideToggle();
        }
    },
    created() {
        this.getData();
    },
    mounted() {
        this.mediaSensor();
    },
});