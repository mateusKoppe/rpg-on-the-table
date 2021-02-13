<template>
  <div>
    <div v-for="(ability, key) in abilities" :key="key">
      <VInput
        :label="ability.name"
        type="number"
        v-model="abilitiesValue[key]"
        :max="ability.max"
        :min="ability.min"
      />
    </div>
  </div>
</template>

<script>
import { abilities } from "@/data";

export default {
  name: "CharacterCreateAbilities",

  props: {
    character: Object,
    modelValue: Object,
  },

  data() {
    return {
      abilitiesValue: {},
      abilities,
    };
  },

  computed: {
    formatedAbilities() {
      const abilities = {};
      Object.keys(this.abilitiesValue).forEach((key) => {
        let points = +this.abilitiesValue[key];
        abilities[key] = points;
      });
      return abilities;
    },
  },

  watch: {
    formatedAbilities: {
      handler(value) {
        this.$emit("update:modelValue", value);
      },
      deep: true,
    },
  },

  created() {
    this.setAbilitiesToStartValue();
  },

  methods: {
    setAbilitiesToStartValue() {
      const abilitiesValue = Object.assign({}, this.abilitiesValue);
      Object.keys(this.abilities).forEach((key) => {
        const ability = this.abilities[key];
        abilitiesValue[key] = ability.min;
      });
      this.abilitiesValue= abilitiesValue
    },
  },
};
</script>
