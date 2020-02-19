<template>
<div>
  <div v-for="(feature, index) in value" :key="index">
    <FeatureItem
      v-model="value[index]"
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
import FeatureItem from './FeatureItem'
import FeatureForm from './FeatureForm'

export default {
  name: 'FeatureList',

  components: {
    FeatureItem,
    FeatureForm
  },

  props: {
    value: {
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
    if (!this.value) this.$emit('input', [])
  },

  watch: {
    value () {
      if (!this.value) this.$emit('input', [])
    }
  },

  methods: {
    addFeature () {
      this.$emit('input', [
        ...this.value,
        {...this.featureCreating}
      ])
      this.featureCreating = {}
      this.stopCreating()
    },
    deleteFeature (feature) {
      const index = this.value.indexOf(feature)
      const list = [...this.value]
      list.splice(index, 1)
      this.$emit('input', list)
    },
    updateFeature () {
      const list = [...this.value]
      this.$emit('input', list)
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
