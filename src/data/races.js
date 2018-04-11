export default {
  dwarf: {
    abilityIncreases: {
      con: 2
    },
    name: 'Dwarf',
    subRaces: {
      hill: {
        abilityIncreases: {
          wis: 2
        },
        name: 'Hill Dwarf'
      },
      mountain: {
        abilityIncreases: {
          str: 2
        },
        name: 'Mountain Dwarf'
      }
    }
  },
  elf: {
    abilityIncreases: {
      dex: 2
    },
    name: 'Elf',
    subRaces: {
      dark: {
        abilityIncreases: {
          cha: 1
        },
        name: 'Dark Elf'
      },
      high: {
        abilityIncreases: {
          int: 1
        },
        name: 'High Elf'
      },
      wood: {
        abilityIncreases: {
          wis: 1
        },
        name: 'Wood Elf'
      }
    }
  },
  halfling: {
    abilityIncreases: {
      dex: 2
    },
    name: 'Halfling',
    subRaces: {
      lightfoot: {
        abilityIncreases: {
          cha: 1
        },
        name: 'Lightfoot'
      },
      stout: {
        abilityIncreases: {
          con: 1
        },
        name: 'Stout'
      }
    }
  },
  human: {
    abilityIncreases: {
      cha: 1,
      con: 1,
      dex: 1,
      int: 1,
      str: 1,
      wis: 1
    },
    name: 'Human'
  },
  dragonborn: {
    abilityIncreases: {
      str: 2,
      cha: 1
    },
    name: 'Dragonborn'
  },
  gnome: {
    abilityIncreases: {
      int: 2
    },
    name: 'Gnome',
    subRaces: {
      forest: {
        abilityIncreases: {
          dex: 1
        },
        name: 'Forest Gnome'
      },
      rock: {
        abilityIncreases: {
          con: 1
        },
        name: 'Rock Gnome'
      }
    }
  },
  halfElf: {
    abilityChoose: {
      pick: 2,
      of: ['con', 'dex', 'int', 'str', 'wis']
    },
    abilityIncreases: {
      cha: 2
    },
    name: 'Half-Elf'
  },
  halfOrc: {
    abilityIncreases: {
      con: 1,
      str: 2
    },
    name: 'Half-Orc'
  },
  tiefling: {
    abilityIncreases: {
      char: 2,
      int: 1
    },
    name: 'Tiefling'
  }
}