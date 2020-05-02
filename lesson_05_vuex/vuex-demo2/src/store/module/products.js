import shop from '@/api/shop'
import { PRODUCTS } from './mutation_type'
const state = {
  all: []
}

const getters = {}

const mutations = {
  [PRODUCTS.SET_PRODUCTS](state, products) {
    state.all = products
  },
  [PRODUCTS.DECREMENT_PRODUCT_INVENTORY](state, { id }) {
    const product = state.all.find(item => item.id === id)
    product.inventory--
  }
}

const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit(PRODUCTS.SET_PRODUCTS, products)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}