<template>
<div>
  <h2>Characters</h2>
  {{characters}}
  <div v-for="(character, index) in characters" :key="index">
    <VButton
      :text="character.name"
      @click="selectCharacter(index)"
    />
  </div>
  <br>
  <router-link :to="{name: 'CharacterCreate'}">
    <VButton
      text="New"
    />
  </router-link>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'CharacterList',

  computed: {
    ...mapGetters([
      'characters'
    ])
  },

  mounted () {
    this.$store.dispatch('loadCharacters')
  },

  methods: {
    selectCharacter (character) {
      this.$store.commit('selectCharacter', character)
      this.$router.push({name: 'SheetStatus'})
    }
  }
}
</script>
