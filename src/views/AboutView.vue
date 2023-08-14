<template>
  <div class="about-page">
    <nav-menu></nav-menu>
    <div class="article-list-head">
      <div>
        <span>栏目名称</span>
        <span>关于栏目的介绍，姜军还说道，网络名人、“网络大V”更要正确运用自身影响力，模范遵守法律法规，自觉承担社会责任，积极传播正能量</span>
      </div>
    </div>
    <div class="about-content">
      <div v-for="i in 3" :key="i" class="about-item">
        <div class="title">老干部办简介</div>
        <div class="content">
          {{ about }}
        </div>
      </div>
    </div>
    <page-foot></page-foot>
  </div>
</template>

<script setup>
import {about} from '@/api/data';
</script>

<style lang="less" scoped>

.article-list-head{
  height: var(--article-head-height);
  width: 100%;
  background-image: url('@/assets/pg1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  & > div{
    width: var(--page-width);
    margin: 0 auto;
    & > span:nth-child(1) {
      font-size: 1.5rem;
      line-height: 5rem;
      display: block;
      padding: 0 10px;
    }
    & > span:nth-child(2) {
      font-size: 0.8rem;
      line-height: 1.5rem;
      display: block;
      padding: 0 10px;
    }
  }
}
.about-content{
  width: var(--page-width);
  min-height: calc(100vh - 14.5rem);
  margin: 0 auto;
  .about-item{
    box-shadow: 0 2px 6px 0 rgba(37, 43, 58, 0.12);
    margin: 0 auto 0.5rem auto;
    width: 100%;
    .title{
      font-size: larger;
      font-weight: 800;
      line-height: 3rem;
      padding: 0 0.5rem;
    }
    .content{
      line-height: 1.5rem;
      padding-bottom: rem;
      padding: 0 0.5rem;
    }
  }
}
</style>
