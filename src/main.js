import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'

import VInput from '@/components/ui/VInput'
import VSelect from '@/components/ui/VSelect'
import VButton from '@/components/ui/VButton'

Vue.component(VInput.name, VInput)
Vue.component(VSelect.name, VSelect)
Vue.component(VButton.name, VButton)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
