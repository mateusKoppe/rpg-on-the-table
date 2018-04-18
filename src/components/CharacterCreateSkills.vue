<template>
<div>
  <div v-for="(choose, key) in skillsToChoose" :key="key">
    Pick {{choose.pick}} of the folowing skills:
    <div v-for="skill in choose.of" :key="skill">
      <label :for="'skill-'+skill">{{skills[skill].name}}: </label>
      <input
        v-model="selectedSkills[key][skill]"
        :id="'skill-'+skill"
        :disabled="picksDisableds[key][skill]"
        @change="handleSkillPick(key)"
        type="checkbox"
      >
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import { skills } from "@/data"
import CharacterService from '@/common/character.service'

export default {
  name: 'CharacterCreateSkills',

  props: {
    character: Object
  },

  data () {
    return {
      presetSkills: [],
      selectedSkills: [],
      skillsToChoose: [],
      picksDisableds: [],
      skills
    }
  },

  computed: {
    formatedSkills () {
      let skills = []
      this.selectedSkills.forEach(list => {
        list = Object.assign({}, list)
        this.presetSkills.forEach(preset => { delete list[preset] })
        const skillsInList = Object.keys(list).filter(key => list[key])
        skills = skills.concat(skillsInList)
      })
      skills = skills.concat(this.presetSkills)
      return skills
    }
  },

  watch: {
    formatedSkills: {
      handler (value) {
        this.$emit('input', value)
      },
      deep: true
    }
  },

  created () {
    this.defineChooseSkills()
    this.definePresetSkills()
    this.defineSkillsPickDisabled()
  },

  methods: {
    definePresetSkills () {
      let presetSkills = []
      const characterService = new CharacterService(this.character)
      const skillsListList = characterService.findPropertie('skills')
      skillsListList.forEach(list => {
        presetSkills = presetSkills.concat(list)
      })
      this.skillsToChoose.forEach((list, key) => {
        let selecteds = {}
        presetSkills.forEach(skill => {
          selecteds[skill] = true
          Vue.set(this.selectedSkills, key, selecteds)
        })
      })
      Vue.set(this, 'presetSkills', presetSkills)
    },
    defineChooseSkills () {
      const characterService = new CharacterService(this.character)
      const skillsListList = characterService.findPropertie('skillsToChoose')
      skillsListList.forEach((list, key) => {
        this.skillsToChoose = this.skillsToChoose.concat(list)
        this.selectedSkills[key] = {}
      })
    },
    defineSkillsPickDisabled () {
      this.skillsToChoose.forEach((choose, key) => {
        this.picksDisableds[key] = {}
        this.presetSkills.forEach(skill => {
          this.picksDisableds[key][skill] = true
        })
      })
      Vue.set(this, 'picksDisableds', this.picksDisableds)
    },
    handleSkillPick (key) {
      const selecteds = this.selectedSkills[key]
      const pickeds = (
        Object.keys(selecteds)
          .map(key => selecteds[key])
          .reduce((accumulate, value) => {
            return accumulate + value
          })
      )
      const presetSkillsInList = this.getSkillsPresetsInList(selecteds).length
      const pickLimit = presetSkillsInList + this.skillsToChoose[key].pick
      if (pickeds >= pickLimit) {
        this.lockList(key)
      } else {
        this.releaseList(key)
      }
      Vue.set(this.selectedSkills, key, selecteds)
    },
    getSkillsPresetsInList (list) {
      list = Object.keys(list)
      return list.filter(item => this.presetSkills.includes(item))
    },
    lockList (list) {
      const skills = this.skillsToChoose[list].of
      skills.forEach(skill => {
        if (!this.selectedSkills[list][skill]) {
          this.picksDisableds[list][skill] = true
        }
      })
      Vue.set(this.picksDisableds, list, this.picksDisableds[list])
    },
    releaseList (list) {
      const skills = this.skillsToChoose[list].of
      skills.forEach(skill => {
        if (!this.presetSkills.includes(skill)) {
          this.picksDisableds[list][skill] = false
        }
      })
      Vue.set(this.picksDisableds, list, this.picksDisableds[list])
    }
  }
}
</script>
