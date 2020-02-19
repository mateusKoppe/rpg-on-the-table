<template>
<div class="SheetTabs">
  <div class="SheetTabs__wrapper">
    <router-link class="SheetTabs__tab" :to="{name: 'SheetStatus'}">
      Status
    </router-link>
    <router-link class="SheetTabs__tab" :to="{name: 'SheetSkills'}">
      Skills
    </router-link>
    <router-link class="SheetTabs__tab" :to="{name: 'SheetEquipments'}">
      Equipments
    </router-link>
    <router-link class="SheetTabs__tab" :to="{name: 'SheetFeaturesAndTraits'}">
      Features
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
  left: 0;
  position: absolute;
  padding: { 
    left: $app-margin-x - $SheetTabs-overlay;
    right: $app-margin-x - $SheetTabs-overlay;
  }
  width: 100vw;
  overflow-x: auto;
}

.SheetTabs__wrapper {
  display: flex;
}

.SheetTabs__tab {
  @extend %texture;
  font-size: 1.2em;
  font-weight: 500;
  padding: .8em .6em;
  margin-right: .4em;
  text-decoration: none;

  &:last {
    margin-right: 0;
  }
}

</style>
