<template>
<div>
  <VInput label="Nome" v-model="form.name"/>
  <VSelect
    label="Race"
    v-model="form.race"
  >
    <option
      v-for="(race, key) in races"
      :value="key"
      :key="key"
    >{{race.name}}</option>
  </VSelect>
  <VSelect
    v-if="form.race && races[form.race].subRaces"
    label="SubRace"
    v-model="form.subRace"
  >
    <option
      v-for="(subRace, key) in races[form.race].subRaces"
      :value="key"
      :key="key"
    >{{subRace.name}}</option>
  </VSelect>
  <VSelect
    label="Class"
    v-model="form.class"
  >
    <option
      v-for="(classs, key) in classes"
      :value="key"
      :key="key"
    >{{classs.name}}</option>
  </VSelect>
  <VSelect
    label="Background"
    v-model="form.background"
  >
    <option
      v-for="(background, key) in backgrounds"
      :value="key"
      :key="key"
    >{{background.name}}</option>
  </VSelect>
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
