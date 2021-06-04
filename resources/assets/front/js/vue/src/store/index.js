import Vue from 'vue';
import Vuex from 'vuex';
import rootActions from './rootActions';
import rootGetters from './rootGetters';
import coursesModule from './courses';
import locationsModule from './locations';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: rootActions,
  getters: rootGetters,
  modules: {
    courses: coursesModule,
    locations: locationsModule,
  },
});
