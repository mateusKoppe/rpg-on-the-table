export default {
  blowgun: {
    name: 'Blowgun',
    cost: '10gp',
    damageRoll: '1',
    damageType: 'piercing',
    properties: [
      'ammunition',
      'loading'
    ],
    ammunition: 'range (25, 100)',
    weight: '1lb',
  },
  crossbowHand: {
    name: 'Crossbow, hand',
    cost: '75gp',
    damageRoll: '1d6',
    damageType: 'piercing',
    properties: [
      'ammunition',
      'light',
      'loading'
    ],
    ammunition: 'range (30, 120)',
    weight: '3lb',
  },
  crossbowHeavy: {
    name: 'Crossbow, heavy',
    cost: '50gp',
    damageRoll: '1d10',
    damageType: 'piercing',
    properties: [
      'ammunition',
      'heavy',
      'loading',
      'twoHanded'
    ],
    ammunition: 'range (100, 400)',
    weight: '18lb',
  },
  longbow: {
    name: 'Longbow',
    cost: '50gp',
    damageRoll: '1d8',
    damageType: 'piercing',
    properties: [
      'ammunition',
      'heavy',
      'twoHanded'
    ],
    ammunition: 'range (150, 600)',
    weight: '2lb',
  },
  net: {
    name: 'Net',
    cost: '1gp',
    damageRoll: '',
    damageType: '',
    properties: [
      'special',
      'thrown'
    ],
    special: 'A Large or smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.',
    thrown: 'range (5, 15)',
    weight: '3lb',
  }
}
