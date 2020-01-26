<template>
<div>
  <VCard sm v-for="(skill, index) in skills" :key="index">
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
      skills
    }
  },

  computed: {
    ...mapGetters({
      characterData: 'actualCharacter'
    })
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

</style>
