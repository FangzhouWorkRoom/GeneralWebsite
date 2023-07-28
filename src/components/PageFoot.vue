<template>
  <div class="page-foot">
    <el-row class="page-foot-column-content">
      <el-col :xs="24" :md="8" class="page-foot-column">
        <div class="title">友情链接</div>
        <div class="list-item">
          <div class="link-item"><el-link>中国老干部</el-link></div>
          <div class="link-item"><el-link>江苏老干部</el-link></div>
          <div class="link-item"><el-link>江苏省离退休干部服务管理系统</el-link></div>
          <div class="link-item"><el-link>镇江市委老干部局</el-link></div>
        </div>
      </el-col>
      <el-col :xs="24" :md="8" class="page-foot-column">
        <div class="title">市政服务</div>
        <div class="list-item">
          <div class="link-item"><el-link>镇江市人民政府</el-link></div>
          <div class="link-item"><el-link>镇江市国有资产监督管理委员会</el-link></div>
          <div class="link-item"><el-link>市民政局</el-link></div>
        </div>
      </el-col>
      <el-col :xs="24" :md="8" class="page-foot-column">
        <div class="title">快捷入口</div>
        <div class="list-item">
          <div class="link-item"><el-link>天气预报</el-link></div>
          <div class="link-item"><el-link>中国铁路12306</el-link></div>
          <div class="link-item"><el-link>中国航班</el-link></div>
          <div class="link-item"><el-link>健康档案</el-link></div>
        </div>
      </el-col>
    </el-row>

    <div class="copyright">
      <el-row class="copyright-content">
        <el-col :xs="24" :md="4" class="info-item">苏ICP备20230323-1号</el-col>
        <el-col :xs="24" :md="4" class="info-item">Copyright @ 2022 ~ 2023</el-col>
        <el-col :xs="24" :md="4" class="info-item">华为技术有限公司苏州分公司</el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="less">
.page-foot {
  width: 100%;
  background-color: #DFE1E6;
  display: flex;
  flex-direction: column;
  align-items: center;

  .page-foot-column-content {
    width: var(--page-width);

    .page-foot-column {
      height: auto;
      margin-bottom: 10px;
      color: #252B3A;

      .title {
        font-size: large;
        font-weight: 600;
        width: 96%;
        line-height: 3rem;
        border-bottom: 1px solid #ffffff;
      }

      .list-item {
        line-height: 1.5rem;
        width: 96%;
      }
    }
  }

  .copyright {
    width: 100%;
    background-color: #2c2c2c;
    line-height: 3rem;

    .copyright-content {
      width: var(--page-width);
      text-align: center;

      .info-item {
        color: #ffffff;
        font-size: 1rem;
        padding: 0 0.2rem;
        line-height: 2rem;
        text-align: center;
      }
    }
  }
}</style>