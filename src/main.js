import './assets/main.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Components from '@/components';
import axios from '@/api/public';
import { get } from '@/api/public';
import { pageList } from '@/api/data';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(axios);
app.use(ElementPlus, { locale: zhCn });
app.use(Components);

function addRouter(route) {
  router.addRoute({
    path: route.web_path,
    name: route.web_path,
    meta: { columnData: route },
    component: () => import(/* @vite-ignore */ './views/' + route.model + '.vue'),
  });
}

async function setColumnList(pageList) {
  pageList.map(page => {
    if (page.is_router) {addRouter(page)};
    page.children.map(subPage => {
      if (subPage.is_router) addRouter(subPage);
    })
  })
  return;
}


async function initPage() {
  let pageList = (await get('/api/system/column/list_tree/')).data.data.data;
  localStorage.setItem('pageList', JSON.stringify(pageList));
  let globalData = (await get('/api/system/company_home/pub/')).data.data.data[0];
  await setColumnList(pageList);
  app.provide('globalData', globalData);
  app.use(router);
  app.mount('#app');
}

initPage();
