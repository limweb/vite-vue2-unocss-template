import Vue from 'vue';
import Vuex from 'vuex';
import toast from './moduleToast';
import dialog from './moduleDialog';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg:'Hello World',
  },

  mutations: {
  },

  actions: {
  },

  modules: {
    toast,
    dialog,
  },
});
