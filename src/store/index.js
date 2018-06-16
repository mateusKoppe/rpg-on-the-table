import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: []
  },
  getters: {
    characters (state) {
      return state.characters
    }
  },
  mutations: {
    addCharacter (state, characters) {
      state.characters.push(characters)
    }
  }
})
