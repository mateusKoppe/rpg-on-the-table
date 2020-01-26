<template>
  <div class="VInput">
    <label class="VInput__label">{{label}}</label>
    <textarea
      rows="rows"
      v-bind="$attrs"
      v-if="textarea"
      class="VInput__input"
      v-model="input"
      @input="$emit('input', input)"
    ></textarea>
    <input
      v-bind="$attrs"
      v-else
      class="VInput__input"
      v-model="input"
      @input="$emit('input', input)"
    >
  </div>
</template>

<script>
export default {
  name: 'VInput',

  inheritAttrs: false,

  props: {
    label: String,
    textarea: Boolean,
    rows: {
      type: Number,
      default: 4
    },
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

    font-size: .9em;
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
    font-size: 1.1em;
    padding: 10px;
    padding-top: 16px;
    width: 100%;
  }
}
</style>
