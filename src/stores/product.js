import Coat from "@/assets/coat.svg";
import Bag from "@/assets/bag.svg";
import Cooler from "@/assets/cooler.svg";
import Shelf from "@/assets/shelf.svg";

export const productStore = {
  namespaced: true,
  state() {
    return {
      products: [],
       moreProducts: [
        { id: 21, title: "The north coat", price: 260, discount: 40, image: Coat, category: "men's clothing", rating: { rate: 5, count: 65,} },
        { id: 22, title: "Gucci duffle bag", price: 1160, discount: 35, image: Bag, category: "women's clothing", rating:{ rate: 4.5, count: 65,} },
        { id: 23, title: "RGB liquid CPU Cooler", price: 170, discount: 30, image: Cooler, category: "phones", rating:{ rate: 4.5, count: 65} },
        { id: 24, title: "Small Bookshelf", price: 360, discount: 25, image: Shelf, category: "household", rating:{ rate: 5, count: 99 }},
      ]
    };
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts({ commit, state }) {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const fetchedProducts = await response.json();
        const totalProducts = [...state.moreProducts, ...fetchedProducts];
        commit("setProducts", totalProducts);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
  },
};
