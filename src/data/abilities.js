export default {
  str: {
    max: 20,
    min: 8,
    mod () {
      return Math.floor(this.abilities.str.value - 10 / 2)
    },
    name: 'Strength'
  },
  dex: {
    max: 20,
    min: 8,
    mod () {
      return Math.floor(this.abilities.dex.value - 10 / 2)
    },
    name: 'Dexterity'
  },
  con: {
    max: 20,
    min: 8,
    mod () {
      return Math.floor(this.abilities.con.value - 10 / 2)
    },
    name: 'Constitution'
  },
  int: {
    max: 20,
    min: 8,
    mod () {
      return Math.floor(this.abilities.int.value - 10 / 2)
    },
    name: 'Inteligence'
  },
  wis: {
    max: 20,
    min: 8,
    mod () {
      return Math.floor(this.abilities.wis.value - 10 / 2)
    },
    name: 'Wisdom'
  },
  cha: {
    max: 20,
    min: 8,
    mod () {
      return Math.floor(this.abilities.cha.value - 10 / 2)
    },
    name: 'Charisma'
  },
}
