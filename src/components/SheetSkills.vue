<template>
<div>
  <VModal ref="skillModal">
    <template v-if="selectedSkill">
      <h3 class="skillModal__title">{{selectedSkill.name}}</h3>
      <div>Bonus: {{characterData.abilities[selectedSkill.ability] | modifier | signed}}</div>
      <div><input type="checkbox"> Proficiency</div>
    </template>
  </VModal>
  <div @click="openSkill(skill)" v-for="(skill, index) in skills" :key="index">
    <VCard sm>
      <div class="skill">
        <div>{{skill.ability}}</div>
        <div>{{skill.name}}</div>
        <div>
          <span class="skill__modifier">
            {{characterData.abilities[skill.ability] | modifier | signed}}
          </span>
        </div>
      </div>
    </VCard>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";

import { skills } from '@/data'
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
      selectedSkill: null
    }
  },

  computed: {
    ...mapGetters({
      characterData: 'actualCharacter'
    })
  },

  methods: {
    openSkill (skill) {
      this.selectedSkill = skill
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
