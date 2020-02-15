<template>
<div>
  <h1 class="SheetSkills__title">SKILLS</h1>
  <VCard paper>
    Proficiency: +2
  </VCard>

  <div @click="openSkill(index)" v-for="(skill, index) in skillsFormated" :key="index">
    <VCard sm :gold="skill.isProficient">
      <div class="skill">
        <div>{{skill.ability}}</div>
        <div>{{skill.name}}</div>
        <div>
          <span class="skill__modifier">
            {{skill.bonus | signed}}
          </span>
        </div>
      </div>
    </VCard>
  </div>

  <VModal ref="skillModal">
    <template v-if="skillKey">
      <div class="skillModal__content">
      <div>
        <h3 class="skillModal__title">{{selectedSkill.name}}</h3>
          {{abilities[selectedSkill.ability].name}}
          {{characterData.abilities[selectedSkill.ability] | modifier | signed}}
          <br>
          <VCheckbox label="Proficiency" v-model="isProficientInSelectedSkill"/> 
        </div>
        <VCard no-margin class="skillModal__bonus">
          {{selectedSkill.bonus | signed}}
        </VCard>
      </div>
    </template>
  </VModal>
</div>
</template>

<script>
import { mapGetters } from "vuex";

import { skills, abilities } from '@/data'
import { modifier, signed } from "@/common/filters";

export default {
  name: 'SheetSkills',

  filters: {
    modifier,
    signed
  },

  props: {
    character: Object
  },

  data () {
    return {
      skills,
      abilities,
      skillKey: null
    }
  },

  computed: {
    ...mapGetters({
      characterData: 'actualCharacter'
    }),
    selectedSkill () {
      return this.skillsFormated[this.skillKey] || null
    },
    isProficientInSelectedSkill: {
      get () {
        if (!this.skillKey) return false
        return this.characterData.skills.includes(this.skillKey) 
      },
      set (value) {
        if (!this.skillKey) return false
        let skills = [...this.characterData.skills]
        if (value) {
          skills.push(this.skillKey)
        } else {
          const key = skills.indexOf(this.skillKey)
          skills.splice(key, 1);
        }
        this.$store.dispatch('updateSelectedCharacter', {
          ...this.characterData,
          skills
        })
      }
    },
    skillsFormated () {
      if (!this.characterData.skills) return null
      const skills = {...this.skills}
      for (const [key, skill] of Object.entries(skills)) {
        let bonus = modifier(this.characterData.abilities[skill.ability])
        skill.isProficient = this.characterData.skills.includes(key)
        if (skill.isProficient) bonus += 2
        skill.bonus = bonus
      }
      return skills
    }
  },

  methods: {
    openSkill (skill) {
      this.skillKey = skill
      this.$refs.skillModal.open()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/_utils.scss";

.SheetSkills__title {
  text-align: center;
}

.skill {
  display: flex;
  justify-content: space-between;
  padding: 0 .8em;
}

.skill__modifier {
  font-size: 1em;
}

.skillModal__title {
  font-size: 1.35em;
  margin: 0;
  margin-bottom: .4em;
}

.skillModal__content {
  $bonus-width: 80px;
  display: grid;
  grid-template-columns: calc(100% - #{$bonus-width + 20px}) $bonus-width;
  align-items: center;
  justify-content: space-around;
  line-height: 1.5em;
}

.skillModal__bonus {
  font-size: 1.75em;
  text-align: center;
  line-height: 1.6em;
}
</style>
