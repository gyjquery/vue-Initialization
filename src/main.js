// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import store from './store/system'
import '../mock/mockServer'
import rem from '../static/js/rem'
rem()
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
