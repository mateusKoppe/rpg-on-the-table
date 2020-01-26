import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import CharacterList from '@/components/CharacterList'
import CharacterCreate from '@/components/CharacterCreate'
import Sheet from '@/components/Sheet'
import SheetStatus from '@/components/SheetStatus'
import SheetWeapon from '@/components/SheetWeapon'
import SheetSkills from '@/components/SheetSkills'


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
