import { createStore } from "vuex";

import User from "./modules/User";
import Post from "./modules/Post";

const store = createStore({
  modules: {
    User,
    Post,
  },

  state() {
    return {
      username: "Rifki",
      like: 100,
    }; 
  },
});

export default store;
