import Vue from "vue"
import VueRouter from "vue-router"

import MarsRoutes from './mars-routes'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: () => import('@/pages/Dashboard/Dashboard'),
        },
        ...MarsRoutes
    ],
})

export default router