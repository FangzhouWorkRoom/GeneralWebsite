<script setup>
import { ref, computed } from 'vue';

const banners = ref([
  {
    backgroundImg: new URL('../assets/art1.png', import.meta.url).href,
    article: {
      title: '以学铸魂，筑牢对党忠诚的思想根基——老干部办离退休干部第九、十党支部开展主题党日活动',
      summary: `2021年7月1日早上七点多，市国资委行业老干部办全体党员干部、工作人员早早地来到电子阅览室翘首以待庆祝中国共产党成立100周年大会直播，离退休老同志们分别自行收看电视直播。
在北京天安门广场上空，空中护旗梯队悬挂党旗和巨幅标语飞过，拉开飞行庆祝表演序幕。直升机、战斗机分别组成“100”“71”字样掠过长空。15架歼-20飞机组成3个梯队呼啸而过，教练机拉出10道彩烟，彩烟`,
      url: '',
    }
  },
  {
    backgroundImg: new URL('../assets/art2.png', import.meta.url).href,
    article: {
      title: '铭嘱托 铸忠诚 强动力——老干部办离退休干部第十四党支部与煤矿联合党支部联合开展迎“七一”主题党日活动',
      summary: `2021年7月1日早上七点多，市国资委行业老干部办全体党员干部、工作人员早早地来到电子阅览室翘首以待庆祝中国共产党成立100周年大会直播，离退休老同志们分别自行收看电视直播。
在北京天安门广场上空，空中护旗梯队悬挂党旗和巨幅标语飞过，拉开飞行庆祝表演序幕。直升机、战斗机分别组成“100”“71”字样掠过长空。15架歼-20飞机组成3个梯队呼啸而过，教练机拉出10道彩烟，彩烟`,
      url: '',
    }
  },
  {
    backgroundImg: new URL('../assets/art3.png', import.meta.url).href,
    article: {
      title: '【专题报告】中央党史和文献研究院副院长黄一兵主讲：深入学习习近平新时代中国特色社会主义思想',
      summary: `2021年7月1日早上七点多，市国资委行业老干部办全体党员干部、工作人员早早地来到电子阅览室翘首以待庆祝中国共产党成立100周年大会直播，离退休老同志们分别自行收看电视直播。
在北京天安门广场上空，空中护旗梯队悬挂党旗和巨幅标语飞过，拉开飞行庆祝表演序幕。直升机、战斗机分别组成“100”“71”字样掠过长空。15架歼-20飞机组成3个梯队呼啸而过，教练机拉出10道彩烟，彩烟`,
      url: '',
    }
  }
])

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

const activeNotice = ref(1);

</script>

<template>
  <div class="home-page">
    <nav-menu></nav-menu>

    <!--最近五条新闻-->
    <el-carousel indicator-position="outside" :height="isMobile ? '15rem' : '35rem'">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <div class="article-content" :style="{ backgroundImage: `url(${item.backgroundImg})` }">
          <div class="article-info">
            <span>{{ item.article.title }}</span>
            <span class="hidden-sm-and-down">{{ item.article.summary }}</span>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="home-main">
      <el-row>
        <!--时政要闻-->
        <el-col :xs="24" :md="12" class="current-affairs">
          <div class="model-content">
            <div class="model-title">时政要闻<span>查看更多>></span></div>
            <div class="list-content">
              <el-row v-for="i in 15">
                <el-col :xs="24" :md="18" class="title">
                  铭嘱托 铸忠诚 强动力——老干部办离退休干部第十四党支部与煤矿联合党支部联合开展迎“七一”主题党日活动
                </el-col>
                <el-col :xs="24" :md="6" class="date-time">
                  2023-08-13 15:32:12
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>

        <!--工作动态-->
        <el-col :xs="24" :md="12" class="work-dynamics">
          <div class="model-content">
            <div class="model-title">工作动态<span>查看更多>></span></div>
            <el-row class="work-list">
              <el-col :xs="24" :md="12" v-for="i in 6">
                <div class="work-item">
                  <img src="@/assets/pg1.jpg" />
                  <span>铭嘱托 铸忠诚 强动力——老干部办离退休干部第十四党支部与煤矿联合党支部联合开展迎“七一”主题党日活动</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>

        <!--通知公示-->
        <el-col :xs="24" :md="18" class="notice-publicity">
          <div class="model-content">
            <div class="model-title">通知公示<span>查看更多>></span></div>
            <el-collapse v-model="activeNotice" accordion>
              <el-collapse-item :name="i" v-for="i in 5" class="notice-item">
                <template #title>
                  <div class="title" :style="{ color: activeNotice === i ? 'var(--primary-color)' : '#000000' }">
                    中央党史和文献研究院副院长黄一兵主讲：深入学习习近平新时代中国特色社会主义思想
                  </div>
                </template>
                <div class="notice-content">
                  2021年7月1日早上七点多，市国资委行业老干部办全体党员干部、工作人员早早地来到电子阅览室翘首以待庆祝中国共产党成立100周年大会直播，离退休老同志们分别自行收看电视直播。
                  在北京天安门广场上空，空中护旗梯队悬挂党旗和巨幅标语飞过，拉开飞行庆祝表演序幕。直升机、战斗机分别组成“100”“71”字样掠过长空。15架歼-20飞机组成3个梯队呼啸而过，教练机拉出10道彩烟，彩烟
                </div>
                <div class="notice-time">
                  2023-08-13 16:25:16
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-col>

        <!--领导信箱-->
        <el-col :xs="24" :md="6" class="leader-mailbox">
          <div class="model-content">
            <div class="model-title">领导信箱</div>
            <table style="width: 100%;">
              <tr v-for="i in 5">
                <td class="mailbox-td">钱书记</td>
                <td class="mailbox-td">qianzhongqing@zjshylgbb.com</td>
              </tr>
            </table>
          </div>
        </el-col>
      </el-row>
    </div>

    <page-foot></page-foot>
  </div>
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
  background-size: cover;
  padding-top: 2rem;

  .article-info {
    width: var(--page-width);

    &>span:nth-child(1) {
      .hidden-text();
      display: block;
      font-size: var(--title-size);
      background-color: #ffffff70;
      width: 96%;
      font-weight: 600;
      color: #000000;
      -webkit-line-clamp: 2;
    }

    &>span:nth-child(2) {
      display: block;
      color: #1f1f1f;
      font-size: 1rem;
      background-color: #ffffff70;
      width: 96%;
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
        -webkit-line-clamp: v-bind('titleRows');
      }

      .date-time {
        color: var(--action-color);
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

      &>img {
        width: 100%;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
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

  .mailbox-td{
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
}</style>