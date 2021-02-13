<template>
<div>
  <VInput
    label="Name"
    paper
    v-model="form.name"
    @input="updateModel()"
  />
  <VInput
    label="Short Description"
    paper
    v-model="form.shortDescription"
    @input="updateModel()"
  />
  <VInput
    label="Description"
    textarea
    paper
    v-model="form.description"
    @input="updateModel()"
  />
</div>
</template>

<script>
export default {
  name: 'FeatureForm',

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
        shortDescription: this.modelValue.shortDescription,
        description: this.modelValue.description
      }
    } 
  },

  watch: {
    modelValue: {
      deep: true,
      handler (value) {
        this.form.name = value.name
        this.form.shortDescription = value.shortDescription
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
