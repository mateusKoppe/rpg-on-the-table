import { backgrounds, classes, races } from '@/data'

class CharacterHelper {
  
  constructor (character) {
    this.character = character
  }

  findPropertie (propertie) {
    const propertieList = []
    const objectsToCheck = []
    
    const race = this.getPropertieInList(races, 'race')
    objectsToCheck.push(race)
    if (race.subRaces) {
      objectsToCheck.push(this.getPropertieInList(race.subRaces, 'subRace'))
    }
    objectsToCheck.push(this.getPropertieInList(classes, 'class'))
    objectsToCheck.push(this.getPropertieInList(backgrounds, 'background'))
    objectsToCheck.forEach(item => {
      if (item[propertie]) {
        propertieList.push(item[propertie])
      }
    })
    return propertieList
  }

  getPropertieInList (list, propertie) {
    if(this.character[propertie] && list[this.character[propertie]]) {
      return list[this.character[propertie]]
    } else {
      return null
    }
  }

}

export default CharacterHelper
