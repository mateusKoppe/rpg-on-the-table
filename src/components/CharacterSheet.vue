<template>
<div class="CharacterSheet">
  <div class="CharacterSheet__brief">
    <h2 class="CharacterSheet__name">{{character.data.name}}</h2>
    <div>
      <b>Race: </b>{{character.data.race}} <br>
      <b>Class: </b>{{character.data.class}} lv 1
    </div>
  </div>
  <div class="CharacterSheet__status">
    <VCard>
      <b>HP:</b> 14 / 20
    </VCard>
    <VCard>
      <b>Exp:</b> 2000
    </VCard>
  </div>
  <div class="CharacterSheet__combat">
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
    Inspiration
  </VCard>
  <div class="CharacterSheet__abilities">
    <VCard
      :title="ability"
      v-for="(value, ability) in character.data.abilities" :key="ability">
        {{ value }}
    </VCard>
  </div>
  <CharacterSheetTabs/>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { abilities, skills } from '@/data'
import { modifier, signed } from '@/common/filters'

import Character from '@/common/character.model'
import CharacterSheetTabs from "./CharacterSheetTabs";

export default {
  name: 'CharacterSheet',

  components: {
    CharacterSheetTabs
  },

  filters: {
    modifier,
    signed
  },

  computed: {
    ...mapGetters({
      characterData: 'actualCharacter',
      choices: 'actualCharacterChoices'
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

.CharacterSheet {
  @extend %texture;
  background-color: #9A6247;
  height: calc(100vh - #{$app-margin-y * 2});
  padding: 5px 15px;
}

.CharacterSheet__brief {
  @extend %texture;
  padding: 1em;
  margin-top: .5em;
}

.CharacterSheet__name {
  margin: 0;
}

.CharacterSheet__abilities {
  @include make-column(3, 10px);
  font-size: 1.6rem;
  text-align: center;
}

.CharacterSheet__status {
  @include make-column(2, 10px);
  text-align: center;
}

.CharacterSheet__combat {
  @include make-column(3, 10px);
  text-align: center;
  font-size: 1.4rem;
}

.skills {
  @media (min-width: 400px) {
    columns: 2;
  }
}
</style>
