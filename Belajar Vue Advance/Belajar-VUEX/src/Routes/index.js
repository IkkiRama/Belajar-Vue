import { createWebHistory, createRouter } from "vue-router";
import Post from "../components/Pages/Post/Post.vue";
import Posts from "../components/Pages/Post/Posts.vue";

import App from "../components/Layouts/App.vue";
import Login from "../components/Layouts/Login.vue";
import About from "../components/Pages/About.vue";
import Home from "../components/Pages/Home.vue";
import Contact from "../components/Pages/Contact.vue";
import NotFound from "../components/Pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },

    {
      path: "/",
      name: "App",
      component: App,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
        },
        {
          path: "about",
          name: "About",
          component: About,
        },
        {
          path: "contact",
          name: "Contact",
          component: Contact,
        },

        {
          path: "post",
          name: "Posts",
          component: Posts,
        },
        {
          path: "post/:id",
          name: "Post",
          component: Post,
        },
      ],
    },

    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ],
});

router.beforeEach((to, from, next) => {
  let isAuth = JSON.parse(localStorage.getItem("auth"));
  if (to.name !== "Login" && !isAuth) next({ name: "Login" });
  if (to.name === "Login" && isAuth) next({ name: "Home" });
  next();
});
router.resolve({
  name: "not-found",
  params: { pathMatch: ["not", "found"] },
}).href;

export default router;
