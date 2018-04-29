export default {
  club: {
    name: 'Club',
    cost: '1sp',
    damageRoll: '1d4',
    damageType: 'bludgeoning',
    properties: [
      'light'
    ],
    weight: '2lb',
  },
  dagger: {
    name: 'Dagger',
    cost: '2gp',
    damageRoll: '1d4',
    damageType: 'pircing',
    properties: [
      'finesse',
      'light',
      'thrown'
    ],
    thrown: 'range (20/60)',
    weight: '1lb'
  },
  greatClub: {
    name: 'Great Club',
    cost: '2sp',
    damageRoll: '1d8',
    damageType: 'bludgeoning',
    properties: [
      'twoHanded'
    ],
    weight: '10lb'
  },
  handaxe: {
    name: 'Handaxe',
    cost: '5gp',
    damageRoll: '1d6',
    damageType: 'slashing',
    properties: [
      'light',
      'thrown'
    ],
    thrown: 'range (20/60)',
    weight: '2lb'
  },
  javelin: {
    name: 'Javelin',
    cost: '5sp',
    damageRoll: '1d6',
    damageType: 'piercing',
    properties: [
      'thrown',
      'versatile'
    ],
    thrown: 'range (30/120)',
    weight: '2lb'
  },
  lightHammer: {
    name: 'Light Hammer',
    cost: '2gp',
    damageRoll: '1d4',
    damageType: 'bludgeoning',
    properties: [
      'light',
      'thrown'
    ],
    thrown: 'range (20/60)',
    weight: '2lb'
  },
  mace: {
    name: 'Mace',
    cost: '5gp',
    damageRoll: '1d6',
    damageType: 'bludgeoning',
    properties: [],
    weight: '4lb'
  },
  quarterstaff: {
    name: 'Quarterstaff',
    cost: '2sp',
    damageRoll: '1d6',
    damageType: 'bludgeoning',
    properties: [
      'versatile'
    ],
    versatile: '1d8',
    weight: '6lb'
  },
  sickle: {
    name: 'Sickle',
    cost: '1gp',
    damageRoll: '1d4',
    damageType: 'slashing',
    properties: [
      'light'
    ],
    weight: '2lb'
  },
  spear: {
    name: 'Spear',
    cost: '1gp',
    damageRoll: '1d6',
    damageType: 'piercing',
    properties: [
      'thrown',
      'versatile'
    ],
    thrown: 'range (20/60)',
    versatile: '1d8',
    weight: '3lb'
  }
}
