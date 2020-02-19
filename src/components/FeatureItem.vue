<template>
<div>
  <div @click="showInfo()">
    <VCard class="FeatureItem">
      <h3 class="FeatureItem__name">{{value.name}}</h3>
      {{value.shortDescription}}
    </VCard>
  </div>
  <VModal ref="featureInfoModal">
    <FeatureForm v-model="featureForm"></FeatureForm>
    <div class="FeatureItem__buttons">
      <VButton
        text="Delete"
        paper
        @click="deleteFeature()"
      />
      <VButton
        text="Save"
        paper
        @click="updateItem()"
      />
    </div>
  </VModal>
</div>
</template>

<script>
import FeatureForm from "@/components/FeatureForm";

export default {
  name: 'FeatureItem',

  components: {
    FeatureForm
  },

  props: {
    value: Object
  },

  data () {
    return {
      featureForm: {...this.value}
    }
  },

  watch: {
    value () {
      this.featureForm = {...this.value}
    }
  },

  methods: {
    showInfo () {
      this.$refs.featureInfoModal.open()
    },
    deleteFeature () {
      this.$emit('delete', this.value)
      this.$refs.featureInfoModal.close()
    },
    updateItem () {
      this.$emit('input', {...this.featureForm})
      this.$refs.featureInfoModal.close()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_utils.scss';

.FeatureItem__name {
  font-size: 1.1em;
  margin: .2em 0;
}

.FeatureItem__buttons {
  text-align: right;
}
</style>
