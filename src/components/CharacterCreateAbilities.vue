<template>
<div>
  <pre>{{abilitiesValue}}</pre>
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
  <div v-for="(chooseList, key) in abilitiesToChoose" :key="key">
    Pick {{chooseList.pick}} of the folowing abilities:
    <div v-for="ability in chooseList.of" :key="ability">
      <label :for="'pick-'+key-'-'+ability">{{abilities[ability].name}}: </label>
      <input 
        v-model="pickedAbilities[key][ability]"
        :id="'pick-'+key-'-'+ability"
        :disabled="inputsDisableds[key][ability]"
        @change="handleAbilityPick(key)"
        type="checkbox"
      >
    </div>
  </div>
</div>
</template>

<script>
import abilities from '@/data/abilities'
import Vue from 'vue'

export default {
  name: 'CharacterCreateAbilities',

  props: {
    character: Object,
    value: Object
  },

  data () {
    return {
      inputsDisableds: [],
      pickedAbilities: [],
      abilitiesValue: [],
      abilities
    }
  },

  computed: {
    abilitiesToChoose () {
      let abilities = []
      abilities = abilities.concat(this.raceAbilitiesToChoose)
      abilities = abilities.concat(this.subraceAbilitiesToChoose)
      return abilities
    },
    raceAbilitiesToChoose () {
      if (this.character.race &&
        this.character.race.abilitiesToChoose
      ) {
        return this.character.race.abilitiesToChoose
      }
      return []
    },
    subraceAbilitiesToChoose () {
      if (this.character.subRace &&
        this.character.subRace.abilitiesToChoose
      ) {
        return this.character.subRace.abilitiesToChoose
      }
      return []
    },
    formatedAbilities () {
      const abilities = {}
      Object.keys(this.abilitiesValue).forEach(key => {
        const points = this.abilitiesValue[key]
        const mod = this.abilities[key].mod(points)
        abilities[key] = { points, mod }
      })
      return abilities
    }
  },

  watch: {
    abilitiesValue: {
      handler (value) {
        this.$emit('input', this.formatedAbilities)
      },
      deep: true
    } 
  },

  created () {
    this.setAbilitiesToStartValue()
    this.updatePickedAbilities()
  },

  methods: {
    updatePickedAbilities () {
      this.abilitiesToChoose.forEach((item, key) => {
        this.pickedAbilities[key] = {}
        this.inputsDisableds[key] = {}
      })
    },
    handleAbilityPick (listKey) {
      const maxPicks = this.abilitiesToChoose[listKey].pick
      const abilitiesPickeds = this.pickedAbilities[listKey]
      const pickeds = +Object.keys(abilitiesPickeds)
        .map(key => abilitiesPickeds[key])
        .reduce((accumulate, value) => accumulate + value)
      if (pickeds >= maxPicks) {
        this.lockList(listKey)
      } else {
        this.releaseList(listKey)
      }
    },
    lockList (listKey) {
      const abilitiesPickeds = this.pickedAbilities[listKey]
      const listInputDisableds = this.inputsDisableds[listKey]
      Object.keys(this.abilities)
        .forEach(key => {
          if (!abilitiesPickeds[key]) {
            listInputDisableds[key] = true
          } else {
            listInputDisableds[key] = false
          }
        })
      Vue.set(this.inputsDisableds, listKey, listInputDisableds)
    },
    releaseList (listKey) {
      const listInput = this.inputsDisableds[listKey]
      Object.keys(this.abilities)
        .forEach(key => {
          listInput[key] = false
        })
      Vue.set(this.inputsDisableds, listKey, listInput)
    },
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
