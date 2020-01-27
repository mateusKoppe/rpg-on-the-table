<template>
<div>
  <VModal ref="skillModal">
    <h3>Topzera</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptatibus cum quidem veniam sint. Eveniet perspiciatis adipisci reprehenderit molestias distinctio itaque beatae nobis, qui odit, animi consectetur, aut vero exercitationem?</p>
    <VInput label="Name" paper/>
  </VModal>
  <VCard sm v-for="(skill, index) in skills" :key="index">
    <div class="skill" @click="openSkill(skill)">
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
  },

  methods: {
    openSkill (skill) {
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

</style>
