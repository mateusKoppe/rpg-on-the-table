<template>
<div>
  <div class="SheetStatus__brief">
    <h2 class="SheetStatus__name">{{character.data.name}}</h2>
    <div>
      <b>Race: </b>{{character.data.race}} <br>
      <b>Class: </b>{{character.data.class}} lv 1
    </div>
  </div>
  <div class="SheetStatus__status">
    <VCard>
      <b>HP:</b> 14 / 20
    </VCard>
    <VCard>
      <b>Exp:</b> 2000
    </VCard>
  </div>
  <div class="SheetStatus__combat">
    <VCard title="AC">
      14
    </VCard>
    <VCard title="Iniciative">
      3
    </VCard>
    <VCard title="Speed">
      30
    </VCard>
  </div>
  <VCard>
    <input type="checkbox"> Inspiration
  </VCard>
  <div class="SheetStatus__abilities">
    <VCard
      :title="ability"
      v-for="(value, ability) in character.data.abilities" :key="ability">
        {{ value }} <br>
        ({{value | modifier | signed}})
    </VCard>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { abilities, skills } from '@/data'
import { modifier, signed } from '@/common/filters'

import Character from '@/common/character.model'

export default {
  name: 'SheetStatus',

  filters: {
    modifier,
    signed
  },

  computed: {
    ...mapGetters({
      characterData: 'actualCharacter'
    }),
    character () {
      const character = new Character(this.characterData)
      return character
    },
    characterAbilities () {
      const characterAbilities = this.character.abilities
      return Object.keys(characterAbilities)
        .map(ability => ({
          ...abilities[ability],
          key: ability,
          value: characterAbilities[ability]
        }))
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

.SheetStatus__brief {
  @extend %texture;
  padding: 1em;
  margin-top: .5em;
}

.SheetStatus__name {
  margin: 0;
}

.SheetStatus__abilities {
  @include make-column(3, 10px);
  font-size: 1.6rem;
  text-align: center;
}

.SheetStatus__status {
  @include make-column(2, 10px);
  text-align: center;
}

.SheetStatus__combat {
  @include make-column(3, 10px);
  text-align: center;
  font-size: 1.4rem;
}
</style>
