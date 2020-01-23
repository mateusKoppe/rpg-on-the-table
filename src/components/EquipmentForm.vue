<template>
<div>
  <VInput v-model="name"/>
  <VInput v-model="note"/>
  <VInput v-model="description"/>
</div>
</template>

<script>
export default {
  name: 'EquipmentForm',

  props: {
    value: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
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
