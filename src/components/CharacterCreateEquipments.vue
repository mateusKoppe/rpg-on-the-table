<template>
  <div>
    <VInput
      textarea
      v-model="equipments"
      label="Equipments"
    />
  </div>
</template>

<script>
// import CharacterService from '@/common/character.service'
// import ChoicesList from './ChoicesList'

export default {
  name: 'CharacterCreateEquipments',

  props: {
    character: Object
  },

  // components: {
  //   ChoicesList
  // },

  data () {
    return {
      equipments: ""
    }
  },

  // computed: {
  //   equipmentsToChoose () {
  //     const chooseList = []
  //     const characterService = new CharacterService(this.character)
  //     characterService.findPropertie('equipmentsToChoose')
  //       .forEach(list => {
  //         list.forEach(choose => chooseList.push(choose))
  //       })
  //     return chooseList
  //   }
  // },

  watch: {
    equipments () {
      this.$emit('input', this.equipments)
    }
  }

}
</script>

