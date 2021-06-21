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
import ChoicesList from '@/components/ChoicesList.vue';

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
    skillsToChoose () {
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
    selectedSkills: {
      handler (value) {
        this.$emit('update:modelValue', value)
      },
      deep: true
    }
  },
}
</script>
