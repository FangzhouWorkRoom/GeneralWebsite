<template>
  <div style="height: 80px;"></div>
  <div class="wap" ref="navMenuRef" @mouseleave="closeSubMenu">
    <el-row class="nav-menu-content">
      <el-col :span="3" class="hidden-sm-and-up">
        <el-icon style="margin: 30px 0 0 10px;" :size="20" @click="openMobileMenu">
          <Expand></Expand>
        </el-icon>
      </el-col>
      <el-col :xs="21" :lg="6" class="site-name">镇江市行业老干部管理服务办公室</el-col>
      <el-col :span="18" class="hidden-sm-and-down">
        <div class="nav-menu">
          <div class="menu-item" v-for="(item, index) in pageList" :key="index">
            <span @mouseenter="extendSubMenu(item)" @click="navgetTo(item, item)" :class="isActiveMenu(item) ? 'active-menu' : ''">{{ item.name }}</span>
            <div class="sub-menu" v-if="currentAcctive === item.web_path">
              <span v-for="(subMenu, i) in item.children" :key="i" @click="navgetTo(subMenu, item)">{{ subMenu.name }}</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <el-drawer v-model="showMobileMenu" :with-header="false" direction="ltr" size="60%">
    <el-menu default-active="/" class="el-menu-vertical-demo" router>
      <template v-for="(menu, i) in pageList" :key="i">
        <el-menu-item v-if="menu.is_router" :index="menu.web_path">{{ menu.name }}</el-menu-item>
        <el-sub-menu v-else :index="menu.web_path">
          <template #title>
            {{ menu.name }}
          </template>
          <el-menu-item v-for="(subMenu, i) in menu.children" :key="i" :index="subMenu.web_path">{{ subMenu.name }}</el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-drawer>
</template>

<script setup>
import { ref, computed, onMounted, nextTick} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Expand } from '@element-plus/icons-vue';

const showMobileMenu = ref(false);
const navMenuRef = ref(null);
const currentAcctive = ref('');
const currenUrl = ref('');
const router = useRouter();
const route = useRoute();
const pageList = JSON.parse(localStorage.getItem('pageList'));

function openMobileMenu() {
  showMobileMenu.value = true;
}

const isActiveMenu = computed({
  get() {
    return function (item) {
      return item.web_path === currenUrl.value;
    }
  }
})

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

function extendSubMenu(menu) {
  currentAcctive.value = menu.web_path;
  if (menu.children.length) navMenuRef.value.style.height = '350px';
}

function closeSubMenu() {
  navMenuRef.value.style.height = '80px';
}

function navgetTo(menu, patch) {  
  if (menu.is_router) {
    router.push({ path: menu.web_path });
    nextTick(() => {getCurrentUrl(patch)});
  }
  navMenuRef.value.style.height = '80px';
}

function getCurrentUrl(patch = {}) {
  let url = patch?.web_path ?? window.location.pathname;
  currenUrl.value =  url.match(/\/[a-zA-Z_-]*/g)[0];
}

onMounted(() => {
  getCurrentUrl();
})
</script>

<style lang="less" scoped>
.wap {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: #ffffff;
  color: #000000;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(37, 43, 58, 0.16);
  transition: height 0.3s;
  position: fixed;
  top: 0;
  z-index: 10;

}

.nav-menu-content {
  width: var(--page-width);
  height: 80px;

  .site-name {
    font-size: 1.2rem;
    color: #a10808;
    font-weight: 600;
  }

  .hidden-sm-and-down {
    .nav-menu {
      float: right;

      .active-menu {
        border-bottom: 0.2rem solid #5e7ce0;
        font-size: large;
      }

      .menu-item {
        width: 150px;
        cursor: pointer;
        text-align: center;
        float: left;

        &>span {
          line-height: 3rem;
          padding: 0 1rem;
          display: inline-block;
        }

        &>span:hover {
          border-bottom: 0.2rem solid #5e7ce0;
          font-size: large;
        }

        .sub-menu {
          width: 100%;

          &>span {
            display: block;
            text-align: center;
            line-height: 2.5rem;
          }

          &>span:hover {
            font-size: larger;
            font-weight: 600;
            color: #5e7ce0;
          }
        }
      }
    }
  }
}

.el-menu-vertical-demo {
  height: 100%;
  width: calc(60vw - 30px);
  border-right: none;
}</style>