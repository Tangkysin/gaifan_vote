import Vue from "vue";
import Vuex from "vuex";

import votedata from "./votedata";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

const store = new Vuex.Store({
  modules: {
    votedata
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
});

export default store;
