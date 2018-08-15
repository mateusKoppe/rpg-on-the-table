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
      const trees = this.characterData.trees.map(tree => tree.key)
      this.$store.commit('setActualCharacter', {
        name: this.characterData.name,
        trees
      })
      this.$router.push({ name: 'CharacterSheet' })
    }
  }
}
</script>
