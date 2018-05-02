<template>
  <div>
    <div
      v-for="(choises, index) in equipmentsToChoose"
      :key="index"
    >
      <ChoicesList :choices="choises"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { equipments } from "@/data"
import CharacterService from '@/common/character.service'
import ChoicesList from './ChoicesList'

export default {
  name: 'CharacterCreateEquipments',

  props: {
    character: Object
  },

  components: {
    ChoicesList
  },

  data () {
    return {
      equipmentsToChoose: []
    }
  },

  created () {
    this.defineWeaponsToChoose()
  },

  methods: {
    defineWeaponsToChoose () {
      const chooseList = []
      const characterService = new CharacterService(this.character)
      characterService.findPropertie('equipmentsToChoose')
        .forEach(list => {
          list.forEach(choose => chooseList.push(choose))
        })
      Vue.set(this, 'equipmentsToChoose', chooseList)
    }
  }

}
</script>

