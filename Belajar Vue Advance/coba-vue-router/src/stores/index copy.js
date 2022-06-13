import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      likes: 0,
      username: "",
      credential: {},
    };
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
});

export default store;
