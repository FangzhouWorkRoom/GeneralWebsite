<script setup>

</script>

<template>
  <div class="home-page">
    <nav-menu></nav-menu>

    <!--最近五条新闻-->
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 5" :key="item">
        <div class="article-content"></div>
      </el-carousel-item>
    </el-carousel>

    <div class="home-main">
      <el-row>
        <!--时政要闻-->
        <el-col :xs="24" :md="12" class="current-affairs">时政要闻</el-col>
        
        <!--工作动态-->
        <el-col :xs="24" :md="12" class="work-dynamics">工作动态</el-col>

        <!--通知公示-->
        <el-col :xs="24" :md="18" class="notice-publicity">通知公示</el-col>

        <!--领导信箱-->
        <el-col :xs="24" :md="6" class="leader-mailbox">领导信箱</el-col>
      </el-row>
    </div>

    <page-foot></page-foot>
  </div>
</template>

<style scoped lang="less">
.article-content {
  height: 300px;
  background-color: aliceblue;
}

.home-main {
  width: var(--page-width);
  .current-affairs{
    min-height: 300px;
    background-color: aquamarine;
    margin-bottom: 10px;
  }
  .work-dynamics{
    min-height: 300px;
    background-color: bisque;
    margin-bottom: 10px;
  }
  .notice-publicity{
    min-height: 100px;
    margin-bottom: 10px;
    background-color: chartreuse;
  }
  .leader-mailbox{
    min-height: 100px;
    margin-bottom: 10px;
    background-color: cadetblue;
  }
}
</style>