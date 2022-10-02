import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGtag from "vue-gtag";

createApp(App)
  .use(store)
  .use(router)
  .use(VueGtag, {
    config: { id: process.env.VUE_APP_GA_ID },
  })
  .mount("#app");
