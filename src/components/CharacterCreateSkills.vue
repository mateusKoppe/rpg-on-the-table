<template>
<div>
  {{presetSkills}}
  <div v-for="(choose, key) in skillsToChoose" :key="key">
    Pick {{choose.pick}} of the folowing skills:
    <div v-for="skill in choose.of" :key="skill">
      <label :for="'skill-'+skill">{{skills[skill].name}}: </label>
      <input
        v-model="character.skills[skill]"
        :id="'skill-'+skill"
        type="checkbox"
      >
    </div>
  </div>
</div>
</template>

<script>
import skills from "@/data/skills"

export default {
  name: 'CharacterCreateSkills',

  props: {
    character: Object
  },

  data () {
    return {
      presetSkills: [],
      skillsToChoose: [],
      skills
    }
  },

  created () {
    this.definePresetSkills()
    this.defineChooseSkills()
  },

  methods: {
    definePresetSkills () {
      this.presetSkills = this.presetSkills.concat(this.character.background.skills)
      this.presetSkills.forEach(skill => {
        this.character.skills[skill] = true
      })
    },
    defineChooseSkills () {
      this.defineChooseSkillByList(this.character.race)
      this.defineChooseSkillByList(this.character.subrace)
      this.defineChooseSkillByList(this.character.class)
      this.defineChooseSkillByList(this.character.background)
    },
    defineChooseSkillByList (list) {
      let skills = this.skillsToChoose
      if (list && list.skillsToChoose) {
        this.skillsToChoose = skills.concat(list.skillsToChoose)
      }
    }
  }
}
</script>
