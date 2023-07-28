import NavMenu from '@/components/NavMenu.vue';
import PageFoot from '@/components/PageFoot.vue';

const elements = {
  NavMenu,
  PageFoot,
}

export default {
  install: (app) => {
    Object.keys(elements).map(key => {
      app.component(key, elements[key]);
    })
  }
}