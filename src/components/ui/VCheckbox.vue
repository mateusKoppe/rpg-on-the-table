<template>
<div class="VCheckbox">
  <input class="VCheckbox__hiddenInput" ref="hiddenInput" type="checkbox" v-model="maskedValue">
  <span class="VCheckbox__fakeInput" @click="toggleValue()" @mousedown="focusHiddenInput">
    <span class="VCheckbox__check"></span>
  </span>
  <div class="VCheckbox__labelArea">
    <label @click="toggleValue()">
      {{label}}
    </label>
  </div>
</div>
</template>

<script>
export default {
  name: 'VCheckbox',

  props: {
    modelValue: Boolean,
    label: String
  },

  computed: {
    maskedValue: {
      get () {
        return this.modelValue
      },
      set () {
        this.$emit('update:modelValue', !this.modelValue)
      }
    }
  },

  methods: {
    toggleValue (value) {
      this.$refs.hiddenInput.focus()
      this.maskedValue = value
    },
    focusHiddenInput () {
      this.$refs.hiddenInput.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.VCheckbox {
  $gap: 10px;
  $checkbox-size: 24px;
  display: grid;
  grid-template-columns: $checkbox-size calc(100% - #{$checkbox-size + $gap});
  grid-gap: $gap;
  align-items: center;
}

.VCheckbox__hiddenInput {
  opacity: 0;
  position: absolute;

  &:focus + .VCheckbox__fakeInput {
    $shadow: darken(#c87c34, 30);
    box-shadow: 0 0 3px 1px $shadow;
  }

  &:checked + .VCheckbox__fakeInput .VCheckbox__check {
    width: 70%;
    height: 70%;
  }
}

.VCheckbox__fakeInput {
  $color: darken(#c87c34, 30);
  display: inline-block;
  border-radius: 2px;
  border: 2px solid $color;
  padding: .5em;
  transition: .1s all ease;
  position: relative;
}

.VCheckbox__check {
  $color: darken(#c87c34, 40);
  border-radius: 2px;
  position: absolute;
  width: 0%;
  height: 0%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: $color;
  transition: .1s all ease;
}

.VCheckbox__labelArea {
  padding-top: 3px;
}
</style>
