<template>
  <div>
    <h2>Character</h2>
    <select>
        <option value="" v-for="race in races" :key="race.name">{{race.name}}</option>
    </select>
  </div>
</template>

<script>
import races from '@/data/races'

export default {
  data () {
    return {
      races
    }
  }
}
</script>
