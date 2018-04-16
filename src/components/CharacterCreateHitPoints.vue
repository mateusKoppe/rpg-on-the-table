<template>
<div>
  <div>
    <label for="roll">Roll: </label>
    <input
      v-model="roll"
      type="number"
      :max="character.class.hitDie"
      min="1"
    >
    <p>Modifier: {{getModifier(character.abilities.con)}}</p>
    HitPoints: {{hitPoints}}
  </div>

</div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'CharacterCreateHitPoints',

  props: {
    character: Object
  },

  data () {
    return {
      roll: this.character.class.hitDieAvg
    }
  },

  computed: {
    hitPoints () {
      return +this.roll + this.getModifier(this.character.abilities.con)
    }
  },

  watch: {
    roll () {
      this.character.hitPoints = this.hitPoints
      Vue.set(this.character, 'hitPoints', this.hitPoints)
    }
  },

  methods: {
    getModifier (value) {
      return Math.floor((+value - 10) / 2)
    }
  }
}
</script>
