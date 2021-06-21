<template>
<div>
  <h1 class="SheetEquipments__title">Equipments</h1>
  <EquipmentList
    v-model="equipments"
    @input="changeEquipment"
  />
</div>
</template>

<script>
import { mapGetters } from 'vuex'

import EquipmentList from "@/components/EquipmentList.vue";

export default {
  name: 'SheetEquipment',

  components: {
    EquipmentList
  },

  data () {
    return {
      equipments: []
    }
  },

  computed: {
    ...mapGetters({
      character: 'actualCharacter'
    })
  },

  watch: {
    character (value) {
      this.equipments = value.equipments
    }
  },

  created () {
    this.equipments = this.character.equipments
  },

  methods: {
    changeEquipment (value) {
      this.$store.dispatch('updateSelectedCharacter', {
        ...this.character,
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
