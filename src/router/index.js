import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "homePage",
      component: () => import("@/components/HomePage.vue"),
    },
    {
      path: "/mars-yesterday",
      name: "marsYesterday",
      component: () => import("@/components/MarsYesterday.vue"),
    },
    {
      path: "/mars-today",
      name: "marsToday",
      component: () => import("@/components/MarsToday.vue"),
    },
  ],
})

export default router
