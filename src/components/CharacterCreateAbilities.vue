<template>
<div>
  <div v-for="(ability, key) in abilities" :key="key">
    <label :for="`abilities-${key}`">{{ability.name}}: </label>
    <input 
      v-model="abilitiesValue[key]"
      :id="`abilities-${key}`"
      type="number"
      :max="ability.max"
      :min="ability.min"
    >
  </div>
  <CharacterCreateAbilitiesExtras v-model="extraAbilities" :character="character"/>
</div>
</template>

<script>
import Vue from 'vue'
import { abilities } from '@/data'
import CharacterService from '@/common/character.service'
import CharacterCreateAbilitiesExtras from './CharacterCreateAbilitiesExtras'

export default {
  name: 'CharacterCreateAbilities',

  props: {
    character: Object,
    value: Object
  },

  components: {
    CharacterCreateAbilitiesExtras
  },

  data () {
    return {
      inputsDisableds: [],
      pickedAbilities: [],
      abilitiesValue: [],
      extraAbilities: {},
      abilities
    }
  },

  computed: {
    formatedAbilities () {
      const abilities = {}
      Object.keys(this.abilitiesValue).forEach(key => {
        let points = +this.abilitiesValue[key]
        if (this.extraAbilities[key]) {
          points += this.extraAbilities[key]
        }
        abilities[key] = points
      })
      const characterService = new CharacterService(this.character)
      /* This is not a typo, this is realy the list of the list */
      const abilitiesListList = characterService.findPropertie('abilityIncreases')
      abilitiesListList.forEach(abilitiesList => {
        Object.keys(abilitiesList).forEach(ability => {
          abilities[ability] += abilitiesList[ability]
        })
      })
      return abilities
    }
  },

  watch: {
    'character.race': {
      handler () {
        this.setAbilitiesToStartValue()
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

  created () {
    this.setAbilitiesToStartValue()
  },

  methods: {
    setAbilitiesToStartValue () {
      const abilitiesValue = Object.assign({}, this.abilitiesValue)
      Object.keys(this.abilities)
        .forEach(key => {
          const ability = this.abilities[key]
          abilitiesValue[key] = ability.min
        })
      Vue.set(this, 'abilitiesValue', abilitiesValue)
    }
  }
}
</script>
