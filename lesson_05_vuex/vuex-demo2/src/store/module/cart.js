import shop from '@/api/shop'
import { CART, PRODUCTS } from './mutation_type'

const state = {
  items: [],
  checkoutState: null
}

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const actions = {
  checkout({ state, commit }, products) {
    const savedCartItems = [...state.items] // 等同于 [item1,item2,item3...] 把 items 中的所有元素以 逗号 分开。
    commit(CART.SET_CHECKOUT_STATUS, null)
    commit(CART.SET_CART_ITEMS, { items: [] })
    shop.buyProducts(
      products,
      () => commit(CART.SET_CHECKOUT_STATUS, 'successful'),
      () => {
        commit(CART.SET_CHECKOUT_STATUS, 'failed')
        commit(CART.SET_CART_ITEMS, savedCartItems)
      }
    )
  },

  addProductToCart({ state, commit }, product) {
    commit(CART.SET_CHECKOUT_STATUS, null)
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit(CART.PUSH_PRODUCT_TO_CART, { id: product.id })
      } else {
        commit(CART.INCREMENT_ITEM_QUANTITY, cartItem)
      }

      commit(`products/${PRODUCTS.DECREMENT_PRODUCT_INVENTORY}`, { id: product.id }, { root: true })
    }
  }
}

const mutations = {
  
  [CART.SET_CHECKOUT_STATUS](state, status) {
    state.checkoutState = status
  },

  [CART.SET_CART_ITEMS](state, { items }) {
    state.items = items
  },

  [CART.PUSH_PRODUCT_TO_CART](state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  [CART.INCREMENT_ITEM_QUANTITY](state, product) {
    const item = state.items.find(item => item.id === product.id)
    item.quantity++
  }

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}