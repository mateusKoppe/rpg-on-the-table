<template>
  <div>
    <div
      v-for="(choises, index) in equipmentsToChoose"
      :key="index"
    >
      <ChoicesList
        :choices="choises"
        v-model="equipments[index]"
        @input="triggerInput"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
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
      equipments: []
    }
  },

  computed: {
    formatedEquipments () {
      let equipments = []
      this.equipments.forEach(choice => {
        if (choice.value) equipments.push(choice.value)
      })
      return equipments
    },
    equipmentsToChoose () {
      const chooseList = []
      const characterService = new CharacterService(this.character)
      characterService.findPropertie('equipmentsToChoose')
        .forEach(list => {
          list.forEach(choose => chooseList.push(choose))
        })
      return chooseList
    }
  },

  methods: {
    triggerInput () {
      this.$emit('input', this.formatedEquipments)
    }
  }

}
</script>

