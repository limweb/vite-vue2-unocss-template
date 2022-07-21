import Vue from 'vue'
import VueRouter from 'vue-router' // 注册路由插件
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue')
}, {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
}]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router