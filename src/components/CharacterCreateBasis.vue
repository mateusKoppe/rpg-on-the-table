<template>
<div>
  <div>
    <label for="name">Name: </label>
    <input v-model="form.name" id="name"/>
  </div>
  <div>
    <label for="race">Race: </label>
    <select v-model="form.race" id="race">
      <option
        v-for="(race, key) in races"
        :value="key"
        :key="key"
      >{{race.name}}</option>
    </select>
  </div>
  <div v-if="form.race && races[form.race].subRaces">
    <label for="subRace">SubRace: </label>
    <select v-model="form.subRace" id="subRace">
      <option
        v-for="(subRace, key) in races[form.race].subRaces"
        :value="key"
        :key="key"
      >{{subRace.name}}</option>
    </select>
  </div>
  <div>
    <label for="class">Classe: </label>
    <select v-model="form.class" id="class">
      <option
        v-for="(classe, index) in classes"
        :value="index"
        :key="index"
      >{{classe.name}}</option>
    </select>
  </div>
  <div>
    <label for="background">Background: </label>
    <select v-model="form.background" id="background">
      <option
        v-for="(background, key) in backgrounds"
        :value="key"
        :key="key"
      >{{background.name}}</option>
    </select>
  </div>
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
