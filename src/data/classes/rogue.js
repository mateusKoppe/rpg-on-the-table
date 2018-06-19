import equipments from '@/data/equipments'

export default {
  name: 'Rogue',
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
          name: 'Shortsword',
          value: equipments.shortsword
        }
      ]
    },
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Shortbow',
          value: equipments.shortbow
        },
        {
          name: 'Shortsword',
          value: equipments.shortsword
        }
      ]
    }
  ],
  skillsToChoose: [
    {
      pick: 4,
      of: [
        'acrobatics',
        'athletics',
        'deception',
        'insight',
        'intimidation',
        'investigation',
        'perception',
        'performance',
        'persuasion',
        'sleightOfHand',
        'stealth'
      ]
    }
  ]
}
