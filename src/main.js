// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入element ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 使用element ui
Vue.use(ElementUI);
Vue.config.productionTip = false
import '../static/font-icon/iconfont.css';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
