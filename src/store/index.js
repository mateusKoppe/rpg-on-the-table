import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: [],
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
