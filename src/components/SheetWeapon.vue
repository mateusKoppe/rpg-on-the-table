<template>
<div>
  <EquipmentList
    v-model="character.data.equipments"
    @input="changeEquipment"
  />
</div>
</template>

<script>
import { mapGetters } from 'vuex'

import Character from '@/common/character.model'
import EquipmentList from "./EquipmentList";

export default {
  name: 'SheetWeapon',

  components: {
    EquipmentList
  },

  computed: {
    ...mapGetters({
      characterData: 'actualCharacter'
    }),
    character () {
      const character = new Character(this.characterData)
      return character
    }
  },

  methods: {
    changeEquipment (value) {
      this.$store.dispatch('updateSelectedCharacter', {
        ...this.characterData,
        equipments: value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_utils.scss';
</style>
