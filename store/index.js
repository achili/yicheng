import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      sss222: 'xxx'
    }
  })
}

export default createStore
