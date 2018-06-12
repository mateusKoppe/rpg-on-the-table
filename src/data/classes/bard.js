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
          value: equipments.rapier
        },
        {
          name: 'Longsword',
          value: equipments.longsword
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
