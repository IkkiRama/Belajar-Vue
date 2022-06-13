export default {
  state() {
    return {
      likes: 80,
    };
  },

  getters: {
    getLikes: (state) => state.likes + 340,
  },

  mutations: {
    addLike: (state) => state.likes++,
    decrementLike: (state) => state.likes--,
  },

  actions: {},
};
