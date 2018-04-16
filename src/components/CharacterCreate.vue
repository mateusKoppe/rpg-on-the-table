<template>
  <div>
    <h2>Character</h2>

    <template v-if="step === 0">
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
    </template>

    <template v-else-if="step === 1">
      <h2>Abilities Scores</h2>
      <CharacterCreateAbilities :character="form"/>
    </template>

    <template v-else-if="step === 2">
      <h2>Skills</h2>
      <CharacterCreateSkills :character="form"/>
    </template>

    <template v-else-if="step === 3">
      <h2>Hit points</h2>
      <CharacterCreateHitPoints :character="form"/>
    </template>

    <div>
      <button
        v-if="!isFirstStep"
        @click="stepPrev"
      >prev</button>
      <button
        v-if="!isLastStep"
        @click="stepNext"
      >next</button>
    </div>

    {{form}}
  </div>
</template>

<script>
import races from '@/data/races'
import classes from '@/data/classes'
import backgrounds from '@/data/backgrounds'
import CharacterCreateAbilities from './CharacterCreateAbilities'
import CharacterCreateHitPoints from './CharacterCreateHitPoints'
import CharacterCreateSkills from './CharacterCreateSkills'

export default {
  name: 'CharacterCreate',

  components: {
    CharacterCreateAbilities,
    CharacterCreateHitPoints,
    CharacterCreateSkills
  },

  data () {
    return {
      form: {
        skills: {}
      },
      step: 0,
      races,
      classes,
      backgrounds
    }
  },

  computed: {
    isFirstStep () {
      return this.step === 0
    },
    isLastStep () {
      return this.step === 3
    }
  },

  methods: {
    stepNext () {
      this.step++
    },
    stepPrev () {
      this.step--
    }
  }
}
</script>
