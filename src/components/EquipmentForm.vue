<template>
<div>
  <VInput
    label="Name"
    paper
    v-model="form.name"
    @input="updateModel()"
  />
  <VInput
    label="Note"
    paper
    v-model="form.note"
    @input="updateModel()"
  />
  <VInput
    label="Description"
    paper
    v-model="form.description"
    @input="updateModel()"
  />
</div>
</template>

<script>
export default {
  name: 'EquipmentForm',

  props: {
    modelValue: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      form: {
        name: this.modelValue.name,
        note: this.modelValue.note,
        description: this.modelValue.description
      }
    } 
  },

  watch: {
    modelValue: {
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
      this.$emit('update:modelValue', {
        ...this.form
      })
    }
  }
}
</script>

<style>

</style>
