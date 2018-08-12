<template>
  <div>
    <h2>Character</h2>

    <CharacterCreateBasis v-model="characterData"/>
    <VButton
      text="Next"
      @click="startTree"
    />
  </div>
</template>

<script>
import CharacterCreateBasis from './CharacterCreateBasis'

export default {
  name: 'CharacterCreate',

  components: {
    CharacterCreateBasis
  },

  data () {
    return {
      characterData: {}
    }
  },

  methods: {
    startTree () {
      this.$store.commit('setActualCharacter', this.characterData)
      this.$router.push({ name: 'CharacterSheet' })
    }
  }
}
</script>
