<template>
  <div class="article-content">
    <div class="head">
      <div class="title">{{ article.title }}</div>
      <div class="descript">
        <span>{{ globalData.site_name }}</span> 发布于 {{ article.create_datetime }}
      </div>
    </div>
    <div class="article-detail" v-html="article.formatHtml"></div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, inject } from 'vue';
import { useRoute } from 'vue-router';
import { get } from '@/api/public';

const route = useRoute();
const globalData = inject('globalData');

const articleId = route.params.id;
const article = ref({});

async function getArticle() {
  let res = await get(`/api/wx_cms/article/pub_article/`, { id: articleId });
  article.value = res.data.data.data[0];
  article.value.formatHtml = article.value.content.replaceAll('data-src', 'src');
}

onBeforeMount(() => {
  getArticle();
})
</script>

<style scoped lang="less">
.article-content {
  width: var(--article-page-width);
  overflow: hidden;
  box-shadow: 0 2px 6px 0 rgba(37, 58, 43, 0.12);
  padding: 0;
  height: 100%;
  overflow-y: auto;

  .head {
    width: calc(100% - 1rem);
    padding: 0.5rem 0.5rem 2rem 0.5rem;
    border-bottom: 1px solid #ececec;

    .title {
      line-height: 1.5rem;
      font-size: 1.3rem;
      margin: 0.4rem 0;
      font-weight: 600;
    }

    .descript {
      line-height: 1.5rem;

      &>span {
        color: #5e7ce0;
        display: block;
      }
    }
  }
}
</style>