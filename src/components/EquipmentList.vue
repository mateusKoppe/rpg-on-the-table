<template>
<div>
  <div v-for="(equipment, index) in value" :key="index">
    <EquipmentItem v-model="value[index]" @input="updateEquipment"/>
  </div>
  <VButton
    text="Add"
    @click="startCreating()"
  />
  <VModal ref="equipmentsFormModal">
    <EquipmentForm v-model="equipmentCreating"/>
    <div class="EquipmentList__form-buttons">
      <VButton
        text="Cancel"
        @click="stopCreating()"
      />
      <VButton
        text="Save"
        @click="addEquipment()"
      />
    </div>
  </VModal>
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
      type: Array
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

  created () {
    if (!this.value) this.$emit('input', [])
  },

  watch: {
    value () {
      if (!this.value) this.$emit('input', [])
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
    updateEquipment () {
      const list = [...this.value]
      this.$emit('input', list)
    },
    startCreating () {
      this.$refs.equipmentsFormModal.open()
      this.equipmentCreating = {}
    },
    stopCreating () {
      this.$refs.equipmentsFormModal.close()
    }
  }
}
</script>

<style>
.EquipmentList__form-buttons {
  text-align: right;
}
</style>
