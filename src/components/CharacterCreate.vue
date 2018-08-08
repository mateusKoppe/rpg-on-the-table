<template>
  <div>
    <h2>Character</h2>

    <CharacterCreateBasis v-model="character"/>
    <VButton
      text="Next"
      @click="startTree"
    />

    <pre>{{character}}</pre>
  </div>
</template>

<script>
import Character from '@/common/character.service'
import CharacterCreateBasis from './CharacterCreateBasis'

export default {
  name: 'CharacterCreate',

  components: {
    CharacterCreateBasis
  },

  data () {
    return {
      character: {},
      choices: [],
      actualChoice: 0
    }
  },

  methods: {
    startTree () {
      const character = new Character(this.character)
      this.choices = character.choices
    }
  }
}
</script>
