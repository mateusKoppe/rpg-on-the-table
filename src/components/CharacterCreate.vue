<template>
  <div>
    <h2>Character</h2>

    <div v-if="stage == 1">
      <CharacterCreateBasis v-model="characterData"/>
    </div>

    <div v-if="stage == 2">
      <CharacterCreateHitPoints v-model="characterData.hitDice"/>
    </div>

    <div v-if="stage == 3">
      <CharacterCreateAbilities v-model="characterData.abilities"/>
    </div>

    <div v-if="stage == 4">
      <CharacterCreateSkills v-model="characterData.skills"/>
    </div>

    <VButton
      v-if="!isLastStage"
      text="Next"
      @click="nextStage"
    />
    <VButton
      v-if="isLastStage"
      text="Finish"
      @click="createCharacter"
    />
  </div>
</template>

<script>
import CharacterCreateBasis from './CharacterCreateBasis'
import CharacterCreateAbilities from './CharacterCreateAbilities'
import CharacterCreateSkills from './CharacterCreateSkills'
import CharacterCreateHitPoints  from './CharacterCreateHitPoints'

export default {
  name: 'CharacterCreate',

  components: {
    CharacterCreateBasis,
    CharacterCreateAbilities,
    CharacterCreateSkills,
    CharacterCreateHitPoints
  },

  data () {
    return {
      characterData: {},
      stage: 1
    }
  },

  computed: {
    isLastStage () {
      return this.stage === 4
    }
  },

  methods: {
    nextStage () {
      this.stage++
    },
    createCharacter () {
      this.$store.commit('setActualCharacter', { ...this.characterData })
      this.$router.push({ name: 'CharacterSheet' })
    }
  }
}
</script>
