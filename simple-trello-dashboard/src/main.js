import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import AppButton from "./components/AppButton";

Vue.component("AppButton", AppButton);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
