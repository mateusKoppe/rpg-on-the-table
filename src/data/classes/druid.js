import equipments, { filterEquipmentsObjects } from '@/data/equipments'

export default {
  name: 'Druid',
  hitDie: 8,
  hitDieAvg: 5,
  equipmentsToChoose: [
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Wooden shield',
          value: equipments.shield
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
    },
    {
      role: 'choice',
      pick: 1,
      of: [
        {
          name: 'Scimitar',
          value: equipments.scimitar
        },
        {
          name: 'Any simple melee weapon',
          value: {
            role: 'choice',
            pick: 1,
            of: filterEquipmentsObjects({
              category: 'simple',
              style: 'melee',
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
        'animalHandling',
        'insight',
        'medicine',
        'nature',
        'perception',
        'religion',
        'survival'
      ]
    }
  ]
}
