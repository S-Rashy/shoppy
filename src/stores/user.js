export const userStore = {
  namespaced: true,
  state() {
    return {
      user: JSON.parse(localStorage.getItem("userData")) || null,
    };
  },
  getters: {
    getFirstName(state) {
      return state.user?.firstName;
    },
    isLoggedIn(state) {
      return state.user?.isLoggedIn;
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    setUser({ commit }, firstname) {
      const userData = {
        isLoggedIn: true,
        firstName: firstname,
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      commit("updateUser", userData);
    },
    logoutUser({commit}) {
      localStorage.removeItem("userData");
      commit("updateUser", null);
      console.log("user out");
    },
  },
};
