import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/icon/iconfont.css";

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: "medium", zIndex: 3000 });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
