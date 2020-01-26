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

<style lang="scss">
@import '@/style/_utils.scss';

@font-face {
  font-family: '8bits';
  src: url(assets/fonts/8bits.TTF);
}

body {
  background-image: url(assets/stone-background.jpg);
  background-repeat: repeat;
  background-size: 160px;
  font-family: '8bits';
  font-size: 18px;
  margin: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: $font-family;
  padding: $app-margin-y $app-margin-x;
  overflow-x: hidden;
}
</style>
