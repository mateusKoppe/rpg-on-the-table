<template>
  <div>
    <div v-if="choices.pick === 1">
      <ChoicesListSingle
        :choices="choices"
        v-model="selected"
      />
    </div>
    <div v-else>
      <ChoicesListMultiples
        :choices="choices"
        v-model="selected"
      />
    </div>
    <div v-if="selectedIsChoice">
      <ChoicesList
        :choices="selected.value"
        v-model="recursiveChoice"
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
    choices: Object
  },

  components: {
    ChoicesListSingle,
    ChoicesListMultiples
  },

  data () {
    return {
      selected: null
    }
  },

  computed: {
    selectedIsChoice () {
      return (
        this.selected &&
        this.selected.value &&
        this.selected.value.role === 'choice'
      )
    }
  },

  watch: {
    selected (value) {
      if (!this.selectedIsChoice) {
        this.$emit('input', value)
      }
    },
    recursiveChoice (value) {
      this.$emit('input', value)
    }
  }
}
</script>

