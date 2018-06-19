<template>
  <div>
    <div v-if="choices.pick === 1">
      <ChoicesListSingle
        :choices="choices"
        :presets="presets"
        v-model="selected"
        @input="triggerInput"
      />
    </div>
    <div v-else>
      <ChoicesListMultiples
        :choices="choices"
        :presets="presets"
        v-model="selected"
        @input="triggerInput"
      />
    </div>
    <div v-if="isSelectedChoice">
      <ChoicesList
        :choices="selected.value"
        :presets="presets"
        v-model="recursiveChoice"
        @input="triggerInput"
      />
    </div>
  </div>
</template>

<script>
import ChoicesListSingle from './ChoicesListSingle'
import ChoicesListMultiples from './ChoicesListMultiples'

export default {
  name: 'ChoicesList',

  props: {
    choices: Object,
    presets: Array
  },

  components: {
    ChoicesListSingle,
    ChoicesListMultiples
  },

  data () {
    return {
      recursiveChoice: null,
      selected: null
    }
  },

  computed: {
    isSelectedChoice () {
      return (
        this.selected &&
        this.selected.value &&
        this.selected.value.role === 'choice'
      )
    }
  },

  methods: {
    triggerInput () {
      if (this.recursiveChoice && this.isSelectedChoice) {
        this.$emit('input', this.recursiveChoice)
      } else if (this.selected && !this.isSelectedChoice) {
        this.$emit('input', this.selected)
      } else {
        this.$emit('input', {})
      }
    }
  }
}
</script>

