<template>
  <div id="app">
    <router-view/>
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
