import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';
import mixin from './utils/mixin';

const app = createApp(App);

// 引入Vue路由
app.use(router);

// 混入公共的实例
app.mixin(mixin);

// 引入全局过滤器
import { filters } from './utils/filters';
app.config.globalProperties.$filters = filters;

// 引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
app.use(ElementPlus);

// 注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 引入pinia和store
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);
import store from '@/store';
app.config.globalProperties.$store = store;

app.mount('#app');
