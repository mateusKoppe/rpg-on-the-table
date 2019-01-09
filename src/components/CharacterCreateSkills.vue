<template>
<div>
  <ChoicesList
    :choices="skillsToChoose"
    v-model="selectedSkills"
  />
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
      // skills = skills.concat(this.presetSkills)
      skills = skills.filter((item, index) => index === skills.indexOf(item))
      return skills
    },
    skillsToChoose () {
      let skillsToChoose = []
      const list = Object.keys(skills)
      const option = {}
      option.pick = "free"
      option.of = list.map(key => ({
        value: key,
        name: skills[key].name
      }))
      return option
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
