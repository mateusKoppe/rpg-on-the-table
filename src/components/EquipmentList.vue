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
      @click="creatingStart"
    />
  </div>
  <div v-else>
    Creating
    <div>
      <VButton
        text="Cancel"
        @click="creatingStop"
      />
    </div>
  </div>
</div>
</template>

<script>
import EquipmentItem from './EquipmentItem'

export default {
  name: 'EquipmentList',

  components: {
    EquipmentItem
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
      name: this.value.name,
      note: this.value.note,
    } 
  },

  watch: {
    value: {
      deep: true,
      handler (value) {
        this.name = value.name
        this.note = value.note
      }
    }
  },

  methods: {
    changeName () {
      this.$emit('input', {
        ...this.value,
        name: this.name
      })
    },
    creatingStart () {
      this.isCreating = true
    },
    creatingStop () {
      this.isCreating = false
    }
  }
}
</script>

<style>

</style>
