<script setup lang="ts">
defineOptions({
  name: "MyFavorite",
  inheritAttrs: false,
});
import { Color } from "./interface/types";
import { rgb2Hex } from "./utils/converter";

const favoriteColors = ref([
  {
    hex: "#1F28B6",
  },
  {
    hex: "#1F28B6",
  },
]);

function addFavorite(color: Color) {
  let exist = false;
  const hex = rgb2Hex(color.r, color.g, color.b).toUpperCase();
  for (let i = 0; i < favoriteColors.value.length; i++) {
    if (favoriteColors.value[i].hex === hex) {
      exist = true;
      break;
    }
  }
  if (!exist) {
    favoriteColors.value.push({ hex });
  }
  if (favoriteColors.value.length > 10) {
    favoriteColors.value.splice(0, 1);
  }
}

defineExpose({
  addFavorite,
});
</script>
<template>
  <div class="my-favorite">
    <div class="my-favorite-label">Favorite Color</div>
    <div class="my-favorite-content">
      <ColorBlock
        v-for="(color, index) in favoriteColors"
        :key="index"
        :value="color.hex"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./styles/my-favorite";
</style>
