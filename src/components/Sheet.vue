<template>
<div class="Sheet">
  <div class="Sheet__content">
    <router-view></router-view>
  </div>
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
  height: calc(100vh - #{$app-margin-y * 2} - 25px);
  padding: 5px 15px;
  overflow-y: auto;
}

.Sheet__content {
  padding-bottom: 30px;
}
</style>
