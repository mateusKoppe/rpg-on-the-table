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
import { classes, abilities } from '@/data'

export default {
  name: 'CharacterCreateHitPoints',

  props: {
    character: Object,
    value: Number
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
      this.$emit('input', value)
    }
  },

  created () {
    this.roll = this.characterClass.hitDieAvg
  }
}
</script>
