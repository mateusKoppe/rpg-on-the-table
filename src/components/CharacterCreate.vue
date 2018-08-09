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
import Character from '@/common/character.model'
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
      const character = new Character(
        this.characterData.race,
        this.characterData.class,
        this.characterData.background
      )
      this.$store.commit('setActualCharacter', character)
      this.$router.push({ name: 'CharacterSheet' })
    }
  }
}
</script>
