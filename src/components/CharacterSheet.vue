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
  <div class="abilities">
    <div class="info" v-for="(ability, index) in characterAbilities" :key="'ability' + index">
      <div class="info-content abilities__item">
        <h2 class="info-name">{{ ability.key }}</h2>
        {{ ability.value }}
      </div>
    </div>
  </div>
  <div class="info">
    <div class="info-content skills">
      <h2 class="info-name">Skills</h2>
      <div v-for="skill in characterSkills" :key="skill.name">
         {{ skill.value | modifier }} {{ skill.name }}
      </div>
    </div>
  </div>
  <div class="info">
    <div class="info-content">
      <h2 class="info-name">Equipments</h2>
      <div v-for="(equipment, index) in character.equipments" :key="'equipment' + index">
        {{equipment.name}}
      </div>
    </div>
  </div>
  <router-link :to="{name: 'CharacterList'}">Exit</router-link>
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
          key: ability,
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

<style lang="scss" scoped>
@import '@/style/_utils.scss';

.info-content {
  @extend %texture;
  margin-bottom: 12px;
  margin-top: 20px;
  padding: 10px;
  padding-top: 13px;
  position: relative;
}

.info-name {
  @extend %texture;
  @include texture-shadow(2);
  font-size: 18px;
  left: 50%;
  margin: 0;
  top: -13px;
  transform: translateX(-50%);
  padding: 1px 9px;
  position: absolute;
}

.abilities {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.abilities__item {
  font-size: 1.6rem;
  margin: {
    left: 8px;
    right: 8px;
  }
}

.skills {
  @media (min-width: 400px) {
    columns: 2;
  }
}
</style>
