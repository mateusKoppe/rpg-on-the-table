import armor from './armor'
import weapons from './weapons'

const equipments = {
  ...armor,
  ...weapons
}

export default equipments

export const filterEquipmentsKeys = (filter) => {
  return Object.keys(equipments)
    .filter(index => {
      const equipment = equipments[index]
      let validWeapon = true
      Object.keys(filter)
        .forEach(attr => {
          if (filter[attr] !== equipment[attr]) {
            validWeapon = false
          }
        })
      return validWeapon
    })
}

export const filterEquipmentsObjects = (filter) => {
  const keys = filterEquipmentsKeys(filter)
  return keys.map(index => equipments[index])
}
