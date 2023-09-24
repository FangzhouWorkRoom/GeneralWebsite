<template>
  <nav-menu></nav-menu>
  <div class="article-list-page">
    <div class="article-list-head" :style="{ backgroundImage: `url(${columnData.cover_img}`}">
      <div>
        <span>{{ columnData.name }}</span>
        <span>{{ columnData.description }}</span>
      </div>
    </div>
    <div class="article-list-main">
      <el-row>
        <el-col :xs="24" :md="16" style="margin: 0;">
          <el-row>
            <el-col :xs="24" :md="12" v-for="(hot, index) in hotArticle" :key="index" @click="openUrl(hot)">
              <div class="article-list-item">
                <div>
                  <el-row>
                    <el-col :xs="7" :md="12">
                      <el-image :src="hot.cover_img" class="item-image" fit="cover"></el-image>
                    </el-col>
                    <el-col :xs="17" :md="12">
                      <div class="article-list-item-title">{{ hot.title }}</div>
                      <div class="article-list-item-time">{{ hot.create_datetime }}</div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :md="8" class="article-list" v-loading="loading">
          <div>
            <el-input v-model="search.title" size="large">
              <template #append>
                <el-icon color="#5e7ce0" @click="searchArticle">
                  <Search></Search>
                </el-icon>
              </template>
            </el-input>
          </div>
          <div v-for="(article, index) in articleList" :key="index" class="article-list-simple" @click="openUrl(article)">
            <span class="title">{{ article.title }}</span>
          </div>
          <div class="pagination">
            <el-pagination background layout="total, prev, pager, next" :current-page="search.page" :total="total" @current-change="pageChange">
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  <page-foot></page-foot>
</template>

<script setup>
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import { ref, onMounted } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { inject } from 'vue';
import { about } from '@/api/data';
import { get } from '@/api/public';

const route = useRoute();
const router = useRouter();
const columnData = ref(route.meta.columnData);

const articleList = ref([]);
const hotArticle = ref([]);
const total = ref(0);
const loading = ref(true);

onMounted(async () => {
  await queryList();
  getHortArticle();
})

const search = ref({
  page: 1,
  limit: 10,
})

async function queryList() {
  loading.value = true;
  const params = {
    page: search.value.page,
    limit: search.value.limit,
    title: search.value.title,
    article_class: columnData.value.model_key,
  }

  let res = await get('/api/wx_cms/article/pub_article/', params);
  articleList.value = res.data.data.data;
  total.value = res.data.data.total;
  loading.value = false;
  return;
}

function getHortArticle() {
  hotArticle.value = articleList.value.slice(0, 6);
}

function pageChange(pageNum) {
  search.value.page = pageNum;
  queryList();
}

function searchArticle() {
  search.value.page = 1;
  queryList();
}

onBeforeRouteLeave(async (to, from) => {
  if (to.meta?.columnData?.model_key) {
    columnData.value = to.meta.columnData;
    await queryList();
    getHortArticle();
  }
})

function openUrl(row) {
  if (row.source === 1) {
    window.open(row.url, '_blank');
  } else {
    window.open(`/article/${row.id}`, '_blank');
  }
}

const globalData = inject('globalData');
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
      -webkit-line-clamp: 2;
    }
  }
}

.article-list-main {
  min-height: 350px;
  width: var(--page-width);
  margin: 10px auto;
  text-align: left;

  .article-list-item {
    width: calc(100% - 30px);
    height: var(--article-list-item-height);
    box-shadow: 0 2px 6px 0 rgba(37, 43, 58, 0.12);
    margin: 0.2rem 8px;
    border-radius: 4px;
    padding: 7px;
    position: relative;
    cursor: pointer;

    .article-list-item-title {
      .hidden-text();
      -webkit-line-clamp: var(--article-title-rows);
      line-height: 1.5rem;
      font-size: 1.2rem;
      height: 4.5rem;
    }

    .article-list-item-time {
      position: absolute;
      bottom: 0;
      color: #5e7ce0;
      line-height: 2rem;
    }

    .item-image {
      height: var(--article-img-width);
      width: var(--article-img-width);
    }
  }
}

.article-list {
  box-shadow: 0 6px 12px 0 rgba(37, 43, 58, 0.12);
  padding: 0.5rem;
  height: 635px;
  position: relative;

  .pagination {
    position: absolute;
    bottom: 5px;
    width: calc(100% - 20px);
    height: 45px;
  }
}

.article-list-simple {
  width: 100%;
  border-bottom: 1px solid #ececec;
  cursor: pointer;

  &>span {
    display: block;
    overflow: hidden;
    line-height: 3rem;
    font-size: 1.2rem;
    .hidden-text();
    -webkit-line-clamp: 1;
  }
}
</style>