import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import store from './store.js'

export default new Vuex.Store ({
  modules: {
    store
  }
})