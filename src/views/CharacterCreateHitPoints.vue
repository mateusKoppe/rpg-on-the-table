<template>
<div>
  <VInput
    v-model="hitDice"
    label="hitDice"
    type="number"
    min="1"
  />
</div>
</template>

<script>
export default {
  name: 'CharacterCreateHitPoints',

  props: {
    modelValue: Number
  },

  data () {
    return {
      hitDice: 1
    }
  },

  watch: {
    hitDice (value) {
      this.$emit('update:modelValue', +value)
    }
  },
}
</script>
