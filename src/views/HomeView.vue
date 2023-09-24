<script setup>
import { ref, computed, onBeforeMount, inject } from 'vue';
import { get } from '@/api/public';

const data = ref({});
const globalData = inject('globalData');

async function getHomeData() {
  let res_data = JSON.parse(JSON.stringify(globalData));
  data.value = res_data;
}

const isMobile = computed({
  get() {
    return document.body.clientWidth < 500;
  }
})

const titleRows = computed({
  get() {
    return isMobile.value ? 2 : 1;
  }
})

const activeNotice = ref(0);

function openUrl(row) {
  if (row.source === 1) {
    window.open(row.url, '_blank');
  } else {
    window.open(`/article/${row.id}`, '_blank');
  }
}

onBeforeMount(() => {
  getHomeData();
})

</script>

<template>
  <nav-menu></nav-menu>
  <div class="home-page">
    <!--最近五条新闻-->
    <el-carousel indicator-position="outside" height="40vw">
      <el-carousel-item v-for="(item, index) in data.banner_list" :key="index">
        <div class="article-content" :style="{ backgroundImage: `url(${item.banner_img})` }" @click="openUrl(item)">
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="home-main">
      <el-row>
        <!--时政要闻-->
        <el-col :xs="24" :md="12" class="current-affairs">
          <div class="model-content">
            <div class="model-title">时政要闻</div>
            <div class="list-content">
              <el-row v-for="(news, index) in data.new_list" :key="index" @click="openUrl(news)" style="cursor: pointer;">
                <el-col :span="21" class="title"> · {{ news.title }}</el-col>
                <el-col :span="3" class="date-time">09-17</el-col>
              </el-row>
            </div>
          </div>
        </el-col>

        <!--工作动态-->
        <el-col :xs="24" :md="12" class="work-dynamics">
          <div class="model-content">
            <div class="model-title">工作动态</div>
            <el-row class="work-list">
              <el-col :xs="24" :md="12" v-for="(work, index) in data.work_list" :key="index" @click="openUrl(work)" style="cursor: pointer;">
                <div class="work-item">
                  <el-image :src="work.cover_img" class="item-image" fit="cover"></el-image>
                  <span>{{ work.title }}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>

        <!--通知公示-->
        <el-col :xs="24" :md="18" class="notice-publicity">
          <div class="model-content">
            <div class="model-title">通知公示</div>
            <el-collapse v-model="activeNotice" accordion>
              <el-collapse-item :name="index" v-for="(notice, index) in data.notice_list" :key="index" class="notice-item">
                <template #title>
                  <div class="title" :style="{ color: activeNotice === index ? 'var(--primary-color)' : '#000000' }"  
                    @click="openUrl(notice)" style="cursor: pointer;">
                    {{ notice.title }}
                  </div>
                </template>
                <div class="notice-content">{{ notice.description }}</div>
                <div class="notice-time">{{ notice.update_datetime }}</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-col>

        <!--领导信箱-->
        <el-col :xs="24" :md="6" class="leader-mailbox">
          <div class="model-content">
            <div class="model-title">领导信箱</div>
            <table style="width: 100%;">
              <tr v-for="(item, i) in data.connect" :key="i">
                <td class="mailbox-td">{{ item.name }}</td>
                <td class="mailbox-td">{{ item.email }}</td>
              </tr>
            </table>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  <page-foot></page-foot>
</template>

<style scoped lang="less">
.hidden-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.article-content {
  height: var(--banner-height);
  background-color: aliceblue;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;

  .article-info {
    width: 100vw;
    overflow: hidden;
    background-color: #ffffffbd;
    position: absolute;
    bottom: 0;

    &>span:nth-child(1) {
      width: var(--page-width);
      .hidden-text();
      display: block;
      font-size: var(--title-size);
      font-weight: 300;
      color: #000000;
      -webkit-line-clamp: 1;
    }

    &>span:nth-child(2) {
      margin-top: 15px;
      display: block;
      color: #1f1f1f;
      font-size: 1rem;
      width: var(--page-width);
      .hidden-text();
      -webkit-line-clamp: 3;
      line-height: 1.5rem;
    }
  }
}

.home-main {
  width: var(--page-width);

  .current-affairs {
    min-height: 300px;
    margin-bottom: 10px;
  }

  .work-dynamics {
    min-height: 300px;
    margin-bottom: 10px;
  }

  .notice-publicity {
    min-height: 100px;
    margin-bottom: 10px;
  }

  .leader-mailbox {
    min-height: 100px;
    margin-bottom: 10px;
  }

  .model-content {
    width: calc(100% - 10px);
    height: 100%;
    margin: 0 auto;
    box-shadow: 0 2px 6px 0 rgba(37, 58, 43, 0.12);
  }

  .model-title {
    color: var(--primary-color);
    padding: 0 5px;
    font-size: large;
    line-height: 2rem;
    border-bottom: 3px solid var(--primary-color);

    &>span {
      float: right;
      color: var(--action-color);
      cursor: pointer;
    }
  }

  .list-content {
    width: calc(100% - 10px);
    margin: 0 5px;

    &>div {
      width: 100%;
      border-bottom: 1px solid #ececec;

      .title {
        display: block;
        float: left;
        line-height: 1.5rem;
        margin: 8px 0;
        width: 100%;
        font-size: 1.2rem;
        font-weight: 400;
        .hidden-text();
        -webkit-line-clamp: 1;
        color: #71757F;
      }

      .date-time {
        color: #252B3A;
        text-align: right;
        margin: 8px 0;
        line-height: 1.5rem;
      }
    }
  }

  .work-list {
    padding-bottom: 10px;

    .work-item {
      width: calc(100% - 10px);
      margin-top: 10px;
      box-shadow: 0 2px 6px 0 rgba(37, 58, 43, 0.12);
      border-radius: 4px;

      .item-image {
        width: 100%;
        height: 10rem;
      }

      &>span {
        display: block;
        font-size: 1rem;
        font-weight: 400;
        .hidden-text();
        -webkit-line-clamp: 3;
      }
    }
  }

  .mailbox-td {
    text-align: center;
    line-height: 2rem;
  }

  .notice-item {
    width: calc(100% - 10px);

    .title {
      width: 100%;
      font-size: 1.2rem;
      line-height: 1.5rem;
      .hidden-text();
      -webkit-line-clamp: 1;
    }

    .notice-content {
      font-size: 1rem;
      line-height: 1.2rem;
    }

    .notice-time {
      float: right;
      font-size: 0.8rem;
      color: var(--action-color);
      font-weight: 800;
    }
  }
}
</style>