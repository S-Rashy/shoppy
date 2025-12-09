export const wishlistStore = {
  namespaced: true,
  state() {
    return {
      wishlist: [],
    };
  },
  getters: {
    wishlistItems(state) {
      return state.wishlist;
    },
    wishlistCount(state) {
      return state.wishlist.length;
    },
  },
  mutations: {
    addToWishlist(state, product) {
      state.wishlist.push({ ...product });
    },
    removeFromWishlist(state, id) {
      state.wishlist = state.wishlist.filter((item) => item.id !== id);
    },
  },
  actions: {
    updateWishlist({ state, commit }, product) {
      const existingItem = state.wishlist.find(
        (item) => item.id === product.id
      );
      if (!existingItem) {
        commit("addToWishlist", product);
      }
    },
  },
};
