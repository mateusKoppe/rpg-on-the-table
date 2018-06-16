<template>
  <div>
    <h2>Character</h2>

    <keep-alive>
      <template v-if="step === 0">
        <CharacterCreateBasis v-model="character"/>
      </template>

      <template v-else-if="step === 1">
        <h2>Abilities Scores</h2>
        <CharacterCreateAbilities
          :character="character"
          v-model="character.abilities"
        />
      </template>

      <template v-else-if="step === 2">
        <h2>Skills</h2>
        <CharacterCreateSkills
          :character="character"
          v-model="character.skills"
        />
      </template>

      <template v-else-if="step === 3">
        <h2>Weapons</h2>
        <CharacterCreateEquipments
          :character="character"
          v-model="character.equipments"
        />
      </template>
    </keep-alive>

    <div>
      <button
        v-if="!isFirstStep"
        @click="stepPrev"
      >prev</button>
      <button
        v-if="!isLastStep"
        @click="stepNext"
      >next</button>
      <button
        v-if="isLastStep"
        @click="done"
      >done</button>
    </div>

    <pre>{{character}}</pre>
  </div>
</template>

<script>
import CharacterCreateAbilities from './CharacterCreateAbilities'
import CharacterCreateBasis from './CharacterCreateBasis'
import CharacterCreateHitPoints from './CharacterCreateHitPoints'
import CharacterCreateSkills from './CharacterCreateSkills'
import CharacterCreateEquipments from './CharacterCreateEquipments'

export default {
  name: 'CharacterCreate',

  components: {
    CharacterCreateAbilities,
    CharacterCreateBasis,
    CharacterCreateHitPoints,
    CharacterCreateSkills,
    CharacterCreateEquipments
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
    },
    done () {
      this.$store.commit('addCharacter', this.character)
      this.$router.push({name: 'CharacterList'})
    }
  }
}
</script>
