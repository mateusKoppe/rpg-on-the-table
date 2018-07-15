<template>
  <div class="VInput">
    <label class="VInput__label">{{label}}</label>
    <input
      v-bind="$attrs"
      class="VInput__input"
      v-model="input"
      @input="$emit('input', input)"
    >
  </div>
</template>

<script>
export default {
  name: 'VInput',

  props: {
    label: String,
    value: null,
  },

  data () {
    return {
      input: this.value
    }
  },  

  watch: {
    value (value) {
      this.input = value
    }
  }
}
</script>

<style lang="scss">
@import '@/style/_utils.scss';

.VInput {
  position: relative;
  margin: 1.1em 0;

  &__label {
    @extend %texture;
    @include texture-shadow(2);

    font-size: .9rem;
    line-height: 1em;
    padding: .1em .5em;
    position: absolute;
    left: 10px;
    top: -.5em;
  }
  
  &__input {
    @extend %texture;

    box-sizing: border-box;
    font-family: $font-family;
    padding: 10px;
    padding-top: 16px;
    width: 100%;
  }
}
</style>
