import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [{ "name": "Filip", "proficiencyBonus": 2,"race": "human", "class": "rogue", "background": "urchin", "abilities": { "str": 11, "dex": 16, "con": 11, "int": 12, "wis": 12, "cha": 13 }, "skills": [ "deception", "acrobatics", "perception", "investigation", "sleightOfHand", "stealth" ], "equipments": [ { "name": "Shortsword", "value": { "name": "Shortsword", "category": "martial", "style": "melee", "type": "weapon", "cost": "10gp", "damageRoll": "1d6", "damageType": "piercing", "properties": [ "finesse", "light" ], "weight": "2lb" } }, { "name": "Shortbow", "value": { "name": "Shortbow", "category": "simple", "style": "ranged", "type": "weapon", "cost": "25gp", "damageRoll": "1d6", "damageType": "piercing", "properties": [ "ammunition", "twoHanded" ], "ammunition": "range (80, 320)", "weight": "2lb" } } ] } ],
    actualCharacter: null
  },
  getters: {
    characters (state) {
      return state.characters
    },
    actualCharacter (state) {
      return state.actualCharacter
    }
  },
  mutations: {
    addCharacter (state, characters) {
      state.characters.push(characters)
    },
    setActualCharacter (state, characters) {
      state.actualCharacter = characters
    }
  }
})
