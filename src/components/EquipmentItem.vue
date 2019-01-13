<template>
<div class="EquipmentItem">
  <VInput
    v-model="equipment.name"
    class="EquipmentItem__name"
    label="Name"
  />
  <VInput
    v-model="equipment.weight"
    class="EquipmentItem__weight"
    type="number"
    label="Weight"
  />
  <br>
</div>
</template>

<script>
export default {
  name: 'EquipmentItem',

  data () {
    return {
      equipment: {
        name: "",
        weight: 0
      }
    }
  },

  watch: {
    equipment: {
      handler (value) {
        this.$emit('input', {
          ...this.equipment,
          weight: +this.equipment.weight,
        })
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_utils.scss';

.EquipmentItem {
  display: flex;
  flex-wrap: nowrap;

  &__name {
    flex: 3;
  }

  &__weight {
    flex: 1;
    min-width: 90px;
  }
}
</style>
