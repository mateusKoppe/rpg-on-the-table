import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'

import modifier from './common/modifier.filter'

Vue.filter('modifier', modifier)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
