import equipments, { filterEquipmentsObjects } from '@/data/equipments'

export default {
  name: 'Barbarian',
  hitDie: 12,
  hitDieAvg: 7,
  equipments: {
    explorerPack: 1,
    javelins: 4
  },
  equipmentsToChoose: [
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Greataxe',
          value: equipments.greataxe
        },
        {
          name: 'Any martial melee weapon',
          value: {
            role: 'choice',
            pick: 1,
            of: filterEquipmentsObjects({
              category: 'martial',
              style: 'melee',
              type: 'weapon'
            })
          }
        }
      ]
    },
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Handaxe',
          value: equipments.handaxe,
        },
        {
          name: 'Any simple weapon',
          value: {
            role: 'choice',
            pick: 1,
            of: filterEquipmentsObjects({
              category: 'simple',
              type: 'weapon'
            })
          }
        }
      ]
    }
  ],
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
  proficiencies: {
    armor: ['lightArmor', 'mediumArmor', 'shields'],
    tools: [],
    savingThrows: ['str', 'con'],
    weapons: ['simpleWeapon', 'martialWeapon']
  },
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
  ]
}
