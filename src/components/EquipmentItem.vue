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
    <VButton
      text="Save"
      paper
      @click="updateItem()"
    />
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
</style>
