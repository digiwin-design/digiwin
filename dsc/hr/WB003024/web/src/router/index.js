import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/MA',
        name: 'ma',
        component: () => import(/* webpackChunkName: "ma" */ '../views/MA.vue')
    },
    {
        path: '/school',
        name: 'school',
        component: () => import(/* webpackChunkName: "school" */ '../views/School.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
