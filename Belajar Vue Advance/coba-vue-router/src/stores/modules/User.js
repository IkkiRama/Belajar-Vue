export default {
  namespaced: true,
  state: {
    username: "Rifki Romadhan",
    credential: {},
  },

  mutations: {
    setUsername(state, val) {
      state.username = val;
    },

    setCredential(state, value) {
      state.credential = value;
    },
  },

  actions: {
    async getCredential({ commit }) {
      const response = await fetch("https://randomuser.me/api");
      const { results } = await response.json();
      commit("setCredential", results[0]);
    },
  },
};
