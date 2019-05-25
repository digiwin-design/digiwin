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
    components: {
        'seminar': httpVueLoader('components/seminar/main/Seminar.vue'),
    },
    data() {
        return {
            content: null
        };
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
        getData() {
            axios.get('db.json').then(res => {
                this.content = res.data;
            });
        }
    },
    created() {
        this.getData();
    },
    mounted() {
        window.addEventListener('resize', this.mediaSensor);
        this.mediaSensor();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.mediaSensor);
    }
});