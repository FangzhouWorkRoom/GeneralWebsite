import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import {pageList} from '@/api/data';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})

function addRouter(route) {
  router.addRoute({ 
    path: route.url,
    name: route.url,
    meta: {key: route.key},
    component: () => import(/* @vite-ignore */ '../views/' + route.model + '.vue')
  });
}

pageList.map(page => {
  if (page.isRouter) addRouter(page);
  page.children.map(subPage => {
    if (subPage.isRouter) addRouter(subPage);
  })
})

export default router;
