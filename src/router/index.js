import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import CharacterList from '@/components/CharacterList'
import CharacterCreate from '@/components/CharacterCreate'
import CharacterSheet from '@/components/CharacterSheet'

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
    },
    {
      path: '/character-sheet',
      name: 'CharacterSheet',
      component: CharacterSheet,
      beforeEnter (to, from, next) {
        if (!store.getters.actualCharacter) {
          next({name: ''})
        } else {
          next()
        }
      }
    }
  ]
})
