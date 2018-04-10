<template>
  <div>
    <h2>Character</h2>
    <div>
      <label for="race">Race:</label>
      <select v-model="form.race" id="race">
          <option v-for="race in races" :key="race.name">{{race.name}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import races from '@/data/races'

export default {
  data () {
    return {
      form: {},
      races
    }
  }
}
</script>
