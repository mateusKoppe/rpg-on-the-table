<template>
<div>
  <div v-for="(ability, key) in abilities" :key="key">
    <label :for="`abilities-${key}`">{{ability.name}}: </label>
    <input 
      v-model="character.abilities[key]"
      :id="`abilities-${key}`"
      type="number"
      :max="ability.max"
      :min="ability.min"
    >
  </div>
  {{inputsDisableds}}
  <div v-for="(abilities, key) in abilitiesToChoose" :key="key">
    Pick {{abilities.pick}} of the folowing abilities:
    <div v-for="ability in abilities.of" :key="ability">
      <label :for="'pick-'+key-'-'+ability">{{ability}}: </label>
      <input 
        v-model="pickedAbilities[key][ability]"
        :id="'pick-'+key-'-'+ability"
        :disable="inputsDisableds[key][ability]"
        @change="handleAbilityPick(key, ability)"
        type="checkbox"
      >
    </div>
  </div>
</div>
</template>

<script>
import abilities from '@/data/abilities'

export default {
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
    }
  },
  created () {
    this.character.abilities = {
      str: 8,
      dex: 8,
      con: 8,
      int: 8,
      wis: 8,
      cha: 8
    }
  },
  data () {
    return {
      inputsDisableds: [],
      pickedAbilities: [],
      abilities
    }
  },
  methods: {
    updatePickedAbilities () {
      this.pickedAbilities = []
      this.abilitiesToChoose.forEach((item, key) => {
        this.pickedAbilities[key] = {}
        this.inputsDisableds[key] = {}
      })
    },
    handleAbilityPick (listKey, ability) {
      const maxPicks = this.abilitiesToChoose[listKey].pick
      const abilitiesPickeds = this.pickedAbilities[listKey]
      const pickeds = +Object.keys(abilitiesPickeds)
        .map(key => abilitiesPickeds[key])
        .reduce((accumulate, value) => accumulate + value)
      if (pickeds >= maxPicks - 1) {
        this.lockList(listKey)
      }
    },
    lockList (listKey) {
      const abilitiesPickeds = this.pickedAbilities[listKey]
      console.log(listKey)
      Object.keys(abilitiesPickeds)
        .forEach(key => {
          console.log(key)
          if (!abilitiesPickeds[key]) {
            this.inputsDisableds[listKey][key] = true
          } else {
            this.inputsDisableds[listKey][key] = true
          }
        })
      console.log(this.inputsDisableds)
    }
  },
  props: {
    character: Object
  },
  watch: {
    'character.race' (value) {
      this.updatePickedAbilities()
    },
    'character.subrace' (value) {
      this.updatePickedAbilities()
    },
  }
}
</script>
