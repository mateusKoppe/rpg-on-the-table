import equipments, { filterEquipmentsObjects } from '@/data/equipments'

export default {
  name: 'Sorcerer',
  hitDie: 6,
  hitDieAvg: 4,
  equipmentsToChoose: [
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
            of: filterEquipmentsObjects({
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
        'arcana',
        'deception',
        'insight',
        'intimidation',
        'persuasion',
        'religion'
      ]
    }
  ]
}
