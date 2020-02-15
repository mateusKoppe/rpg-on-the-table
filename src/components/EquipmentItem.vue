<template>
<div>
  <div @click="showInfo()">
    <VCard class="EquipmentItem">
      <h3 class="EquipmentItem__name">{{value.name}}</h3>
      {{value.note}}
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
import EquipmentForm from "@/components/EquipmentForm";

export default {
  name: 'EquipmentItem',

  components: {
    EquipmentForm
  },

  props: {
    value: Object
  },

  data () {
    return {
      equipmentForm: {...this.value}
    }
  },

  watch: {
    value () {
      this.equipmentForm = {...this.value}
    }
  },

  methods: {
    showInfo () {
      this.$refs.equipmentInfoModal.open()
    },
    deleteEquipment () {
      this.$emit('delete', this.value)
    },
    updateItem () {
      this.$emit('input', {...this.equipmentForm})
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
