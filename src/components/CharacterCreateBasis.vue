<template>
<div>
  <VInput label="Nome" v-model="form.name"/>
  <VSelect
    label="Race"
    :list="races"
    optionvalue="key"
    optionkey="key"
    optionLabel="name"
    v-model="form.race"
  />
  <VSelect
    v-if="form.race && races[form.race].subRaces"
    label="SubRace"
    :list="races[form.race].subRaces"
    optionvalue="key"
    optionkey="key"
    optionLabel="name"
    v-model="form.subRace"
  />
  <VSelect
    label="Class"
    :list="classes"
    optionvalue="key"
    optionkey="key"
    optionLabel="name"
    v-model="form.class"
  />
  <VSelect
    label="Background"
    :list="backgrounds"
    optionvalue="key"
    optionkey="key"
    optionLabel="name"
    v-model="form.background"
  />
</div>
</template>

<script>
import Vue from 'vue'
import { backgrounds, classes, races } from '@/data'

export default {
  name: 'CharacterCreateBasis',

  props: {
    value: Object
  },

  data () {
    return {
      form: {},
      backgrounds,
      classes,
      races
    }
  },

  computed: {
    formatedCharacter () {
      return this.form
    }
  },

  watch: {
    formatedCharacter: {
      handler () {
        this.$emit('input', this.formatedCharacter)
      },
      deep: true
    },
    'form.race' () {
      if (this.form.subRace) {
        Vue.delete(this.form, 'subRace')
      }
    }
  }
}
</script>
