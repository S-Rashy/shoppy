import { createStore } from "vuex";
import { counterStore } from "./counter";
import { userStore } from "./user";
import {productStore} from "./product";
import { cartStore } from "./cart";
import { wishlistStore } from "./wishlist";

export const store = createStore({
  modules: {
    counterStore,
    userStore,
    productStore,
    cartStore,
    wishlistStore
  },
});