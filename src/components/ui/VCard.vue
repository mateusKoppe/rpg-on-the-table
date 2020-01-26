<template>
<div class="VCard" :class="{
    'VCard--sm': sm
  }">
  <div class="VCard__content">
    <div v-if="title" class="VCard__name">
      {{title}}
    </div>
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'VCard',

  props: {
    title: String,
    sm: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/_utils.scss";

.VCard__content {
  @extend %texture;
  margin: {
    bottom: 12px;
    top: 20px;
  }
  padding: 10px;
  padding-top: 13px;
  position: relative;
}

.VCard__name {
  @extend %texture;
  @include texture-shadow(2);
  font-size: .7em;
  left: 50%;
  margin: 0;
  top: -13px;
  transform: translateX(-50%);
  padding: 1px 9px;
  position: absolute;
}

.VCard--sm {
  .VCard__content {
    @include texture-shadow(2);
    margin: {
      top: .5em;
      bottom: .6em
    }
    padding: .55em;
    padding-bottom: .5em;
  } 
}
</style>
