import Vue from "vue"
import Vuex from "vuex"
import ImagesModule from "./images-module"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ImagesModule,
  },
})
