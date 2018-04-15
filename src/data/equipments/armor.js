export default {
  name: 'Armor',
  lightArmor: {
    name: 'Light Armor',
    padded: {
      name: 'Padded',
      ac () {
        return 11 + this.abilities.dex.mod
      },
      cost: '5gp',
      stealthDisadvantage: true,
      weight: '8lb'
    },
    leather: {
      name: 'Leather',
      ac () {
        return 11 + this.abilities.dex.mod
      },
      cost: '10gp',
      weight: '10lb'
    },
    studdedLeather: {
      name: 'Studded Leather',
      ac () {
        return 12 + this.abilities.dex.mod
      },
      cost: '45gp',
      weight: '13lb'
    }
  },
  mediumArmor: {
    name: 'Medium Armor',
    hide: {
      name: 'Hide',
      ac () {
        const mod = this.abilities.dex.mod
        return 12 + (mod > 2 ? 2 : mod)
      },
      cost: '10gp',
      weight: '12lb'
    },
    chainShirt: {
      name: 'Chain Shirt',
      ac () {
        const mod = this.abilities.dex.mod
        return 13 + (mod > 2 ? 2 : mod)
      },
      cost: '50gp',
      weight: '20lb'
    },
    scaleMail: {
      name: 'Scale Mail',
      ac () {
        const mod = this.abilities.dex.mod
        return 14 + (mod > 2 ? 2 : mod)
      },
      cost: '50gp',
      weight: '45lb',
      stealthDisadvantage: true
    },
    breastPlate: {
      name: 'Breast Plate',
      ac () {
        const mod = this.abilities.dex.mod
        return 14 + (mod > 2 ? 2 : mod)
      },
      cost: '400gp',
      weight: '20lb'
    },
    halfPlate: {
      name: 'Half Plate',
      ac () {
        const mod = this.abilities.dex.mod
        return 15 + (mod > 2 ? 2 : mod)
      },
      cost: '750gp',
      weight: '40lb',
      stealthDisadvantage: true
    }
  },
  heavyArmor: {
    ringMail: {
      name: 'Ring Mail',
      ac () {
        return 14
      },
      cost: '30gp',
      weight: '40lb',
      stealthDisadvantage: true
    },
    chainMail: {
      name: 'Chain Mail',
      ac () {
        return 16
      },
      cantUse () {
        return this.abilities.str.value < 13
      },
      cost: '75gp',
      weight: '55lb',
      stealthDisadvantage: true
    },
    splint: {
      name: 'Splint',
      ac () {
        return 17
      },
      cantUse () {
        return this.abilities.str.value < 15
      },
      cost: '200gp',
      weight: '60lb',
      stealthDisadvantage: true
    },
    plate: {
      name: 'Plate',
      ac () {
        return 18
      },
      cantUse () {
        return this.abilities.str.value < 15
      },
      cost: '1500gp',
      weight: '65lb',
      stealthDisadvantage: true
    }
  },
  shield: {
    name: 'Shield',
    shield: {
      name: 'Shield',
      bonusAc () {
        return this.ac + 2
      },
      cost: '10gp',
      weight: '6lb'
    }
  }
}
