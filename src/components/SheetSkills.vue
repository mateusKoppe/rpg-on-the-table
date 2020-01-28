<template>
<div>
  <VModal ref="skillModal">
    <template v-if="skillKey">
      <h3 class="skillModal__title">{{selectedSkill.name}}</h3>
      <div>
        {{abilities[selectedSkill.ability].name}}
        {{characterData.abilities[selectedSkill.ability] | modifier | signed}}
      </div>
      <div>
        <input type="checkbox" v-model="isProficientInSelectedSkill"> Proficiency
      </div>
      <div>{{selectedSkill.bonus}}</div>
    </template>
  </VModal>
  <div @click="openSkill(index)" v-for="(skill, index) in skillsFormated" :key="index">
    <VCard sm>
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
        if (this.characterData.skills.includes(key)) bonus += 2
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

.skill {
  display: flex;
  justify-content: space-between;
  padding: 0 .8em;
}

.skill__modifier {
  font-size: 1em;
}

.skillModal__title {
  margin-top: .4em;
}

</style>
