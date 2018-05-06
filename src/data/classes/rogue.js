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
          value: 'rapier'
        },
        {
          name: 'Shortsword',
          value: 'shortsword'
        }
      ]
    },
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Shortbow',
          value: 'shortbow'
        },
        {
          name: 'Shortsword',
          value: 'shortsword'
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
