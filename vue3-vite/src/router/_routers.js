export default[
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
]