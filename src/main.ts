import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/index.scss";
// 本地SVG图标
import "virtual:svg-icons-register";
import { setupStore } from "@/store";

const app = createApp(App);
// 全局注册 状态管理(store)
setupStore(app);
app.mount("#app");
