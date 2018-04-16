<template>
<div>
  <div v-for="(skill, key) in skills" :key="skill.name">
    <label :for="'skill-'+key">{{skill.name}}: </label>
    <input v-model="character.skills[key]" :id="'skill-'+key" type="checkbox">
  </div>
</div>
</template>

<script>
export default {
  name: 'CharacterCreateSkills',

  props: {
    character: Object
  }
}
</script>
