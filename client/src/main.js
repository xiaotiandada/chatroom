import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import SocketIO from "socket.io-client";
import VueSocketIO from "vue-socket.io";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("http://localhost:3000/")
  })
);

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
