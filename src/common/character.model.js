class Character {
  
  constructor (...configs) {
    this.choices = []
    this.loadConfigs(configs)
  }

  choose (choice) {
    this.choices.push(choice)
  }

  loadConfigs (configs) {
    configs.forEach(configGroup => {
      Object.keys(configGroup)
        .forEach(key => {
          const config = configGroup[key]
          switch (typeof config) {
            case 'function':
              this.addConfigFunction(key, config)
              break
            case 'object':
              if (Array.isArray(config)) {
                this.addConfigArray(key, config)
              } else {
                this.addConfigObject(key, config)
              }
              break;
            default:
              this[key] = key
              break
          }
        })
    })
  }

  addConfigFunction (key, callback) {
    if (typeof this[key] === "undefined") {
      this[key] = []
    }
    this[key].push(callback)
  }

  addConfigArray (key, array) {
    if (typeof this[key] === "undefined") {
      this[key] = []
    }
    this[key].push(array)
  }
  
  addConfigObject (key, object) {
    if (typeof this[key] === "undefined") {
      this[key] = {}
    }
    this[key] = {
      ...object,
      ...this[key]
    }
  }

}

export default Character
