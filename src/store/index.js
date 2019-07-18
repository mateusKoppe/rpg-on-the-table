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
    addCharacter (state, character) {
      let characters = [...state.characters]
      characters.push(character)
      state.characters = characters
    },
    setCharacters (state, characters) {
      state.characters = characters
    },
    setActualCharacter (state, characters) {
      state.actualCharacter = characters
    }
  },
  actions: {
    loadCharacters (context) {
      const charactersInStorage = localStorage.getItem("characters")
      if (charactersInStorage) {
        context.commit('setCharacters', JSON.parse(charactersInStorage))
      }
    },
    saveCharacter ({ state }) {
      const characters = state.characters
      if (characters) {
        localStorage.setItem("characters", JSON.stringify(characters))
      }
    },
    addCharacter ({ commit, dispatch }, character) {
      commit('addCharacter', character)
      dispatch('saveCharacter')
    }
  }
})
