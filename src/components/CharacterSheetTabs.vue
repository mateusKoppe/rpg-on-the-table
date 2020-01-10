<template>
<div class="CharacterSheetTabs">
  <div class="CharacterSheetTabs__wrapper">
    <button class="CharacterSheetTabs__tab">
      Status
    </button>
    <button class="CharacterSheetTabs__tab">
      Weapons
    </button>
    <button class="CharacterSheetTabs__tab">
      Skills
    </button>
    <button class="CharacterSheetTabs__tab">
      Background
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: "CharacterSheetTabs"
}
</script>

<style lang="scss" scoped>
@import '@/style/_utils.scss';

$CharacterSheetTabs-overlay: 4px;

.CharacterSheetTabs {
  bottom: #{$app-margin-y - $CharacterSheetTabs-overlay};
  left: #{$app-margin-x - $CharacterSheetTabs-overlay};
  position: absolute;
  width: calc(100vw - #{$app-margin-x * 2} + #{$CharacterSheetTabs-overlay * 2});
  overflow-x: auto;
}

.CharacterSheetTabs__wrapper {
  display: flex;
}

.CharacterSheetTabs__tab {
  @extend %texture;
  font-size: 1.2em;
  font-weight: 500;
  padding: .3em .6em;
  margin-right: .4em;

  &:last {
    margin-right: 0;
  }
}

</style>
