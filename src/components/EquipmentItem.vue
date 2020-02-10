<template>
<div>
  <div @click="showInfo()">
    <VCard class="EquipmentItem">
      <h3 class="EquipmentItem__name">{{value.name}}</h3>
      {{ value.note }}
    </VCard>
  </div>
  <VModal ref="equipmentInfoModal">
    <EquipmentForm v-model="equipment"></EquipmentForm>
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

  computed: {
    equipment: {
      get () {
        return {...this.value}
      },
      set (data) {
        this.$emit('input', {...data})
      }
    }
  },

  methods: {
    showInfo () {
      this.$refs.equipmentInfoModal.open()
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
