<template>
  <button
    class="VButton"
    :type="type"
    @click="$emit('click')"
  >{{text}}</button>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    text: String,
    type: {
      default: 'button'
    }
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
</style>
