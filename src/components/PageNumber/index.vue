<script setup lang="ts">
defineOptions({
  name: "PageNumber",
  inheritAttrs: false,
});
</script>

<template>
  <div class="page-number">
    <div class="page-number__content">
      <span>1</span>
      <i class="page-number-separator"></i>
      <span>100</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-number {
  position: fixed;
  right: 48px;
  bottom: 48px;

  &__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 12px;
    font-size: 14px;
    border-radius: 4px;
    box-shadow:
      0 1px 2px -2px rgb(0 0 0 / 16%),
      0 3px 6px 0 rgb(0 0 0 / 12%),
      0 5px 12px 4px rgb(0 0 0 / 9%);
  }

  &-separator {
    width: 2px;
    height: 12px;
    margin: 0 2px;
    background-color: #595959;
    transform: rotate(20deg);
  }
}
</style>
