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
      <label for="race">Race: </label>
      <select v-model="form.subRace" id="race">
          <option
            v-for="subRace in form.race.subRaces"
            :value="subRace"
            :key="subRace.name"
          >{{subRace.name}}</option>
      </select>
    </div>
    <div>
      <label for="race">Classe: </label>
      <select v-model="form.class" id="race">
        <option v-for="classe in classes" :value="classe" :key="classe.name">{{classe.name}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import races from '@/data/races'
import classes from '@/data/classes'

export default {
  data () {
    return {
      form: {},
      races,
      classes
    }
  }
}
</script>
