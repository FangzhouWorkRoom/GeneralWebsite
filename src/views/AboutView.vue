<template>
  <nav-menu></nav-menu>
  <div class="about-page">
    <div class="article-list-head" :style="{ backgroundImage: `url(${columnData.cover_img}`}">
      <div>
        <span>{{ columnData.title }}</span>
        <span>{{ columnData.description }}</span>
      </div>
    </div>
    <div class="about-content">
      <div v-html="globalData.about"></div>
    </div>
  </div>
  <page-foot></page-foot>
</template>

<script setup>
import { inject } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const globalData = inject('globalData');

const columnData = route.meta.columnData;
</script>

<style lang="less" scoped>
.hidden-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.article-list-head {
  height: var(--article-head-height);
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #ffffff;

  &>div {
    width: var(--page-width);
    margin: 0 auto;

    &>span:nth-child(1) {
      font-size: 1.5rem;
      line-height: 2rem;
      display: block;
      padding: 0 5px;
      padding-top: 1rem;
    }

    &>span:nth-child(2) {
      font-size: 1rem;
      line-height: 1.5rem;
      display: block;
      padding: 0;
      .hidden-text();
      -webkit-line-clamp: var(--article-title-rows);
    }
  }
}

.about-content {
  width: var(--page-width);
  min-height: calc(100vh - 14.5rem);
  margin: 0 auto;

  .about-item {
    box-shadow: 0 2px 6px 0 rgba(37, 43, 58, 0.12);
    margin: 0 auto 0.5rem auto;
    width: 100%;

    .title {
      font-size: larger;
      font-weight: 800;
      line-height: 3rem;
      padding: 0 0.5rem;
    }

    .content {
      line-height: 1.5rem;
      padding-bottom: rem;
      padding: 0 0.5rem;
    }
  }
}</style>
