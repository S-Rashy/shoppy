export const cartStore = {
  namespaced: true,
  state() {
    return {
      cart: [],
    };
  },

  getters: {
    cartItems(state) {
      return state.cart;
    },

    cartCount(state) {
      return state.cart.reduce((sum, item) => sum + item.qty, 0);
    },

    cartTotal(state) {
      return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    },
  },

  mutations: {
    addToCart(state, product) {
      state.cart.push({ ...product, qty: 1 });
    },
    increaseQty(state, id) {
      const cartItem = state.cart.find((item) => item.id === id);
      if (cartItem) cartItem.qty++;
    },
    decreaseQty(state, id) {
      const cartItem = state.cart.find((item) => item.id === id);
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty--;
      } else {
        state.cart = state.cart.filter((item) => item.id !== id);
      }
    },
    removeFromCart(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    clearCart(state) {
      state.cart = [];
    },
  },

  actions: {
    appendToCart({ state, commit }, product) {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        commit("increaseQty", product.id);
      } else {
        commit("addToCart", product);
      }
    },
  },
};
