<template>
  <select v-model="selected">
    <option
      v-for="(option, index) in choices.of"
      :key="index"
      :value="option"
    >{{option.name || option}}</option>
  </select>
</template>

<script>
export default {
  name: 'ChoicesListSingle',

  props: {
    choices: Object
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
  }
}
</script>

