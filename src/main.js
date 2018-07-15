import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'

import modifier from '@/common/modifier.filter'
import VInput from '@/components/ui/VInput'
import VSelect from '@/components/ui/VSelect'

Vue.filter('modifier', modifier)

Vue.component(VInput.name, VInput)
Vue.component(VSelect.name, VSelect)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
