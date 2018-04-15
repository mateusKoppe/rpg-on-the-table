export default {
  hitDice: '1d12',
  hitPointAt1thLevel () {
    return 12 + this.abilities.con.mod
  },
  hitPointAtHighestLevels () {
    return this.baseLifePoints + this.abilities.con.mod * (this.actualLevel - 1)
  },
  levels: {
    1: {
      proficiencyBonus: 2,
      features: {
        rage: {
          name: 'Rage',
          description: 'Lorem ipsum'
        },
        unamoredDefense: {
          name: 'Unamored Defense',
          description: 'Lorem ipsum'
        }
      }
    }
  },
  name: 'Barbarian',
  proficiencies: {
    armor: ['lightArmor', 'mediumArmor', 'shields'],
    tools: [],
    savingThrows: ['str', 'con'],
    skillsToChoose: [
      {
        pick: 2,
        of: [
          'animalHandling',
          'athletics',
          'intimidation',
          'nature',
          'perception',
          'survival'
        ]
      }
    ],
    weapons: ['simpleWeapon', 'martialWeapon']
  }
}
