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
    <div>
      <div class="info">
        <div class="info-content">
          <b>HP:</b> 14 / 20
        </div>
      </div>
    </div>
    <div>
      <div class="info">
        <div class="info-content">
          <b>Exp:</b> 2000
        </div>
      </div>
    </div>
  </div>
  <div class="CharacterSheet__combat">
    <div class="info">
      <div class="info-content">
        <div class="info-name">
          AC
        </div>
        14
      </div>
    </div>
    <div class="info">
      <div class="info-content">
        <div class="info-name">
          Iniciative
        </div>
        3
      </div>
    </div>
    <div class="info">
      <div class="info-content">
        <div class="info-name">
          Speed
        </div>
        30
      </div>
    </div>
  </div>
  <div>
    <div class="info">
      <div class="info-content">
        Inspiration
      </div>
    </div> 
  </div>
  <div class="CharacterSheet__abilities">
    <div class="info" v-for="(ability, index) in character.data.abilities" :key="'ability' + index">
      <div class="info-content abilities__item">
        <h2 class="info-name">{{ index }}</h2>
        {{ ability }} <br>
        ({{ ability | modifier | signed }})
      </div>
    </div>
  </div>
  <!-- <div class="info">
    <div class="info-content skills">
      <h2 class="info-name">Skills</h2>
      <div v-for="skill in character.data.skills" :key="skill.name">
        {{ skill }}
      </div>
    </div>
  </div>
  <div class="info">
    <div class="info-content">
      <h2 class="info-name">Equipments</h2>
      <div v-for="(equipment, key) in character.data.equipments" :key="key">
        {{equipment.name}}
      </div>
    </div>
  </div>
  <router-link :to="{name: 'CharacterList'}">Exit</router-link> -->
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

.skills {
  @media (min-width: 400px) {
    columns: 2;
  }
}
</style>
