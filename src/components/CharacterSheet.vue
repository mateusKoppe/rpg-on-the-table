<template>
<div>
  <h2>{{character.name}}</h2>
  <router-link :to="{name: 'CharacterList'}">Sair</router-link>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CharacterSheet',

  computed: {
    ...mapGetters({
      character: 'actualCharacter'
    })
  }
}
</script>
