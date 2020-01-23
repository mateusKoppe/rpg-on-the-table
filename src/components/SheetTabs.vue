<template>
<div class="SheetTabs">
  <div class="SheetTabs__wrapper">
    <router-link class="SheetTabs__tab" :to="{name: 'SheetStatus'}">
      Status
    </router-link>
    <router-link class="SheetTabs__tab" :to="{name: 'SheetWeapon'}">
      Weapons
    </router-link>
    <router-link class="SheetTabs__tab" :to="{name: 'SheetSkills'}">
      Skills
    </router-link>
    <router-link class="SheetTabs__tab" :to="{name: 'SheetBackground'}">
      Background
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "SheetTabs"
}
</script>

<style lang="scss" scoped>
@import '@/style/_utils.scss';

$SheetTabs-overlay: 4px;

.SheetTabs {
  bottom: #{$app-margin-y - $SheetTabs-overlay};
  left: #{$app-margin-x - $SheetTabs-overlay};
  position: absolute;
  width: calc(100vw - #{$app-margin-x * 2} + #{$SheetTabs-overlay * 2});
  overflow-x: auto;
}

.SheetTabs__wrapper {
  display: flex;
}

.SheetTabs__tab {
  @extend %texture;
  font-size: 1.2em;
  font-weight: 500;
  padding: .3em .6em;
  margin-right: .4em;
  text-decoration: none;

  &:last {
    margin-right: 0;
  }
}

</style>
