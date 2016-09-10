'using strict';
import Vue from 'vue'
import VueRouter from 'vue-router'
import Mobile from './navigation/mobileNaviagtion'
import Scroll from './scroll/scroll'
import Demo from './demo-list'

Vue.use(VueRouter);

var App = Vue.extend({
  components: {
    Demo
  }
});

var router = new VueRouter();

router.map({
  '/mobile': {
    name: 'mobile',
    component: Mobile
  },
  '/scroll': {
    name: 'scroll',
    component: Scroll
  },
  '/': {
    name: 'demo',
    component: Demo
  }
});

router.start(App, '#app');