import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const SHOWDIALOG = "SHOWDIALOG";
const NEWSINFO = "NEWSINFO";
export default new Vuex.Store({
  state: {
    showDialog: false,
    newsState: []
  },
  mutations: {
    [SHOWDIALOG](state, show) {
      state.showDialog = show;
    },
    [NEWSINFO](state, newsSource) {
      state.newsState = newsSource;
    }
  },
  actions: {},
  modules: {}
});
