const state = {
  isDailyImageLoading: false,
  isMarsImageLoading: false,
}

const getters = {
  getIsDailyImageLoading(state) {
    return state.isDailyImageLoading
  },
  getIsMarsImageLoading(state) {
    return state.isMarsImageLoading
  },
}

const mutations = {
  mutate_isDailyImageLoading(state, value) {
    state.isDailyImageLoading = value
  },
  mutate_isMarsImageLoading(state, value) {
    state.isMarsImageLoading = value
  },
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions,
}
