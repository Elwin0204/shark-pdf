<script setup lang="ts">
import ToolBar from "@/components/ToolBar/index.vue";
import NavBar from "@/components/NavBar/index.vue";
import AnnotationBar from "@/components/AnnotationBar/index.vue";
</script>

<template>
  <div class="app-container">
    <ToolBar />
    <NavBar />
    <AnnotationBar />
    <PageNumber />
  </div>
</template>
