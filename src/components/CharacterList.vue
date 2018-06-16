<template>
<div>
  <h2>Characters</h2>
  <div v-for="(character, index) in characters" :key="index">
    <button @click="selectCharacter(character)">{{character.name}}</button>
  </div>
  <br>
  <router-link :to="{name: 'CharacterCreate'}">Criar</router-link>
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

  methods: {
    selectCharacter (character) {
      this.$store.commit('setActualCharacter', character)
      this.$router.push({name: 'CharacterSheet'})
    }
  }
}
</script>
