<template>
<div>
  <div>
    <label for="abilities-str">Strength: </label>
    <input v-model="character.abilities.str" id="abilities-str" type="number" max="20" min="0">
  </div>
  <div>
    <label for="abilities-dex">Dexterity: </label>
    <input v-model="character.abilities.dex" id="abilities-dex" type="number" max="20" min="0">
  </div>
  <div>
    <label for="abilities-con">Constitution: </label>
    <input v-model="character.abilities.con" id="abilities-con" type="number" max="20" min="0">
  </div>
  <div>
    <label for="abilities-int">Inteligence: </label>
    <input v-model="character.abilities.int" id="abilities-int" type="number" max="20" min="0">
  </div>
  <div>
    <label for="abilities-wis">Wisdom: </label>
    <input v-model="character.abilities.wis" id="abilities-wis" type="number" max="20" min="0">
  </div>
  <div>
    <label for="abilities-cha">Charisma: </label>
    <input v-model="character.abilities.cha" id="abilities-cha" type="number" max="20" min="0">
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
      pickedAbilities: []
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
