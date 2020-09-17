import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
const routerHistory = createWebHistory()
const routerHashHistory = createWebHashHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name:'Home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/weather',
            name:'Weather',
            component: () => import('../views/Weather.vue')
        },
        {
            path: '/logoin',
            name:'Logoin',
            component: () => import('../views/Logoin.vue')
        }
    ],
})
export default router