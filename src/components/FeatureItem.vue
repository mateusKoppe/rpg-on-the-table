<template>
<div>
  <div @click="showInfo()">
    <VCard class="FeatureItem">
      <h3 class="FeatureItem__name">{{modelValue.name}}</h3>
      {{modelValue.shortDescription}}
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
import FeatureForm from "@/components/FeatureForm.vue";

export default {
  name: 'FeatureItem',

  components: {
    FeatureForm
  },

  props: {
    modelValue: Object
  },

  data () {
    return {
      featureForm: {...this.modelValue}
    }
  },

  watch: {
    modelValue () {
      this.featureForm = {...this.modelValue}
    }
  },

  methods: {
    showInfo () {
      this.$refs.featureInfoModal.open()
    },
    deleteFeature () {
      this.$emit('delete', this.modelValue)
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
