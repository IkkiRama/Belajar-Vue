export default {
  namespaced: true,
  state: {
    likes: 0,
  },

  getters: {
    getFakeLikes(state) {
      return state.likes + 100;
    },
  }, 

  mutations: {
    addLikes(state) {
      state.likes++;
    },
  },
};
