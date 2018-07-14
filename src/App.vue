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
@font-face {
  font-family: '8bits';
  src: url(assets/fonts/8bits.TTF);
}

body {
  background-image: url(assets/stone-background.jpg);
  background-repeat: repeat;
  background-size: 160px;
  font-family: '8bits';
  margin: 0;
}

#app {
  font-family: '8bits', 'Avenir', Helvetica, Arial, sans-serif;
  padding: 15px;
}
</style>
