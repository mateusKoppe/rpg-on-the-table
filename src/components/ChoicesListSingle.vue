<template>
  <select v-model="selected">
    <option
      v-for="(option, index) in choices.of"
      :key="index"
      :disabled="isDisabled(option)"
      :value="option"
    >{{option.name || option}}</option>
  </select>
</template>

<script>
export default {
  name: 'ChoicesListSingle',

  props: {
    choices: Object,
    presets: Array
  },

  data () {
    return {
      selected: null
    }
  },

  watch: {
    selected (value) {
      this.$emit('input', value)
    }
  },

  methods: {
    isDisabled (option) {
      return this.presets.includes(option.value)
    }
  }
}
</script>

