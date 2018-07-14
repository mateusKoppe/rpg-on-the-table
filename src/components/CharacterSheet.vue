<template>
<div>
  <div class="info">
    <div class="info-content">
      <h2 class="info-name">{{character.name}}</h2>
      <div>
        Race: {{characterRace.name}}
        <span v-if="characterSubRace"> - {{characterSubRace.name}}</span>
      </div>
      <div>
        Class: {{characterClass.name}}
      </div>
      <div>
        Background: {{characterBackground.name}}
      </div>
    </div>
  </div>
  <h3>Abilities</h3>
  <div v-for="(ability, index) in characterAbilities" :key="'ability' + index">
    {{ ability.name }}: {{ ability.value }}
  </div>
  <h3>Skills</h3>
  <div v-for="skill in characterSkills" :key="skill.name">
    {{ skill.name }}: {{ skill.value }}
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
      return Object.keys(skills)
        .map(skill => {
          const itemSkill = skills[skill]
          const isProficient = this.character.skills.includes(skill)
          const bonus = isProficient ? this.character.proficiencyBonus : 0
          const abilityPoint = this.character.abilities[itemSkill.ability]
          const abilityModifier = Math.floor((abilityPoint - 10) / 2)
          const value = abilityModifier + bonus
          return {
            ...itemSkill,
            isProficient,
            value
          }
        })
    },
  }
}
</script>

<style>
.info-content {
  background-color: #854c30;
  border: 2px solid #140c1c;
  border-radius: 5px;
  box-shadow: 
    8px 13px 13px rgba(4, 0, 0, 0.13),
    inset 2px 2px 0px 2px #d27d2c,
    inset -2px -2px 0px 2px #442434,
    0px 1px 0px #3a1c04,
    0px 2px 0px #3a1c04,
    1px 3px 0px #3a1c04
  ;
  color: #181612;
  margin: 12px;
  margin-top: 20px;
  padding: 10px;
  position: relative;
}

.info-name {
  background-color: #854c30;
  border: 2px solid #140c1c;
  border-radius: 5px;
  box-shadow: 
    4px 7px 7px rgba(4, 0, 0, 0.13),
    inset 1px 1px 0px 1px #d27d2c,
    inset -1px -1px 0px 1px #442434,
    0px 1px 0px #3a1c04
  ;
  color: #181612;
  border-radius: 5px;
  font-size: 18px;
  left: 50%;
  margin: 0;
  top: -10px;
  transform: translateX(-50%);
  padding: 1px 9px;
  position: absolute;
}
</style>
