/* 
  There is some races commented, when I done with the 
  new pattern I'll active them again
*/
// import skills from './skills'
// import abilities from './abilities'

export default {
  dwarf: {
    name: 'Dwarf',
    key: 'race.dwarf',
    abilityIncreases: {
      con: 2
    },
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
    name: 'Elf',
    key: 'race.elf',
    abilityIncreases: {
      dex: 2
    },
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
    name: 'Halfling',
    key: 'race.halfling',
    abilityIncreases: {
      dex: 2
    },
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
    name: 'Human',
    key: 'race.human',
    abilityIncreases: {
      cha: 1,
      con: 1,
      dex: 1,
      int: 1,
      str: 1,
      wis: 1
    },
  }
  // dragonborn: {
  //   abilityIncreases: {
  //     str: 2,
  //     cha: 1
  //   },
  //   name: 'Dragonborn'
  // },
  // gnome: {
  //   abilityIncreases: {
  //     int: 2
  //   },
  //   name: 'Gnome',
  //   subRaces: {
  //     forest: {
  //       abilityIncreases: {
  //         dex: 1
  //       },
  //       name: 'Forest Gnome'
  //     },
  //     rock: {
  //       abilityIncreases: {
  //         con: 1
  //       },
  //       name: 'Rock Gnome'
  //     }
  //   }
  // },
  // halfElf: {
  //   abilitiesToChoose: [
  //     {
  //       role: 'choice',
  //       pick: 2,
  //       of: (() => {
  //         const keys = ['con', 'dex', 'int', 'str', 'wis']
  //         return keys.map(key => ({
  //           value: key,
  //           name: abilities[key].name
  //         }))
  //       })()
  //     }
  //   ],
  //   skillsToChoose: [
  //     {
  //       pick: 2,
  //       of: Object.keys(skills)
  //     }
  //   ],
  //   abilityIncreases: {
  //     cha: 2
  //   },
  //   name: 'Half-Elf'
  // },
  // halfOrc: {
  //   abilityIncreases: {
  //     con: 1,
  //     str: 2
  //   },
  //   name: 'Half-Orc'
  // },
  // tiefling: {
  //   abilityIncreases: {
  //     char: 2,
  //     int: 1
  //   },
  //   name: 'Tiefling'
  // }
}
