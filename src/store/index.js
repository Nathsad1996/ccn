import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const state = {
  isRegistry: false,
  cartcount: 0,
  cartproducts: []
}

const mutations = {
  SET_REGISTRY(state, value) {
    state.isRegistry = value;
  },
  SET_CARTCOUNT(state) {
    state.cartcount++;
  }
}

const actions = {
  setRegistry({
    commit
  }, value) {
    commit("SET_REGISTRY", value);
  },
  setCartCount({
    commit
  }) {
    commit("SET_CARTCOUNT");
  }
}

const getters = {
  registry: state => {
    return state.isRegistry;
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  modules: {},
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})