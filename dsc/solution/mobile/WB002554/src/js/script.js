httpVueLoader.register(Vue, 'components/contact.vue');
httpVueLoader.register(Vue, 'components/main-header.vue');
httpVueLoader.register(Vue, 'components/section-title.vue');
httpVueLoader.register(Vue, 'components/vue-text-dot.vue');
httpVueLoader.register(Vue, 'components/index/carousel.vue');
httpVueLoader.register(Vue, 'components/hover-box.vue');
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
            path: '/demand/:tab?',
            component: httpVueLoader('views/demand.vue')
        },
        {
            path: '/issue/:tab?',
            component: httpVueLoader('views/issue.vue')
        },
        {
            path: '/orders/:tab?',
            component: httpVueLoader('views/orders.vue')
        },
        {
            path: '/cost/:tab?',
            component: httpVueLoader('views/cost.vue')
        },
        {
            path: '/quality/:tab?',
            component: httpVueLoader('views/quality.vue')
        },
        {
            path: '/smartFactory/:tab?',
            component: httpVueLoader('views/smartFactory.vue')
        },
        {
            path: '/seminar/:tab?',
            component: httpVueLoader('views/seminar.vue')
        },
        {
            path: '/case/:tab?',
            component: httpVueLoader('views/case.vue')
        },
        {
            path: '/control/:tab?',
            component: httpVueLoader('views/control.vue')
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