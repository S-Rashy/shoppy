import { createStore } from "vuex";
import { counterStore } from "./counter";
import { userStore } from "./user";

export const store = createStore({
  modules: {
    counterStore,
    userStore,
  },
});