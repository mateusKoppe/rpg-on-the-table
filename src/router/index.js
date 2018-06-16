import Vue from 'vue'
import Router from 'vue-router'

import CharacterList from '@/components/CharacterList'
import CharacterCreate from '@/components/CharacterCreate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CharacterList',
      component: CharacterList
    },
    {
      path: '/create-character',
      name: 'CharacterCreate',
      component: CharacterCreate
    }
  ]
})
