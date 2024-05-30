<script setup lang="ts">
defineOptions({
  name: "NavBar",
  inheritAttrs: false,
});
import { useAppStore } from "@/store";
import { NavEnum } from "@/enums/NavEnum";

const appStore = useAppStore();

const navMode = computed(() => appStore.navMode);
const navbarVisible = computed(() => appStore.navbarVisible);

const thumbnailList = computed(() => appStore.thumbnailList);
const annotationList = computed(() => appStore.annotationList);
const bookmarkList = computed(() => appStore.bookmarkList);

function toggleNavMode(val: string) {
  appStore.toggleNavMode(val);
}
</script>

<template>
  <transition name="slide">
    <div class="navbar-container" v-if="navbarVisible">
      <div class="nav-container">
        <div class="nav-tabs">
          <button
            :class="{
              'sk-btn': true,
              'is-medium': true,
              'is-vertical': true,
              'is-active': navMode === NavEnum.THUMBNAIL,
            }"
            @click="toggleNavMode(NavEnum.THUMBNAIL)"
          >
            <svg-icon icon-class="fluent--document-page-number-24-filled" />
          </button>
          <button
            :class="{
              'sk-btn': true,
              'is-medium': true,
              'is-vertical': true,
              'is-active': navMode === NavEnum.BOOKMARK,
            }"
            @click="toggleNavMode(NavEnum.BOOKMARK)"
          >
            <svg-icon icon-class="bi--bookmark-heart-fill" />
          </button>
          <button
            :class="{
              'sk-btn': true,
              'is-medium': true,
              'is-vertical': true,
              'is-active': navMode === NavEnum.RECORDS,
            }"
            @click="toggleNavMode(NavEnum.RECORDS)"
          >
            <svg-icon icon-class="tabler--message-filled" />
          </button>
        </div>
        <div class="nav-content">
          <thumbnails
            v-if="navMode === NavEnum.THUMBNAIL"
            :data="thumbnailList"
          />
          <bookmarks v-if="navMode === NavEnum.BOOKMARK" :data="bookmarkList" />
          <annotations
            v-if="navMode === NavEnum.RECORDS"
            :data="annotationList"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.navbar-container {
  position: fixed;
  top: 50%;
  left: 0;
  display: inline-flex;
  display: flex;
  align-items: center;
  height: 100vh;
  transition: transform 0.3s ease;
  transform: translateY(-50%);

  .nav-container {
    display: flex;
    height: calc(100% - 100px);
    overflow: hidden;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    box-shadow:
      1px 0 2px -2px rgb(0 0 0 / 16%),
      3px 0 6px 0 rgb(0 0 0 / 12%),
      5px 0 12px 4px rgb(0 0 0 / 9%);

    .nav-tabs {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;
      background-color: #fff;
      border-right: 1px solid #0505050f;
    }

    .nav-content {
      padding: 12px;
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translate(-100%, -50%);
}
</style>
