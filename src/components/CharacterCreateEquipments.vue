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
      this.$emit('input', this.equipments)
    }
  }

}
</script>

