import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // 按照规范 ， mutations 中是同步操作。 但是异步操作也可以执行。
    increment(state) {
      state.count++
    }
  },
  actions: {
    //  actions 中可以操作的是异步数据
    incre({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },
  getters: {
    // 类似于计算属性，起到了一个缓存的作用，
    doubleCount(state) {
      return state.count * 2
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
