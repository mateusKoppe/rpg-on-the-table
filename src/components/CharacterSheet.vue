<template>
<div>
  <h2>{{character.name}}</h2>
  <div>
    Race: {{characterRace.name}}
    <span v-if="characterSubRace"> - {{characterSubRace.name}}</span>
  </div>
  <div v-if="characterSubRace">
  </div>
  <div>
    Class: {{characterClass.name}}
  </div>
  <div>
    Background: {{characterBackground.name}}
  </div>
  <h3>Abilities</h3>
  <div v-for="(ability, index) in characterAbilities" :key="'ability' + index">
    {{ ability.name }}: {{ ability.value }}
  </div>
  <h3>Proficient Skills</h3>
  <div v-for="(skill, index) in characterSkills" :key="'skill' + index">
    {{ skill.value }}
  </div>
  <h3>Equipments</h3>
  <div v-for="(equipment, index) in character.equipments" :key="'equipment' + index">
    {{equipment.name}}
  </div>
  
  <router-link :to="{name: 'CharacterList'}">Sair</router-link>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { abilities, backgrounds, classes, races, skills } from '@/data'

export default {
  name: 'CharacterSheet',

  computed: {
    ...mapGetters({
      character: 'actualCharacter'
    }),
    characterAbilities () {
      const characterAbilities = this.character.abilities
      return Object.keys(characterAbilities)
        .map(ability => ({
          ...abilities[ability],
          value: characterAbilities[ability]
        }))
    },
    characterBackground () {
      return backgrounds[this.character.background]
    },
    characterClass () {
      return classes[this.character.class]
    },
    characterRace () {
      return races[this.character.race]
    },
    characterSubRace () {
      if (!this.characterRace.subRaces) {
        return null
      }
      return this.characterRace.subRaces[this.character.subRace]
    },
    characterSkills () {
      const characterSkills = this.character.skills
      return Object.keys(characterSkills)
        .map(skill => ({
          ...skills[skill],
          value: characterSkills[skill]
        }))
    },
  }
}
</script>
