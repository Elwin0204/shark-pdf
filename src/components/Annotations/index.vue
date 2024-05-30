<script setup lang="ts">
defineOptions({
  name: "Annotations",
  inheritAttrs: false,
});
const props = defineProps({
  data: {
    type: Array<PageAnnotation>,
    default: () => [],
  },
});

function deleteAll() {}
function toggleHidden(page: PageAnnotation) {
  page.isHidden = !page.isHidden;
}
</script>

<template>
  <div class="annotation-container">
    <div class="annotation-title">
      <h4>注释</h4>
      <button
        :class="{
          'sk-btn': true,
          'is-medium': true,
        }"
        @click="deleteAll"
      >
        <svg-icon icon-class="mingcute--delete-2-fill" />
      </button>
    </div>
    <ul class="page-list">
      <li class="page-item" v-for="(page, index) in data" :key="index">
        <div class="page-header">
          <span>{{ `第${page.page}页` }}</span>
          <button
            :class="{
              'sk-btn': true,
              'is-small': true,
              'is-border': true,
            }"
            @click="toggleHidden(page)"
          >
            {{ page.data.length }}
            <svg-icon
              icon-class="lets-icons--expand-left"
              :class="{ 'is-expanded': !page.isHidden }"
            />
          </button>
        </div>
        <ul class="annotation-list" v-if="!page.isHidden">
          <li
            class="annotation-item"
            v-for="(annotation, index2) in page.data"
            :key="index2"
          >
            <canvas width="300" height="100"></canvas>
            <!-- {{ annotation.data }} -->
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.annotation-container {
  position: relative;
  width: 300px;

  .annotation-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
  }
}

.page-list {
  position: relative;
  color: #000000e0;

  .page-item {
    position: relative;
    margin-bottom: 20px;

    .page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .is-expanded {
      transform: rotate(-90deg);
    }
  }
}

.annotation-list {
  position: relative;
  color: #000000a6;

  .annotation-item {
    position: relative;
    margin: 10px 0;
    overflow: hidden;
    border-radius: 8px;
    box-shadow:
      0 1px 2px -2px rgb(0 0 0 / 16%),
      0 3px 6px 0 rgb(0 0 0 / 12%),
      0 5px 12px 4px rgb(0 0 0 / 9%);
  }
}
</style>
