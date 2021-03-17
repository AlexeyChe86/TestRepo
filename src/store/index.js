import Vue from 'vue'
import Vuex from 'vuex'
import getData from './modules/get_data'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    getData
  }
})
