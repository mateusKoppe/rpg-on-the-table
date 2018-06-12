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
          value: equipments.shortsword
        },
        {
          name: 'Any simple weapon',
          value: {
            role: 'choice',
            pick: 1,
            of: filterEquipmentsKeys({
              category: 'simple',
              type: 'weapon'
            })
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
