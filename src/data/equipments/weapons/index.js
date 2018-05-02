import simpleMeele from './simpleMeele'
import simpleRanged from './simpleRanged'
import martialMelee from './martialMelee'
import martialRanged from './martialRanged'

const weapons =  {
  ...simpleMeele,
  ...simpleRanged,
  ...martialMelee,
  ...martialRanged
}

export default weapons

export const filterWeapon = (filter) => {
  return Object.keys(weapons)
    .filter(index => {
      const weapon = weapons[index]
      let validWeapon = true
      Object.keys(filter)
        .forEach(attr => {
          if (filter[attr] !== weapon[attr]) {
            validWeapon = false
          }
        })
      return validWeapon
    })
}
