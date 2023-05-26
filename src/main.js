import Vue from 'vue'
import storeCtf4 from './store';
import App from './App.vue'

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  store: storeCtf4
}).$mount('#app')
