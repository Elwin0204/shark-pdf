<script setup lang="ts">
defineOptions({
  name: "Bookmarks",
  inheritAttrs: false,
});

const props = defineProps({
  data: {
    type: Array<BookmarkItem>,
    default: () => [],
  },
  keyField: {
    type: [String, Number],
    default: "value",
  },
  labelField: {
    type: [String, Number],
    default: "label",
  },
  childField: {
    type: [String, Number],
    default: "children",
  },
  defaultExpandedKeys: {
    type: Array<string | number>,
    default: () => [],
  },
});

const _data = ref<Array<BookmarkNode>>([]);
const _expandedSet = ref(new Set(props.defaultExpandedKeys));

const _flattenData = computed(() => {
  const result: Array<BookmarkNode> = [];
  function dfs(tree: Array<BookmarkNode>) {
    tree.forEach((node) => {
      result.push(node);
      if (_expandedSet.value.has(node.key)) dfs(node.children);
    });
  }
  dfs(_data.value);
  return result;
});

const isExpanded = (node: BookmarkNode) => _expandedSet.value.has(node.key);

watch(
  () => props.data,
  (newVal) => {
    _data.value = formatData(newVal, null);
  },
  { immediate: true }
);

function formatData(
  data: Array<BookmarkItem>,
  parent: BookmarkNode | null
): Array<BookmarkNode> {
  return data.map((item) => {
    const children = item[props.childField] || [];
    const bookmarkNode: BookmarkNode = {
      key: item[props.keyField],
      label: item[props.labelField],
      children: [],
      level: parent ? parent.level + 1 : 0,
      parentKey: parent ? parent.key : null,
      isLeaf: item.isLeaf !== undefined ? item.isLeaf : children.length === 0,
      rawNode: item,
    };
    if (children.length)
      bookmarkNode.children = formatData(children, bookmarkNode);
    return bookmarkNode;
  });
}

function handleToggleExpanded(node: BookmarkNode) {
  _expandedSet.value.has(node.key)
    ? _expandedSet.value.delete(node.key)
    : _expandedSet.value.add(node.key);
}
</script>

<template>
  <div class="bookmarks" role="bookmark">
    <h4>书签</h4>
    <bookmark-node
      v-for="node in _flattenData"
      :node="node"
      :key-field="keyField"
      :label-field="labelField"
      :children-field="childField"
      :key="node.key"
      :is-expanded="isExpanded(node)"
      @toggle-expanded="handleToggleExpanded"
    />
  </div>
</template>

<style lang="scss" scoped>
.bookmarks {
  position: relative;
  width: 300px;
  font-size: 16px;
  color: #606266;
  cursor: default;
  background: #fff;

  h4 {
    margin: 0;
    font-size: 16px;
  }
}
</style>
