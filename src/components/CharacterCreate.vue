<template>
  <div>
    <h2>Character</h2>

    <CharacterCreateBasis v-model="character"/>
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
      character: {}
    }
  },

  methods: {
    startTree () {
      this.$store.commit('setActualCharacter', this.character)
      this.$router.push({ name: 'CharacterSheet' })
    }
  }
}
</script>
