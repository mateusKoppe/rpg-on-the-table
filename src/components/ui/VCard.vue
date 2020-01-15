<template>
<div class="VCard">
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
    title: String
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/_utils.scss";

.VCard__content {
  @extend %texture;
  margin-bottom: 12px;
  margin-top: 20px;
  padding: 10px;
  padding-top: 13px;
  position: relative;
}

.VCard__name {
  @extend %texture;
  @include texture-shadow(2);
  font-size: 18px;
  left: 50%;
  margin: 0;
  top: -13px;
  transform: translateX(-50%);
  padding: 1px 9px;
  position: absolute;
}
</style>
