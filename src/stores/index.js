import { createStore } from "vuex";
import { counterStore } from "./counter";
import { userStore } from "./user";
import {productStore} from "./product";

export const store = createStore({
  modules: {
    counterStore,
    userStore,
    productStore
  },
});