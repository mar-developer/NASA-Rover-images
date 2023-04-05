export default [
  {
    path: "/mars-yesterday",
    name: "mars-yesterday",
    component: () => import("@/pages/Mars/Yesterday/MarsYesterday.vue"),
  },
  {
    path: "/mars-today",
    name: "mars-today",
    component: () => import("@/pages/Mars/Today/MarsToday.vue"),
  }
]