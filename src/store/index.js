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
      const charactersInStorage = localStorage.getItem("characters")
      if (charactersInStorage) {
        characters = JSON.parse(charactersInStorage)
      }
      characters.push(character)
      localStorage.setItem("characters", JSON.stringify(characters))
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
        console.log()
        context.commit('setCharacters', JSON.parse(charactersInStorage))
      }
    }
  }
})
