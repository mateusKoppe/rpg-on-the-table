<template>
  <div class="VInput" :class="{
    'VInput--paper': paper 
  }">
    <label class="VInput__label">{{label}}</label>
    <textarea
      :rows="rows"
      v-bind="$attrs"
      v-if="textarea"
      class="VInput__input"
      :value="modelValue"
      @input="e => $emit('update:modelValue', e.target.value)"
      @change="e => $emit('update:modelValue', e.target.value)"
    ></textarea>
    <input
      v-bind="$attrs"
      v-else
      class="VInput__input"
      :value="modelValue"
      @input="e => $emit('update:modelValue', e.target.value)"
      @change="e => $emit('update:modelValue', e.target.value)"
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
    paper: Boolean,
    rows: {
      type: Number,
      default: 4
    },
    modelValue: null
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

.VInput--paper {
  $color: darken(#c87c34, 5);
  .VInput__label {
    box-shadow: none;
    background-color: $color;
    border: 2px solid darken(#c87c34, 30);
  }

  .VInput__input {
    box-shadow: none;
    background-color: $color;
    border: 2px solid darken(#c87c34, 30);
  }
}
</style>
