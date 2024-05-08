<script setup lang="ts">
import ToolBar from "@/components/ToolBar/index.vue";
import NavBar from "@/components/NavBar/index.vue";
import AnnotationBar from "@/components/AnnotationBar/index.vue";
</script>

<template>
  <div class="pdf-container">
    pdf
    <ToolBar />
    <NavBar />
    <AnnotationBar />
  </div>
</template>

<style lang="scss" scoped>
.pdf-container {
  width: 100%;
  height: 100%;
  background-color: #d42121;
  overflow: auto;
}
</style>
