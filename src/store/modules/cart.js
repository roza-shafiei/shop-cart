export default {
  namespaced: true,
  state() {
    return {
      cartItems: [],
    }
  },
  getters: {
    totalItems(state) {
      return state.cartItems.length
    },
    sumCart(state, getters) {
      const cartLength = getters.totalItems
      let sum = 0
      if (cartLength) {
        for (let i = 0; i < cartLength; i++) {
          sum += state.cartItems[i].price * state.cartItems[i].quantity
        }
      }
      return sum.toFixed(2)
    },
    allCartItems(state) {
      return state.cartItems
    },
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const item = { ...payload, quantity: 1 }
      const filterItem = state.cartItems.filter((item) => {
        return item.id === payload.id
      })
      if (filterItem.length > 0) {
        const selectedIndex = state.cartItems.findIndex((item) => {
          return item.id === payload.id
        })
        state.cartItems[selectedIndex].quantity++
      } else {
        state.cartItems.push(item)
      }
    },
    REMOVE_ITEM(state, payload) {
      const selectedIndex = state.cartItems.findIndex((item) => {
        return item.id === payload.id
      })
      state.cartItems[selectedIndex].quantity--
      if (state.cartItems[selectedIndex].quantity === 0) {
        state.cartItems.splice(selectedIndex, 1)
      }
    },
  },
}
