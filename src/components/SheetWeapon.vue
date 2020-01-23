<template>
<div>
  <EquipmentList v-model="character.data.equipments"/>
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
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_utils.scss';
</style>
