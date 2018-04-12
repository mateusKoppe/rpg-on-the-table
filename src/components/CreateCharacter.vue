<template>
  <div>
    <h2>Character</h2>
    <div>
      <label for="race">Race: </label>
      <select v-model="form.race" id="race">
        <option v-for="race in races" :value="race" :key="race.name">{{race.name}}</option>
      </select>
    </div>
    <div v-if="form.race && form.race.subRaces">
      <label for="subRace">SubRace: </label>
      <select v-model="form.subRace" id="subRace">
        <option
          v-for="subRace in form.race.subRaces"
          :value="subRace"
          :key="subRace.name"
        >{{subRace.name}}</option>
      </select>
    </div>
    <div>
      <label for="class">Classe: </label>
      <select v-model="form.class" id="class">
        <option v-for="classe in classes" :value="classe" :key="classe.name">{{classe.name}}</option>
      </select>
    </div>
    <div>
      <label for="background">Background: </label>
      <select v-model="form.background" id="background">
        <option v-for="background in backgrounds"
          :value="background"
          :key="background.name"
        >{{background.name}}</option>
      </select>
    </div>
    <h2>Abilities Scores</h2>
    <DefineAbilities :character="form"/>
    <h2>Skills</h2>
    <div v-for="(skill, key) in skills" :key="skill.name">
      <label :for="'skill-'+key">{{skill.name}}: </label>
      <input v-model="form.skills[key]" :id="'skill-'+key" type="checkbox">
    </div>
    {{form}}
  </div>
</template>

<script>
import races from '@/data/races'
import classes from '@/data/classes'
import backgrounds from '@/data/backgrounds'
import skills from '@/data/skills'
import DefineAbilities from './DefineAbilities'

export default {
  components: {
    DefineAbilities
  },
  data () {
    return {
      form: {
        skills: {}
      },
      races,
      classes,
      backgrounds,
      skills
    }
  }
}
</script>
