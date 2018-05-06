export default {
  name: 'Wizard',
  hitDie: 6,
  hitDieAvg: 4,
  equipmentsToChoose: [
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Quarterstaff',
          value: 'quarterstaff'
        },
        {
          name: 'Dagger',
          value: 'Dagger'
        }
      ]
    }
  ],
  skillsToChoose: [
    {
      pick: 2,
      of: [
        'arcana',
        'history',
        'insight',
        'investigation',
        'medicine',
        'religion'
      ]
    }
  ]
}
