<template>
<div>
  <div v-for="(choices, key) in abilitiesToChoose" :key="key">
    Pick {{choices.pick}} of the folowing abilities:
    <choicesList
      :choices="choices"
      v-model="pickedAbilities[key]"
    />
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import { abilities } from '@/data'
import CharacterService from '@/common/character.service'
import ChoicesList from './ChoicesList'

export default {
  name: 'CharacterCreateAbilitiesExtras',

  components: {
    ChoicesList
  },

  props: {
    character: Object,
    value: Object
  },

  data () {
    return {
      pickedAbilities: []
    }
  },

  computed: {
    abilitiesToChoose () {
      let abilities = []
      const characterService = new CharacterService(this.character)
      characterService.findPropertie('abilitiesToChoose').forEach(list => {
        abilities = abilities.concat(list)
      })
      return abilities
    },
    formatedAbilities () {
      const points = {}
      Object.keys(abilities)
        .forEach(ability => { points[ability] = 0 })
      this.pickedAbilities.forEach(list => {
        if (!list.length) return
        list.forEach(ability => {
          points[ability] += 1
        })
      })
      return points
    }
  },

  created () {
    this.updatePickedAbilities()
  },

  watch: {
    'character.race': {
      handler () {
        this.updatePickedAbilities()
      },
      deep: true
    },
    formatedAbilities: {
      handler (value) {
        this.$emit('input', value)
      },
      deep: true
    }
  },

  methods: {
    updatePickedAbilities () {
      Vue.set(this, 'pickedAbilities', [])
      this.abilitiesToChoose.forEach((item, key) => {
        Vue.set(this.pickedAbilities, key, {})
      })
    }
  }
}
</script>
