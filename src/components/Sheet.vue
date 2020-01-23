<template>
<div class="Sheet">
  <router-view></router-view>
  <SheetTabs/>
</div>
</template>

<script>
import SheetTabs from "./SheetTabs";

export default {
  name: 'Sheet',

  components: {
    SheetTabs
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_utils.scss';

.Sheet {
  @extend %texture;
  background-color: #9A6247;
  height: calc(100vh - #{$app-margin-y * 2});
  padding: 5px 15px;
}
</style>
