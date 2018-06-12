import equipments, { filterEquipmentsKeys } from '@/data/equipments'

export default {
  name: 'Cleric',
  hitDie: 8,
  hitDieAvg: 5,
  equipmentsToChoose: [
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Mace',
          value: equipments.mace
        },
        {
          name: 'Warhammer',
          value: equipments.warhammer
        }
      ]
    },
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Light crossbow',
          value: equipments.lightCrossbow
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
        'history',
        'insight',
        'medicine',
        'persuasion',
        'religion'
      ]
    }
  ]
}
