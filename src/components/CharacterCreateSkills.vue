<template>
<div>
  <div v-for="(choices, key) in skillsToChoose" :key="key">
    Pick {{choices.pick}} of the folowing skills:
    <ChoicesList
      :choices="choices"
      :presets="presetSkills"
      v-model="selectedSkills[key]"
    />
  </div>
</div>
</template>

<script>
import { skills } from '@/data'
import CharacterService from '@/common/character.service'
import ChoicesList from './ChoicesList'

export default {
  name: 'CharacterCreateSkills',

  components: {
    ChoicesList
  },

  props: {
    character: Object
  },

  data () {
    return {
      selectedSkills: []
    }
  },

  computed: {
    formatedSkills () {
      let skills = []
      this.selectedSkills.forEach(list => skills = skills.concat(list))
      skills = skills.concat(this.presetSkills)
      skills = skills.filter((item, index) => index === skills.indexOf(item))
      return skills
    },
    presetSkills () {
      let presetSkills = []
      const characterService = new CharacterService(this.character)
      const skillsListList = characterService.findPropertie('skills')
      skillsListList.forEach(list => {
        presetSkills = presetSkills.concat(list)
      })
      return presetSkills
    },
    skillsToChoose () {
      let skillsToChoose = []
      const characterService = new CharacterService(this.character)
      const skillsListList = characterService.findPropertie('skillsToChoose')
      skillsListList.forEach(list => {
        const formatedList = list.map((value) => {
          const option = Object.assign({}, value)
          option.of = [].concat(value.of).map(key => ({
            value: key,
            name: skills[key].name
          }))
          return option
        })
        skillsToChoose = skillsToChoose.concat(formatedList)
      })
      return skillsToChoose
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
}
</script>
