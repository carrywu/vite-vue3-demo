/*
 * @Author: your name
 * @Date: 2020-09-17 10:43:45
 * @LastEditTime: 2020-09-17 11:18:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3/vue3-vite/src/router/index.js
 */
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routers from './_routers'
const routerHistory = createWebHistory()
const routerHashHistory = createWebHashHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
       ...routers
    ],
})
export default router