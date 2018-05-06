import equipments, { filterEquipmentsKeys } from '@/data/equipments'

export default {
  name: 'Druid',
  hitDie: 8,
  hitDieAvg: 5,
  equipmentsToChoose: [
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Wooden shield',
          value: 'shield'
        },
        {
          name: 'Any simple weapon',
          value: {
            role: 'choice',
            pick: 1,
            of: (() => {
              const keys = filterEquipmentsKeys({
                category: 'simple',
                type: 'weapon'
              })
              return keys.map(key => ({
                value: key,
                name: equipments[key].name
              }))
            })()
          }
        }
      ]
    },
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Scimitar',
          value: 'scimitar'
        },
        {
          name: 'Any simple melee weapon',
          value: {
            role: 'choice',
            pick: 1,
            of: (() => {
              const keys = filterEquipmentsKeys({
                category: 'simple',
                style: 'melee',
                type: 'weapon'
              })
              return keys.map(key => ({
                value: key,
                name: equipments[key].name
              }))
            })()
          }
        }
      ]
    }
  ],
  skillsToChoose: [
    {
      pick: 2,
      of: [
        'arcana',
        'animalHandling',
        'insight',
        'medicine',
        'nature',
        'perception',
        'religion',
        'survival'
      ]
    }
  ]
}
