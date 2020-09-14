import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory()


const router= createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/weather',
            component: () => import('../views/weather.vue')
        }
    ],
})
export default router