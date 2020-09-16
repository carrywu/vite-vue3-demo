import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
const routerHistory = createWebHistory()
const routerHashHistory = createWebHashHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/weather',
            component: () => import('../views/Weather.vue')
        },
        {
            path: '/logoin',
            component: () => import('../views/Logoin.vue')
        }
    ],
})
export default router