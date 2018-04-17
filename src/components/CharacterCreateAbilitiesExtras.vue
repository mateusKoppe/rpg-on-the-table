<template>
<div>
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
  /* This code realy needs a refactor */
  name: 'CharacterCreateAbilitiesExtras',

  props: {
    character: Object,
    value: Object
  },

  data () {
    return {
      inputsDisableds: [],
      pickedAbilities: [],
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
      const pickedAbilities = Array.concat([], this.pickedAbilities)
      Object.keys(this.abilities)
        .forEach(ability => { abilities[ability] = 0 })
      pickedAbilities.forEach(list => {
        Object.keys(list).forEach(ability => {
          abilities[ability] += list[ability]
        })
      })
      return abilities
    }
  },

  created () {
    this.updatePickedAbilities()
  },

  watch: {
    formatedAbilities: {
      handler (value) {
        this.$emit('input', value)
      },
      deep: true
    }
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
      Vue.set(this.pickedAbilities, listKey, abilitiesPickeds)
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
    }
  }
}
</script>
