export default {
  state() {
    return {
      name: "Rifki Romadhan",
      kelas : "XII RPL 1",
      age : 17,
      credential: [],
    };
  }, 

  getters: {
    getKelas : (state) => state.kelas,
    getAge : (state) => state.age
  },

  mutations: {
    setName: (state, payload) => (state.name = payload),
    setCredential: (state, payload) => (state.credential = payload),
  },

  actions: {
    async getCredential({ commit }) {
      const response = await fetch("https://randomuser.me/api");
      const { results } = await response.json();
      commit("setCredential", results[0]);
    },
  },
};
