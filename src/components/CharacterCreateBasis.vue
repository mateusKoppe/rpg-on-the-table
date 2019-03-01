<template>
<div>
  <VInput label="Nome" v-model="form.name"/>
  <VInput label="Race" v-model="form.race"/>
  <VInput label="Class" v-model="form.class"/>
  <VInput label="Background" v-model="form.background"/>
</div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'CharacterCreateBasis',

  props: {
    value: Object
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
        this.$emit('input', this.form)
      },
      deep: true
    }
  }
}
</script>
