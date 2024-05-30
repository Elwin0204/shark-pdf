<script setup lang="ts">
defineOptions({
  name: "Thumbnails",
  inheritAttrs: false,
});
const props = defineProps({
  data: {
    type: Array<ThumbnailItem>,
    default: () => [],
  },
});
</script>

<template>
  <ul class="thumbnail-list">
    <li class="thumbnail-item" v-for="(page, index) in data" :key="index">
      <div class="thumbnail-content">123</div>
      <div class="thumbnail-index">
        <span>{{ index }}</span>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.thumbnail-list {
  position: relative;

  .thumbnail-item {
    position: relative;

    .thumbnail-content {
      width: 100px;
      height: 125px;
      border: 1px solid red;
      border-radius: 4px;
    }

    .thumbnail-index {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 24px;
      font-size: 12px;

      span {
        display: inline-flex;
        align-items: center;
        padding: 0 8px;
        color: #fff;
        background-color: #000000a6;
        border-radius: 4px;
      }
    }
  }
}
</style>
