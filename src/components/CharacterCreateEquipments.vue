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

