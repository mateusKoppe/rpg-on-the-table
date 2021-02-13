<template>
<div>
  <VInput label="Nome" v-model="form.name"/>
  <VInput label="Race" v-model="form.race"/>
  <VInput label="Class" v-model="form.class"/>
  <VInput label="Background" v-model="form.background"/>
</div>
</template>

<script>
export default {
  name: 'CharacterCreateBasis',

  props: {
    modelValue: Object
  },

  data () {
    return {
      form: {}
    }
  },

  computed: {
    formatedCharacter () {
      return {
        ...this.form,
        proficiencyBonus: 2
      }
    }
  },

  watch: {
    form: {
      handler () {
        this.$emit('update:modelValue', this.form)
      },
      deep: true
    }
  }
}
</script>
