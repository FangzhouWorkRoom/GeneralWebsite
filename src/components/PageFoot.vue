<template>
  <div class="page-foot">
    <el-row class="page-foot-column-content">
      <el-col :xs="24" :md="8" class="page-foot-column" v-for="(key, index) in Object.keys(link_list)" :key="index">
        <div class="title">{{key}}</div>
        <div class="list-item">
          <div class="link-item" v-for="(link, i) in link_list[key]" :key="i">
            <el-link :href="link.link_url">{{link.link_name}}</el-link>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="copyright">
      <el-row class="copyright-content hidden-sm-and-down" >
        <el-col :span="24" class="info-item">
          <el-link class="info-item">苏ICP备20230136-1号</el-link>
          Copyright {{globalData.site_name}} @2022 ~ 2025
        </el-col>
      </el-row>
      <el-row class="copyright-content hidden-sm-and-up" >
        <el-row :span="24" class="info-item">
          <el-link class="info-item">苏ICP备20230136-1号</el-link>
        </el-row>
        <el-row :span="24" class="info-item">Copyright {{globalData.site_name}} @2022 ~ 2025</el-row>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import {inject, ref, onMounted} from 'vue';
const globalData = inject('globalData');
const link_list = ref({});

function init() {
  let res_data = JSON.parse(JSON.stringify(globalData));
  res_data.links.map(item => {
    if(link_list.value[item.link_type]) {
      link_list.value[item.link_type].push(item);
    } else {
      link_list.value[item.link_type] = [item];
    }
  })
}

onMounted(() => {
  init();
})

</script>

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
    height: auto;

    .copyright-content {
      width: var(--page-width);
      text-align: center;

      .info-item {
        color: #ffffff;
        font-size: 0.8rem;
        padding: 0 0.2rem;
        text-align: center;
        line-height: 2rem;
      }
    }
  }
}</style>