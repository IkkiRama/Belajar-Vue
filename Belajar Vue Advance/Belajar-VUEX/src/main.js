import { createApp } from "vue";
import App from "./App.vue";
import Router from "./Routes";
import Store from "./Store";

createApp(App).use(Router).use(Store).mount("#app");
