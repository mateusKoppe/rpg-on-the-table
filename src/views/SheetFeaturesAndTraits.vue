<template>
<div>
  <h1 class="SheetFeaturesAndTraits__title">Features and Traits</h1>
  <FeatureList
    v-model="features"
    @input="changeEquipment"
  />
</div>
</template>

<script>
import { mapGetters } from 'vuex'

import FeatureList from "@/components/FeatureList";

export default {
  name: 'SheetFeaturesAndTraits',

  components: {
    FeatureList
  },

  data () {
    return {
      features: []
    }
  },

  computed: {
    ...mapGetters({
      character: 'actualCharacter'
    })
  },

  watch: {
    character (value) {
      this.features = value.features
    }
  },

  created () {
    this.features = this.character.features
  },

  methods: {
    changeEquipment (value) {
      this.$store.dispatch('updateSelectedCharacter', {
        ...this.character,
        features: value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_utils.scss';

.SheetFeaturesAndTraits__title {
  text-align: center;
}
</style>
