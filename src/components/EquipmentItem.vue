<template>
<div>
  <div @click="showInfo()">
    <VCard class="EquipmentItem">
      <h3 class="EquipmentItem__name">{{modelValue.name}}</h3>
      {{modelValue.note}}
    </VCard>
  </div>
  <VModal ref="equipmentInfoModal">
    <EquipmentForm v-model="equipmentForm"></EquipmentForm>
    <div class="EquipmentItem__buttons">
      <VButton
        text="Delete"
        paper
        @click="deleteEquipment()"
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
import EquipmentForm from "@/components/EquipmentForm.vue";

export default {
  name: 'EquipmentItem',

  components: {
    EquipmentForm
  },

  props: {
    modelValue: Object
  },

  data () {
    return {
      equipmentForm: {...this.modelValue}
    }
  },

  watch: {
    modelValue () {
      this.equipmentForm = {...this.modelValue}
    }
  },

  methods: {
    showInfo () {
      this.$refs.equipmentInfoModal.open()
    },
    deleteEquipment () {
      this.$emit('delete', this.modelValue)
      this.$refs.equipmentInfoModal.close()
    },
    updateItem () {
      this.$emit('update:modelValue', {...this.equipmentForm})
      this.$refs.equipmentInfoModal.close()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_utils.scss';

.EquipmentItem__name {
  font-size: 1.1em;
  margin: .2em 0;
}

.EquipmentItem__buttons {
  text-align: right;
}
</style>
