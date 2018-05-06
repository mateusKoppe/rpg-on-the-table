import equipments, { filterEquipmentsKeys } from '@/data/equipments'

export default {
  name: 'Warlock',
  hitDie: 8,
  hitDieAvg: 5,
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
        'history',
        'intimidation',
        'investigation',
        'nature',
        'religion'
      ]
    }
  ]
}
