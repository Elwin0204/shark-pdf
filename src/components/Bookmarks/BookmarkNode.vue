<script setup lang="ts">
defineOptions({
  name: "BookmarkNode",
  inheritAttrs: false,
});
import { BookmarkNodeEmitter } from "./interface/types";

const emit = defineEmits<BookmarkNodeEmitter>();

const props = defineProps({
  node: {
    type: Object as PropType<BookmarkNode>,
    default: () => {},
  },
  indent: {
    type: Number,
    default: 16,
  },
  isExpanded: {
    type: Boolean,
    default: false,
  },
});

const expanded = ref(false);

function handleNodeClick() {}

function handleExpandClick(node: BookmarkNode) {
  emit("toggleExpanded", node);
}
</script>
<template>
  <collapse-transition>
    <div
      class="bookmark-node"
      :class="{
        'is-expanded': expanded,
      }"
      @click.stop="handleNodeClick"
    >
      <div
        class="bookmark-node__content"
        :style="{ 'padding-left': `${node.level * indent}px` }"
      >
        <svg-icon
          v-if="node.isLeaf"
          icon-class="ph--dot-fill"
          :class="{ 'bookmark-node__expand-icon': true }"
        />
        <svg-icon
          v-else
          icon-class="material-symbols--expand-circle-right-rounded"
          :class="{
            'bookmark-node__expand-icon': true,
            'is-expanded': isExpanded,
          }"
          @click="handleExpandClick(node)"
        />
        <span>{{ node.label }}</span>
      </div>
    </div>
  </collapse-transition>
</template>
<style lang="scss" scoped>
.bookmark-node {
  white-space: nowrap;
  user-select: none;
  outline: none;

  &__content {
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 5px;
    cursor: pointer;
  }

  &__expand-icon {
    margin-top: 2px;
    color: #c0c4cc;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    transform: rotate(0deg);

    &.is-expanded {
      transform: rotate(90deg);
    }
  }
}
</style>
./interface/types
