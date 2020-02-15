<template>
<div>
  <h1 class="SheetEquipments__title">Equipments</h1>
  <EquipmentList
    v-model="character.data.equipments"
    @input="changeEquipment"
  />
</div>
</template>

<script>
import { mapGetters } from 'vuex'

import Character from '@/common/character.model'
import EquipmentList from "@/components/EquipmentList";

export default {
  name: 'SheetEquipment',

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

.SheetEquipments__title {
  text-align: center;
}
</style>
