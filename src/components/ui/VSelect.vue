<template>
  <div class="VSelect">
    <label class="VSelect__label">{{label}}</label>
    <select
      class="VSelect__input"
      :value="value"
      @change="e => $emit('input', e.target.value)"
    >
      <template v-if="options">
        <option
          v-for="(optionLabel, optionValue) in options"
          :key="optionValue"
          :value="optionValue"
        >{{optionLabel}}</option>
      </template>
      <slot v-else></slot>
    </select>
  </div>
</template>

<script>
export default {
  name: 'VSelect',

  props: {
    label: String,
    value: null,
    options: Object
  }
}
</script>

<style lang="scss">
@import '@/style/_utils.scss';

.VSelect {
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
