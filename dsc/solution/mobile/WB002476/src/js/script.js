// Vue.use(VueAwesomeSwiper);
httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/slider-banner-s.vue');
httpVueLoader.register(Vue, 'components/index/tabs.vue');

let mixin = {
    computed: {
        result() {
            return store.state.result;
        }
    },
};

NProgress.configure({ showSpinner: false });

const store = new Vuex.Store({
    state: {
        result: null,
    },
    mutations: {
        setData(state, payload) {
            state.result = payload;
        },
    },
    actions: {
        getData(context) {
            axios.get('db.json').then(res => {
                context.commit('setData', res.data);
                app.$nextTick(() => {
                    // 依據選單高度設定main上方間距
                    let menuHeight = document.querySelector('.page-submenu') && document.querySelector('.page-submenu').offsetHeight;
                    document.querySelector('main').style.paddingTop = menuHeight > 50 ? '50px' : 0;
                });
            });
        },
    },
});

const router = new VueRouter({
    routes: [
        {
            path: '/industry/:tab?',
            component: httpVueLoader('views/industry.vue')
        },
        {
            path: '/:tab?',
            component: httpVueLoader('views/index.vue')
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});
router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});
router.afterEach((to, from) => {
    let submenu = document.querySelector('.page-submenu');
    if (to.params.tab) {
        let tab = parseInt(to.params.tab, 10);
        $(submenu).addClass('active').find(`li:nth-child(${tab})`).addClass('active').siblings().removeClass('active');
    }
    else {
        $(submenu).removeClass('active').find('li').removeClass('active');
    }
    if (to.path !== '/seminar') {
        NProgress.done();
    }
});

const app = new Vue({
    el: 'main',
    router,
    computed: {
        result() {
            return store.state.result;
        }
    },
    created() {
        store.dispatch('getData');
    },
});