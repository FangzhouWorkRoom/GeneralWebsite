import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Article from '../views/ArticleDetail.vue';
import WxArticleList from '../views/WxArticleList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article,
    },
    {
      path: '/wx_article_list/:id',
      name: 'WxArticleList',
      component: WxArticleList,
    },
  ]
})

export default router;
