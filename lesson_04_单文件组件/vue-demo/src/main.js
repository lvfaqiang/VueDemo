import Vue from 'vue'
// import App from './App.vue'
// import PropsData from './views/props_data/index.vue'
import Computed from './views/computed/index.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Computed),
}).$mount('#app')
