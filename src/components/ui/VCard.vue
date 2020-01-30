<template>
<div class="VCard" :class="{
    'VCard--sm': sm,
    'VCard--noMargin': noMargin,
    'VCard--paper': paper,
    'VCard--gold': gold
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
    sm: Boolean,
    noMargin: Boolean,
    paper: Boolean,
    gold: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/_utils.scss";

.VCard {
  margin: {
    bottom: 12px;
    top: 20px;
  }
}

.VCard__content {
  @extend %texture;
  height: 100%; /* IDK why I'm suppose to discount padding here ;-; */
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
  > .VCard__content {
    @include texture-shadow(2);
    margin: {
      top: .5em;
      bottom: .6em
    }
    padding: .55em;
    padding-bottom: .5em;
  }
}

.VCard--noMargin {
  margin: 0;
}

.VCard--paper {
  > .VCard__content {
    @include paper-texture(5);
    background-color: #c87c34;
    padding: 18px;
    padding-top: 18px;
  }
}

.VCard--gold {
  > .VCard__content {
    // background-color: #b5952c;
    background-color: #ac9034;
    box-shadow: 8px 13px 13px rgba(4, 0, 0, 0.13), inset 1px 1px 0px 1px #f3d574, inset -1px -1px 0px 1px #b08f26, 0px 0.5px 0px #b08f26, 0px 0.66667px 0px #392e0b, 1px 1.14286px 0px #392e0b;
  }
}

</style>
