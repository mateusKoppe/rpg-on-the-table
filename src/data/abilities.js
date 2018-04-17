export default {
  str: {
    max: 20,
    min: 8,
    mod (value) {
      return Math.floor((value - 10) / 2)
    },
    name: 'Strength'
  },
  dex: {
    max: 20,
    min: 8,
    mod (value) {
      return Math.floor((value - 10) / 2)
    },
    name: 'Dexterity'
  },
  con: {
    max: 20,
    min: 8,
    mod (value) {
      return Math.floor((value - 10) / 2)
    },
    name: 'Constitution'
  },
  int: {
    max: 20,
    min: 8,
    mod (value) {
      return Math.floor((value - 10) / 2)
    },
    name: 'Inteligence'
  },
  wis: {
    max: 20,
    min: 8,
    mod (value) {
      return Math.floor((value - 10) / 2)
    },
    name: 'Wisdom'
  },
  cha: {
    max: 20,
    min: 8,
    mod (value) {
      return Math.floor((value - 10) / 2)
    },
    name: 'Charisma'
  },
}
