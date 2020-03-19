import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: [
        { path: '/', component: () => import('../view/Home.vue') },
        { path: '/detail', component: () => import('../view/Detail.vue') },
        { path: '/add', component: () => import('../view/Add.vue') }
    ]
})

export default router
