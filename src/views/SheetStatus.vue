<template>
<div>
  <div class="SheetStatus__brief">
    <h2 class="SheetStatus__name">{{character.name}}</h2>
    <div>
      <b>Race: </b>{{character.race}} <br>
      <b>Class: </b>{{character.class}} lv 1
    </div>
  </div>
  <div class="SheetStatus__status">
    <VCard>
      <b>HP:</b> 14 / 20
    </VCard>
    <VCard>
      <b>Exp:</b> 2000
    </VCard>
  </div>
  <div class="SheetStatus__combat">
    <VCard title="AC">
      14
    </VCard>
    <VCard title="Iniciative">
      3
    </VCard>
    <VCard title="Speed">
      30
    </VCard>
  </div>
  <VCard>
    <input type="checkbox"> Inspiration
  </VCard>
  <div class="SheetStatus__abilities">
    <VCard
      :title="ability"
      v-for="(value, ability) in character.abilities" :key="ability">
        {{ value }} <br>
        ({{value | modifier | signed}})
    </VCard>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { modifier, signed } from '@/common/filters'

export default {
  name: 'SheetStatus',

  filters: {
    modifier,
    signed
  },

  computed: {
    ...mapGetters({
      character: 'actualCharacter'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_utils.scss';

.SheetStatus__brief {
  @extend %texture;
  padding: 1em;
  margin-top: .5em;
}

.SheetStatus__name {
  margin: 0;
}

.SheetStatus__abilities {
  @include make-column(3, 10px);
  font-size: 1.6rem;
  text-align: center;
}

.SheetStatus__status {
  @include make-column(2, 10px);
  text-align: center;
}

.SheetStatus__combat {
  @include make-column(3, 10px);
  text-align: center;
  font-size: 1.4rem;
}
</style>
