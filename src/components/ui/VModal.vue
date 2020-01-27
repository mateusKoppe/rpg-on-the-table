<template>
<div class="VModal" :class="{
  'VModal--opened': opened
}">
  <div class="VModal__escape-area" @click="close()"></div>
  <div class="VModal__content">
    <VCard paper>
      <slot></slot>
    </VCard>
  </div>
</div>
</template>

<script>
export default {
  name: 'VModal',

  data () {
    return {
      opened: false
    }
  },

  methods: {
    open () {
      this.opened = true
    },
    close () {
      this.opened = false
    },
    toggle () {
      this.opened = !this.opened
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/_utils.scss";

.VModal {
  top: 100vh;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 50;
  transition: top .5s ease;
    
}

.VModal__content {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0);
  transition: .3s all ease;
  width: calc(100vw - 50px);
}

.VModal__escape-area {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: background-color .1s ease;
}

.VModal--opened {
  top: 0;
  transition: .1s all ease;

  .VModal__escape-area {
    background-color: transparentize(black, .6);
  }
  
  .VModal__content {
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
