<template>
  <button
    class="VButton"
    :class="{
      'VButton--paper': paper
    }"
    :type="type"
  >{{text}}</button>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    text: String,
    type: {
      default: 'button'
    },
    paper: Boolean
  }
}
</script>

<style lang="scss">
@import '@/style/_utils.scss';

.VButton {
  @extend %texture;
  @include texture-shadow(3);

  cursor: pointer;
  font-size: 1rem;
  font-family: $font-family;
  padding: 5px 10px;
}

.VButton--paper {
  $color: darken(#c87c34, 5);
  box-shadow: none;
  background-color: $color;
  border: 2px solid darken(#c87c34, 30);
}
</style>
