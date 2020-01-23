<template>
<div>
  <VInput
    label="Name"
    v-model="form.name"
    @input="updateModel()"
  />
  <VInput
    label="Note"
    v-model="form.note"
    @input="updateModel()"
  />
  <VInput
    label="Description"
    v-model="form.description"
    @input="updateModel()"
  />
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
      form: {
        name: this.value.name,
        note: this.value.note,
        description: this.value.description
      }
    } 
  },

  watch: {
    value: {
      deep: true,
      handler (value) {
        this.form.name = value.name
        this.form.note = value.note
        this.form.description = value.description
      }
    }
  },

  methods: {
    updateModel () {
      this.$emit('input', {
        ...this.form
      })
    }
  }
}
</script>

<style>

</style>
