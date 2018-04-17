<template>
<div>
  <div>
    <label for="roll">Roll: </label>
    <input
      v-model="roll"
      type="number"
      :max="characterClass.hitDie"
      min="1"
    >
    <p> HitPoints: {{hitPoints}} </p>
  </div>

</div>
</template>

<script>
import Vue from 'vue'
import classes from '@/data/classes'
import abilities from '@/data/abilities'

export default {
  name: 'CharacterCreateHitPoints',

  props: {
    character: Object
  },

  data () {
    return {
      roll: 1
    }
  },

  computed: {
    characterClass () {
      return classes[this.character.class]
    },
    hitPoints () {
      return +this.roll + this.contitutionModifier
    },
    contitutionModifier () {
      return abilities.con.mod(this.character.abilities.con)
    }
  },

  watch: {
    hitPoints (value) {
      // console.log(value)
    }
  },

  created () {
    this.roll = this.characterClass.hitDieAvg
  }
}
</script>
