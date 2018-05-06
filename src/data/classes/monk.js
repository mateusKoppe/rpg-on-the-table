import equipments, { filterEquipmentsKeys } from '@/data/equipments'

export default {
  name: 'Monk',
  hitDie: 8,
  hitDieAvg: 5,
  equipmentsToChoose: [
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Shortsword',
          value: 'shortsword'
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
        'acrobatics',
        'athletics',
        'history',
        'insight',
        'religion',
        'stealth'
      ]
    }
  ]
}
