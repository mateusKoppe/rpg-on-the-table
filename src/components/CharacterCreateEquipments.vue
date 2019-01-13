<template>
  <div>
    <div v-for="(equipment, key) in equipments" :key="key">
      <EquipmentItem
        v-model="equipments[key]"
      />
    </div>
    <VButton
      text="Add"
      @click="addEquipment"
    />
  </div>
</template>

<script>
// import CharacterService from '@/common/character.service'
// import ChoicesList from './ChoicesList'
import EquipmentItem from './EquipmentItem'

export default {
  name: 'CharacterCreateEquipments',

  props: {
    character: Object
  },

  components: {
    EquipmentItem
  },

  data () {
    return {
      equipments: []
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
  },

  methods: {
    addEquipment () {
      this.equipments.push({})
    }
  }

}
</script>

