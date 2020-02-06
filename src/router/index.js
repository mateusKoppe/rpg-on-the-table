import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import CharacterList from '@/views/CharacterList'
import CharacterCreate from '@/views/CharacterCreate'
import Sheet from '@/views/Sheet'
import SheetStatus from '@/views/SheetStatus'
import SheetWeapon from '@/views/SheetWeapon'
import SheetSkills from '@/views/SheetSkills'


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
      path: '/sheet',
      name: 'Sheet',
      component: Sheet,
      beforeEnter (to, from, next) {
        store.dispatch('loadCharacters')
        if (!store.getters.actualCharacter) {
          next({name: ''})
        } else {
          next()
        }
      },
      children: [
        {
          path: 'status',
          name: 'SheetStatus',
          component: SheetStatus
        },
        {
          path: 'weapon',
          name: 'SheetWeapon',
          component: SheetWeapon
        },
        {
          path: 'skills',
          name: 'SheetSkills',
          component: SheetSkills
        }
      ]
    }
  ]
})
