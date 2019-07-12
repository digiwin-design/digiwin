httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/section-title.vue');
httpVueLoader.register(Vue, '/tw/dsc/assets/industry-list-v2/industry.vue');
httpVueLoader.register(Vue, 'components/case/accordion.vue');
httpVueLoader.register(Vue, 'components/case.vue');
httpVueLoader.register(Vue, 'components/customized/customized-case.vue');
httpVueLoader.register(Vue, 'components/customized/customized-swiper.vue');
httpVueLoader.register(Vue, 'components/solution/solution-section.vue');
Vue.use(VueAwesomeSwiper);

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
            });
        },
    },
});

const router = new VueRouter({
    routes: [
        {
            path: '/solution/:tab?',
            component: httpVueLoader('views/solution.vue')
        },
        {
            path: '/order/:tab?',
            component: httpVueLoader('views/order.vue')
        },
        {
            path: '/factoryManage/:tab?',
            component: httpVueLoader('views/factoryManage.vue')
        },
        {
            path: '/factoryLogistics/:tab?',
            component: httpVueLoader('views/factoryLogistics.vue')
        },
        {
            path: '/customized/:tab?',
            component: httpVueLoader('views/customized.vue')
        },
        {
            path: '/channelArrange/:tab?',
            component: httpVueLoader('views/channelArrange.vue')
        },
        {
            path: '/case/:tab?',
            component: httpVueLoader('views/case.vue')
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
        $('.page-submenu-list > li').removeClass('is-open');
    }
});

new Vue({
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