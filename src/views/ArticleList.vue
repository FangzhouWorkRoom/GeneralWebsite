<template>
  <div class="article-list-page">
    <nav-menu></nav-menu>
    <div class="article-list-head">
      <div>
        <span>栏目名称</span>
        <span>关于栏目的介绍，姜军还说道，网络名人、“网络大V”更要正确运用自身影响力，模范遵守法律法规，自觉承担社会责任，积极传播正能量</span>
      </div>
    </div>
    <div class="article-list-main">
      <el-row>
        <el-col :xs="24" :md="8" v-for="i in 8" style="margin: 0;">
          <div class="article-list-item"></div>
        </el-col>
      </el-row>
    </div>
    <page-foot></page-foot>
  </div>
</template>

<script setup>
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();

onBeforeRouteLeave(() => {
  console.log(route.meta);
})
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
.article-list-main{
  min-height: 350px;
  width: var(--page-width);
  margin: 10px auto;
  .article-list-item{
    width: 96%;
    height: var(--article-list-item-height);
    box-shadow: 0 2px 6px 0 rgba(37, 43, 58, 0.12);
    margin: 0.2rem 2%;
    border-radius: 4px;
  }
}
</style>