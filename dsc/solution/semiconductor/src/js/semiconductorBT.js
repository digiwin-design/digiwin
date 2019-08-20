httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/section-title.vue');
// httpVueLoader.register(Vue, 'components/semiconductorBT/hover-box.vue');
// Vue.use(VueAwesomeSwiper);

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
                app.init();
            });
        },
    }
});

let app = new Vue({
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
        mediaSensor() {
            let mm = window.matchMedia('(min-width: 769px)');
            mm.addListener(this.resizeWidth);
            this.resizeWidth(mm);
        },
        resizeWidth(pMatchMedia) {
            let isMobile = pMatchMedia.matches ? false : true;
            store.commit('updateDevice', isMobile);
        },
        init() {
            (function () {
                $('#scheme ul li').hover(function () {
                    $(this).find('.fadein').stop().animate({ 'top': '0' });
                    $(this).find('.fadeout');
                }, function () {
                    $(this).find('.fadein').stop().animate({ 'top': '130%' });
                    $(this).find('.fadeout');
                });
            })();

            (function () {
                $('.LIom').on('click', function () {
                    $(this).addClass('current').next('.LIdo').slideToggle(300)
                        .siblings('.LIdo').slideUp();
                    $(this).siblings().removeClass('current');
                });
            })();
        }
    },
    created() {
        store.dispatch('getData');
    },
    mounted() {
        this.mediaSensor();
    },
});