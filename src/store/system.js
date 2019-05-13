/* eslint-disable */
/**
 * @file index.html
 */
import Vue from 'vue';
import Vuex from 'vuex';
import organizationalManagement from '@/pages/Home/store.js';
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
      organizationalManagement
    }
});
