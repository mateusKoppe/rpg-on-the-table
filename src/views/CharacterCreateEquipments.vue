<template>
  {{equipments}}
  <div v-for="(equipment, key) in equipments" :key="key">
    <EquipmentItem
      v-model="equipments[key]"
    />
  </div>
  <VButton
    text="Add"
    @click="addEquipment()"
  />
</template>

<script>
import EquipmentItem from '@/components/EquipmentItem.vue';

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
      this.$emit('update:modelValue', this.equipments)
    }
  },

  methods: {
    addEquipment () {
      this.equipments.push({})
    }
  }
}
</script>

