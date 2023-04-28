import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataProduct: [],
    dataDetailProduct: []
  },
  getters: {
  },
  mutations: {
    addDataProduct(state, payload){
      state.dataProduct.push(payload);
    },
    addDataDetailProduct(state, payload){
      state.dataDetailProduct.push(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
