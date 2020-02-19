<template>
<div>
  <h1 class="SheetBackground__title">Background</h1>
  <VSelect
    label="Alignment"
    :options="alignments"
    v-model="background.alignment"
    @input="updateBackground"
  />
  <VInput
    textarea
    label="Personality Trait"
    @change="updateBackground"
    v-model="background.personalityTrait"
  />
  <VInput
    textarea
    label="Ideals"
    @change="updateBackground"
    v-model="background.ideals"
  />
  <VInput
    textarea
    label="Bonds"
    @change="updateBackground"
    v-model="background.bonds"
  />
  <VInput
    textarea
    label="Flaws"
    @change="updateBackground"
    v-model="background.flaws"
  />
</div>
</template>

<script>
import { mapGetters } from 'vuex'

import EquipmentList from "@/components/EquipmentList"

export default {
  name: 'SheetBackground',

  components: {
    EquipmentList
  },

  data () {
    return {
      background: {},
      alignments: {
        lg: 'Lawful Good',
        ln: 'Lawful Neutral',
        le: 'Lawful Evil',
        ng: 'Neutral Good',
        n: 'Neutral',
        ne: 'Neutral Evil',
        cg: 'Chaotic Good',
        cn: 'Chaotic Neutral',
        ce: 'Chaotic Evil'
      }
    }
  },

  computed: {
    ...mapGetters({
      character: 'actualCharacter'
    })
  },

  watch: {
    character (value) {
      this.background = value.background
    }
  },

  created () {
    this.background = this.character.background || {}
  },

  methods: {
    updateBackground () {
      this.$store.dispatch('updateSelectedCharacter', {
        ...this.character,
        background: {...this.background}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_utils.scss';

.SheetBackground__title {
  text-align: center;
}
</style>
