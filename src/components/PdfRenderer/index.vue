<script setup lang="ts">
defineOptions({
  name: "PdfRenderer",
  inheritAttrs: false,
});
import { useAppStore } from "@/store";
import * as pdfjs from "pdfjs-dist";
pdfjs.GlobalWorkerOptions.workerSrc =
  "../../../node_modules/pdfjs-dist/build/pdf.worker.mjs";

const appStore = useAppStore();
const pdfPages = computed(() => appStore.pdfPages);
const currentPage = computed(() => appStore.currentPage);
const pdfDoc = shallowRef();
const pdfScale = ref(1.3333333333333333);

const renderPage = (num: number) => {
  pdfDoc.value.getPage(num).then((page: any) => {
    const pageDataset = `[data-page-number="${num}"]`;
    const pageEl = document.querySelector(pageDataset) as HTMLDivElement;
    const canvasId = `pdf-canvas-${num}`;
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as any;
    const dpr = window.devicePixelRatio || 1;
    const bsr =
      ctx?.webkitBackingStorePixelRatio ||
      ctx?.mozBackingStorePixelRatio ||
      ctx?.msBackingStorePixelRatio ||
      ctx?.oBackingStorePixelRatio ||
      ctx?.backingStorePixelRatio ||
      1;
    const ratio = dpr / bsr;
    const viewport = page.getViewport({ scale: 1 });
    console.log(
      "pdfScale.value",
      pdfScale.value,
      viewport.width,
      viewport.height
    );
    pageEl.style.width = `round(var(--scale-factor) * ${viewport.width}px, 1px)`;
    pageEl.style.height = `round(var(--scale-factor) * ${viewport.height}px, 1px)`;

    canvas.width = viewport.width * pdfScale.value * ratio;
    canvas.height = viewport.height * pdfScale.value * ratio;
    canvas.style.width = `${viewport.width * pdfScale.value}px`;
    canvas.style.height = `${viewport.height * pdfScale.value}px`;
    ctx?.setTransform(
      pdfScale.value * ratio,
      0,
      0,
      pdfScale.value * ratio,
      0,
      0
    );
    // canvas.width = viewport.width * ratio;
    // canvas.height = viewport.height * ratio;
    // canvas.style.width = `${viewport.width}px`;
    // canvas.style.height = `${viewport.height}px`;
    // ctx?.setTransform(ratio, 0, 0, ratio, 0, 0);
    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };
    page.render(renderContext);
    if (num < pdfPages.value) {
      renderPage(num + 1);
    }
  });
};

const loadFile = async (url: string) => {
  try {
    const loadingTask = pdfjs.getDocument(url);
    loadingTask.promise
      .then((pdf: any) => {
        pdfDoc.value = pdf;
        appStore.setPdfPages(pdf.numPages);
        console.log("载入pdf", pdf);
        nextTick(() => {
          renderPage(1);
        });
      })
      .catch((err: any) => {
        console.error(err);
      });
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  loadFile("https://elwin0204.github.io/shark-pdf/sample.pdf");
});
</script>

<template>
  <div class="pdf-renderer">
    <div class="pdf-pages" :style="{ '--scale-factor': pdfScale }">
      <div
        class="pdf-page"
        :data-page-number="i"
        v-for="i in pdfPages"
        :key="i"
      >
        <div class="canvas-container">
          <canvas :id="`pdf-canvas-${i}`" style="display: block"></canvas>
        </div>
        <span class="page-number">{{ i }}.</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pdf-renderer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 0;
}

.pdf-pages {
  .pdf-page {
    direction: ltr;
    margin: 1px auto -8px;
    position: relative;
    overflow: visible;
    border: 9px solid transparent;
    background-clip: content-box;
    background-color: rgb(255, 255, 255);
    .page-number {
      position: absolute;
      right: 30px;
      bottom: 15px;
      pointer-events: none;
    }
  }
  .canvas-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
