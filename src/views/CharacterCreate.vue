<template>
  <div>
    <h2>Character</h2>

    {{characterData}}

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

    <div v-if="stage == 5">
      <CharacterCreateEquipments v-model="characterData.equipments"/>
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
import CharacterCreateBasis from './CharacterCreateBasis.vue';
import CharacterCreateAbilities from './CharacterCreateAbilities.vue';
import CharacterCreateSkills from './CharacterCreateSkills.vue';
import CharacterCreateHitPoints  from './CharacterCreateHitPoints.vue';
import CharacterCreateEquipments  from './CharacterCreateEquipments.vue';

export default {
  name: 'CharacterCreate',

  components: {
    CharacterCreateBasis,
    CharacterCreateAbilities,
    CharacterCreateSkills,
    CharacterCreateHitPoints,
    CharacterCreateEquipments
  },

  data () {
    return {
      characterData: {},
      stage: 1
    }
  },

  computed: {
    isLastStage () {
      return this.stage === 5
    }
  },

  methods: {
    nextStage () {
      this.stage++
    },
    createCharacter () {
      this.$store.dispatch('createCharacter', { ...this.characterData })
      this.$router.push({ name: 'SheetStatus' })
    }
  }
}
</script>
