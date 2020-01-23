import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material'


// import "@/plugins/echarts";

// import Chartist from "chartist";

// Vue.prototype.$Chartist = Chartist;

Vue.use(VueMaterial)
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
