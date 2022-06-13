import { createApp } from "vue";
import App from "./App.vue";
import Router from "./routes";
import Stores from "./stores";

createApp(App).use(Router).use(Stores).mount("#app");
