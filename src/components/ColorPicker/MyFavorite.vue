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
  {
    hex: "#1F28B6",
  },
  {
    hex: "#1F28B6",
  },
  {
    hex: "#1F28B6",
  },
  {
    hex: "#1F28B6",
  },
  {
    hex: "#1F28B6",
  },
  {
    hex: "#1F28B6",
  },
  {
    hex: "#1F28B6",
  },
  {
    hex: "#1F28B6",
  },
]);

function addFavorite(color: Color) {
  const hex = rgb2Hex(color.r, color.g, color.b).toUpperCase();
  if (favoriteColors.value.length > 9) {
    favoriteColors.value.splice(0, 1);
  }
  favoriteColors.value.push({ hex });
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
@import "./styles/my-favorite.scss";
</style>
