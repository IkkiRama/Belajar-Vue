import { createWebHistory, createRouter } from "vue-router";

import Index from "../components/Layouts/Index.vue";
import Home from "../components/Layouts/Home.vue";
import About from "../components/Layouts/About.vue";
import Contact from "../components/Layouts/Contact.vue";
import Post from "../components/Layouts/Post/Post.vue";
import Posts from "../components/Layouts/Post/Posts.vue";
import Login from "../components/Layouts/Login.vue";
import PageNotFound from "../components/Layouts/PageNotFound.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/",
    name: "Index",
    component: Index,
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

  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.resolve({
  name: "PageNotFound",
  params: { pathMatch: ["not", "found"] },
}).href;

router.beforeEach((to, from, next) => {
  let auth = JSON.parse(localStorage.getItem("auth"));

  if (to.name !== "Login" && !auth) next({ name: "Login" });
  if (to.name === "Login" && auth) next({ name: "Home" });
  next();
});

export default router;
