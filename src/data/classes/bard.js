import equipments, { filterEquipmentsKeys } from '@/data/equipments'

export default {
  name: 'Bard',
  hitDie: 8,
  hitDieAvg: 5,
  equipmentsToChoose: [
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Rapier',
          value: 'rapier'
        },
        {
          name: 'Longsword',
          value: 'longsword'
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
    }
  ],
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
