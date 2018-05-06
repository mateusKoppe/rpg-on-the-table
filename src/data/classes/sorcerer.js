import equipments, { filterEquipmentsKeys } from '@/data/equipments'

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
          value: 'lightCrossbow'
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
