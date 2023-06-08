import { createApp } from "vue";
import App from "./App.vue";
import CompositionApi from '@vue/composition-api' //追加

createApp(App).use(router).mount("#app");
Vue.config.productionTip = false
Vue.use(CompositionApi) //追加

new Vue({
  render: h => h(App),
}).$mount('#app')