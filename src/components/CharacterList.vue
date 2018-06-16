<template>
<div>
  <div v-for="(character, index) in characters" :key="index">
    <pre>{{character}}</pre>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'CharacterList',

  computed: {
    ...mapGetters([
      'characters'
    ])
  }
}
</script>
