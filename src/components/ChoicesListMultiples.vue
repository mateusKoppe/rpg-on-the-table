<template>
  <div>
    <div v-for="(option, key) in choices.of" :key="key">
      <label :for="`choice-${key}`">{{option.name}}: </label>
      <input 
        v-model="selecteds[option.value]"
        :id="`choice-${key}`"
        :disabled="disableds[option.value]"
        type="checkbox"
        @change="handlePick"
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
    presets: Array
  },

  data () {
    return {
      selecteds: {},
      disableds: {}
    }
  },

  watch: {
    selecteds: {
      handler (value) {
        this.$emit('input', this.formatInput(value))
      },
      deep: true
    },
    presets: {
      handler (value) {
        value.forEach(key => {
          Vue.set(this.selecteds, key, true)
          Vue.set(this.disableds, key, true)
        })
      },
      deep: true
    }
  },

  methods: {
    formatInput (input) {
      let result = []
      for (const key in input) {
        if (input[key] &&
          (this.presets ? !this.presets.includes(key) : true)
        ) {
          result.push(key)
        }
      }
      return result
    },
    handlePick () {
      const pickeds = (
        Object.keys(this.selecteds)
          .map(key => this.selecteds[key])
          .reduce((accumulate, value) => {
            return accumulate + value
          })
      )
      let pickLimit = this.choices.pick
      pickLimit += this.presets ? this.presets.length : 0
      if (pickeds >= pickLimit) {
        this.lockList()
      } else {
        this.releaseList()
      }
    },
    lockList () {
      const options = this.choices.of
      let disableds = {}
      options.forEach(option => {
        if (!this.selecteds[option.value]) {
          disableds[option.value] = true
        }
      })
      Vue.set(this, 'disableds', disableds)
    },
    releaseList () {
      Vue.set(this, 'disableds', {})
    },
  }
}
</script>

