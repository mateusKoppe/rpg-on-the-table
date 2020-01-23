<template>
<VCard class="EquipmentItem">
  <h3 class="EquipmentItem__name">{{value.name}}</h3>
  {{ value.note }}
</VCard>
</template>

<script>
export default {
  name: 'EquipmentItem',

  props: {
    value: Object
  },

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
          ...value,
          weight: Number(value.weight),
        })
      },
      deep: true
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
