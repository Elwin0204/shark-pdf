<script setup lang="ts">
defineOptions({
  name: "PdfRenderer",
  inheritAttrs: false,
});
import * as pdfjs from "pdf-dist/build/pdf.js";
import * as pdfWorker from "pdf-dist/build/pdf.worker.min.js";

const pdfPages = ref(0);
const pdfDoc = ref();
const pdfScale = ref(1.0);

const loadFile = async (url: string) => {
  try {
    pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
    const loadingTask = pdfjs.getDocument(url);
    loadingTask.promise
      .then((pdf: any) => {
        pdfDoc.value = pdf;
        pdfPages.value = pdf.numPages;
        console.log("载入pdf");
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
  <div class="pdf-renderer">124</div>
</template>

<style lang="scss" scoped>
.pdf-renderer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
