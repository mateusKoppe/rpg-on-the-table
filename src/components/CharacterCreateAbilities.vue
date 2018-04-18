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
import { abilities, races} from '@/data'
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
        const raceAbilities = this.race.abilityIncreases
        points += raceAbilities && raceAbilities[key] || 0
        if (this.subRace) {
          const subRaceAbilities = this.subRace.abilityIncreases
          points += subRaceAbilities && subRaceAbilities[key] || 0
        }
        abilities[key] = points
      })
      return abilities
    },
    race () {
      return races[this.character.race]
    },
    subRace () {
      if (this.race.subRaces 
       && this.character.subRace
       && this.race.subRaces[this.character.subRace]
      ) {
        return this.race.subRaces[this.character.subRace]
      }
      return false
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
