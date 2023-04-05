import Vue from "vue"
import Vuex from "vuex"
import Dashboard from "./dashboard"
import Mars from "./mars"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Dashboard,
    Mars,
  },
})
