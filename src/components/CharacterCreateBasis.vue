<template>
<div>
  <VInput label="Nome" v-model="form.name"/>
  <VInput label="Race" v-model="form.race"/>
  <VInput label="Class" v-model="form.class"/>
  <VInput label="Background" v-model="form.background"/>
  <!-- <VSelect
    label="Race"
    v-model="form.trees[0]"
  >
    <option
      v-for="(race, key) in races"
      :value="race"
      :key="key"
    >{{race.name}}</option>
  </VSelect>
  <VSelect
    label="Class"
    v-model="form.trees[1]"
  >
    <option
      v-for="(classs, key) in classes"
      :value="classs"
      :key="key"
    >{{classs.name}}</option>
  </VSelect>
  <VSelect
    label="Background"
    v-model="form.trees[2]"
  >
    <option
      v-for="(background, key) in backgrounds"
      :value="background"
      :key="key"
    >{{background.name}}</option>
  </VSelect> -->
</div>
</template>

<script>
import Vue from 'vue'
// import { backgrounds, classes, races } from '@/data'

export default {
  name: 'CharacterCreateBasis',

  props: {
    value: Object
  },

  data () {
    return {
      form: {},
      // backgrounds,
      // classes,
      // races
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
    },
    // 'form.race' () {
    //   if (this.form.subRace) {
    //     Vue.delete(this.form, 'subRace')
    //   }
    // }
  }
}
</script>
