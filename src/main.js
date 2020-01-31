import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'

import VButton from '@/components/ui/VButton'
import VCard from '@/components/ui/VCard'
import VCheckbox from '@/components/ui/VCheckbox'
import VInput from '@/components/ui/VInput'
import VModal from "@/components/ui/VModal";
import VSelect from '@/components/ui/VSelect'

Vue.component(VButton.name, VButton)
Vue.component(VCard.name, VCard)
Vue.component(VCheckbox.name, VCheckbox)
Vue.component(VInput.name, VInput)
Vue.component(VModal.name, VModal)
Vue.component(VSelect.name, VSelect)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
