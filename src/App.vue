<template>
  <div id="app">
    <CharacterCreate/>
  </div>
</template>

<script>
import CharacterCreate from '@/components/CharacterCreate.vue'

export default {
  name: 'app',
  components: {
    CharacterCreate
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
