import { createStore } from "vuex";

const store = createStore({
  state: {
    characters: [],
    characterKey: null,
  },
  getters: {
    characters(state) {
      return state.characters;
    },
    actualCharacter(state) {
      state.characterKey = localStorage.getItem("characterKey");
      return state.characters[state.characterKey];
    },
  },
  mutations: {
    addCharacter(state, character) {
      let characters = [...state.characters];
      characters.push(character);
      state.characters = characters;
    },
    setCharacters(state, characters) {
      state.characters = characters;
    },
    selectCharacter(state, characterKey) {
      state.characterKey = characterKey;
    },
  },
  actions: {
    addCharacter({ dispatch, state }, character) {
      const characters = [...state.characters];
      characters.push(character);
      dispatch("saveCharacters", characters);
    },
    createCharacter({ state, dispatch }, character) {
      dispatch("addCharacter", character);
      dispatch("selectCharacter", state.characters.length - 1);
    },
    loadCharacters(context) {
      const charactersInStorage = localStorage.getItem("characters");
      if (charactersInStorage) {
        context.commit("setCharacters", JSON.parse(charactersInStorage));
      }
    },
    saveCharacters({ commit }, characters) {
      localStorage.setItem("characters", JSON.stringify(characters));
      commit("setCharacters", characters);
    },
    selectCharacter({ state }, characterKey) {
      localStorage.setItem("characterKey", characterKey);
      state.characterKey = characterKey;
    },
    updateSelectedCharacter({ state, dispatch }, character) {
      const characters = [...state.characters];
      characters[state.characterKey] = character;
      dispatch("saveCharacters", characters);
    },
  },
});

export default store;
