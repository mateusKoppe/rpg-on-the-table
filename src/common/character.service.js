class CharacterHelper {
  
  constructor (character) {
    this.character = character
    this.choices = []
  }

  choose (choice) {
    this.choices.push(choice)
  }

  findPropertie (propertie) {
    const propertieList = []
    const objectsToCheck = []
    
    const race = this.getPropertieInList('race')
    objectsToCheck.push(race)
    if (race.subRaces) {
      objectsToCheck.push(this.getPropertieInList(race.subRaces, 'subRace'))
    }
    objectsToCheck.push(this.getPropertieInList('class'))
    objectsToCheck.push(this.getPropertieInList('background'))
    objectsToCheck.forEach(item => {
      if (item[propertie]) {
        propertieList.push(item[propertie])
      }
    })
    return propertieList
  }

  getPropertieInList (propertie) {
    if(this.character[propertie]) {
      return this.character[propertie]
    } else {
      return null
    }
  }

}

export default CharacterHelper
