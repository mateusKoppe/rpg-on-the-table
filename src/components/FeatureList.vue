<template>
<div>
  <div v-for="(feature, index) in modelValue" :key="index">
    <FeatureItem
      @input="updateFeature"
      @delete="deleteFeature(feature)"
    />
  </div>
  <VButton
    text="Add"
    @click="startCreating()"
  />
  <VModal ref="featuresFormModal">
    <FeatureForm v-model="featureCreating"/>
    <div class="FeatureList__form-buttons">
      <VButton
        text="Cancel"
        paper
        @click="stopCreating()"
      />
      <VButton
        text="Save"
        paper
        @click="addFeature()"
      />
    </div>
  </VModal>
</div>
</template>

<script>
import FeatureItem from './FeatureItem.vue'
import FeatureForm from './FeatureForm.vue'

export default {
  name: 'FeatureList',

  components: {
    FeatureItem,
    FeatureForm
  },

  props: {
    modelValue: {
      type: Array
    }
  },

  data () {
    return {
      featureCreating: {
        name: '',
        note: '',
        description: ''
      },
      isCreating: false,
    } 
  },

  created () {
    if (!this.modelValue) this.$emit('update:modelValue', [])
  },

  watch: {
    modelValue () {
      if (!this.modelValue) this.$emit('update:modelValue', [])
    }
  },

  methods: {
    addFeature () {
      this.$emit('update:modelValue', [
        ...this.modelValue,
        {...this.featureCreating}
      ])
      this.featureCreating = {}
      this.stopCreating()
    },
    deleteFeature (feature) {
      const index = this.modelValue.indexOf(feature)
      const list = [...this.modelValue]
      list.splice(index, 1)
      this.$emit('update:modelValue', list)
    },
    updateFeature () {
      const list = [...this.modelValue]
      this.$emit('update:modelValue', list)
    },
    startCreating () {
      this.$refs.featuresFormModal.open()
      this.featureCreating = {}
    },
    stopCreating () {
      this.$refs.featuresFormModal.close()
    }
  }
}
</script>

<style>
.FeatureList__form-buttons {
  text-align: right;
}
</style>
