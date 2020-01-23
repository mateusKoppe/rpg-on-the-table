<template>
<div>
  <div v-for="(equipment, index) in value" :key="index">
    <EquipmentItem
      v-model="value[index]"
    />
  </div>
  <div v-if="!isCreating">
    <VButton
      text="Adicionar"
      @click="startCreating()"
    />
  </div>
  <div v-else>
    <EquipmentForm
      v-model="equipmentCreating"
    />
    <div>
      <VButton
        text="Cancel"
        @click="stopCreating()"
      />
      <VButton
        text="Add"
        @click="addEquipment()"
      />
    </div>
  </div>
</div>
</template>

<script>
import EquipmentItem from './EquipmentItem'
import EquipmentForm from './EquipmentForm'

export default {
  name: 'EquipmentList',

  components: {
    EquipmentItem,
    EquipmentForm
  },

  props: {
    value: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      equipmentCreating: {
        name: '',
        note: '',
        description: ''
      },
      isCreating: false,
    } 
  },

  methods: {
    addEquipment () {
      this.$emit('input', [
        ...this.value,
        {...this.equipmentCreating}
      ])
      this.equipmentCreating = {}
      this.stopCreating()
    },
    changeName () {
      this.$emit('input', {
        ...this.value,
        name: this.name
      })
    },
    startCreating () {
      this.isCreating = true
    },
    stopCreating () {
      this.isCreating = false
    }
  }
}
</script>

<style>

</style>
