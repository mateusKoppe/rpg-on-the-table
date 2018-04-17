<template>
  <div>
    <h2>Character</h2>

    <template v-if="step === 0">
      <CharacterCreateBasis v-model="character"/>
    </template>

    <template v-else-if="step === 1">
      <h2>Abilities Scores</h2>
      <CharacterCreateAbilities v-model="character.abilities" :character="character"/>
    </template>

    <template v-else-if="step === 2">
      <h2>Skills</h2>
      <CharacterCreateSkills v-model="character.skills" :character="character"/>
    </template>

    <template v-else-if="step === 3">
      <h2>Hit points</h2>
      <CharacterCreateHitPoints :character="character"/>
    </template>

    <div>
      <button
        v-if="!isFirstStep"
        @click="stepPrev"
      >prev</button>
      <button
        v-if="!isLastStep"
        @click="stepNext"
      >next</button>
    </div>

    <pre>{{character}}</pre>
  </div>
</template>

<script>
import CharacterCreateAbilities from './CharacterCreateAbilities'
import CharacterCreateBasis from './CharacterCreateBasis'
import CharacterCreateHitPoints from './CharacterCreateHitPoints'
import CharacterCreateSkills from './CharacterCreateSkills'

export default {
  name: 'CharacterCreate',

  components: {
    CharacterCreateAbilities,
    CharacterCreateBasis,
    CharacterCreateHitPoints,
    CharacterCreateSkills
  },

  data () {
    return {
      character: {},
      step: 0
    }
  },

  computed: {
    isFirstStep () {
      return this.step === 0
    },
    isLastStep () {
      return this.step === 3
    }
  },

  methods: {
    stepNext () {
      this.step++
    },
    stepPrev () {
      this.step--
    }
  }
}
</script>
