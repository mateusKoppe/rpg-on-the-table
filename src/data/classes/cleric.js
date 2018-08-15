import equipments, { filterEquipmentsObjects } from '@/data/equipments'

export default {
  name: 'Cleric',
  key: 'classes.cleric',
  hitDie: 8,
  hitDieAvg: 5,
  characterBuilding () {
    this.choose({
      label: 'Select two skills',
      pick: 2,
      of: (() => {
        return [
          'history',
          'insight',
          'medicine',
          'persuasion',
          'religion'
        ].map(abilities => ({
          label: abilities,
          handle (abilities) {
            this.data.abilities.push(...abilities)
          }
        }))
      })()
    })
    this.choose({
      label: 'Choose an equipment',
      pick: 1,
      of: [
        {
          label: 'Mace',
          handle () {
            this.data.equipments.push(equipments.greataxe)
          }
        },
        {
          label: 'Warhammer',
          handle () {
            this.data.equipments.push(equipments.warhammer)
          }
        }
      ]
    })
    this.choose({
      label: 'Choose an equipment',
      pick: 1,
      of: [
        {
          name: 'Light crossbow',
          handle () {
            this.data.equipments.push(equipments.lightCrossbow)
          }
        },
        {
          name: 'Any simple weapon',
          handle () {
            this.choose({
              label: 'Any simple weapon',
              pick: 1,
              of: (() => {
                return filterEquipmentsObjects({
                  category: 'simple',
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

  }
}
