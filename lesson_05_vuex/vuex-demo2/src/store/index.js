import Vue from 'vue'
import Vuex from 'vuex'
import cart from './module/cart'
import products from './module/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      email: 'xxxxxx@gmail.com'
    }
  },
  modules: {
    cart,
    products
  }

})