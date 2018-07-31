import equipments, { filterEquipmentsObjects } from '@/data/equipments'

export default {
  name: 'Barbarian',
  hitDie: 12,
  hitDieAvg: 7,
  characterBuilding () {
    this.choice({
      label: 'Choice two abilities',
      pick: 2,
      of: (() => {
        return [
          'animalHandling',
          'athletics',
          'intimidation',
          'nature',
          'perception',
          'survival'
        ].map(abilities => ({
          label: abilities,
          handle (abilities) {
            this.data.abilities.push(...abilities)
          }
        }))
      })()
    })
    this.choice({
      label: 'Choice an equipment',
      pick: 1,
      of: [
        {
          label: 'Greataxe',
          handle () {
            this.data.equipments.push(equipments.greataxe)
          }
        },
        {
          handle () {
            this.choice({
              label: 'Any martial melee weapon',
              pick: 1,
              of: (() => {
                return filterEquipmentsObjects({
                  category: 'martial',
                  style: 'melee',
                  type: 'weapon'
                }).map(equipment => ({
                  label: equipment.name,
                  handle () {
                    this.data.equipment.push(equipment)
                  }
                }))
              })()
            })
          }
        }
      ]
    })
  },
  level1th () {

  },
  equipments: {
    explorerPack: 1,
    javelins: 4
  },
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
  }
}
