import { createStore } from "vuex";
import Post from "./modules/Post";
import User from "./modules/User";

const store = createStore({
  modules: {
    User,
    Post,
  },
});

export default store;
