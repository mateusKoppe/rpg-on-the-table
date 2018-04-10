<template>
  <div id="app">
    <CreateCharacter/>
  </div>
</template>

<script>
import CreateCharacter from '@/components/CreateCharacter.vue'

export default {
  name: 'app',
  components: {
    CreateCharacter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
