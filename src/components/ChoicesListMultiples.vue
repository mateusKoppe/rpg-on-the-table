<template>
  <div>
    <div v-for="(option, key) in choices.of" :key="key">
      <label :for="`choice-${key}`">{{option.name}}: </label>
      <input 
        v-model="markeds[option.value]"
        :id="`choice-${key}`"
        :disabled="disableds[option.value]"
        type="checkbox"
        @change="handlePick(option.value)"
      >
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'ChoicesListMultiples',

  props: {
    choices: Object,
    presets: {
      type: Array,
      default: function () {
        return []
      }
    }
  },

  data () {
    return {
      selecteds: {}
    }
  },

  computed: {
    disableds () {
      let disableds = {}
      this.presets.forEach(key => disableds[key] = true)
      if (this.isListLocked) {
        this.choices.of.forEach(option => {
          if (!this.selecteds[option.value]) {
            disableds[option.value] = true
          }
        })
      }
      return disableds
    },
    markeds () {
      let presets = (() => {
        let obj = {}
        this.presets.forEach(item => {obj[item] = true})
        return obj
      })()
      return Object.assign(presets, this.selecteds)
    },
    pickedsAmount () {
      if (Object.keys(this.selecteds).length == 0) {
        return 0
      }
      return (
        Object.keys(this.selecteds)
          .map(key => this.selecteds[key])
          .reduce((accumulate, value) => {
            return accumulate + value
          })
      )
    },
    isListLocked () {
      if (this.choices.pick === "free") {
        return false
      }
      let pickLimit = this.choices.pick
      if (this.pickedsAmount >= pickLimit) {
        return true
      } else {
        return false
      }
    }
  },

  methods: {
    formatInput (input) {
      let result = []
      for (const key in input) {
        if (input[key]) {
          result.push(key)
        }
      }
      return result
    },
    handlePick (key) {
      let optionValue = !this.selecteds[key]
      Vue.set(this.selecteds, key, optionValue)
      this.triggerInput()
    },
    triggerInput () {
      this.$emit('input', this.formatInput(this.selecteds))
    }
  }
}
</script>

