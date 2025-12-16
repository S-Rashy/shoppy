import Coat from "@/assets/coat.svg";
import Bag from "@/assets/bag.svg";
import Cooler from "@/assets/cooler.svg";
import Shelf from "@/assets/shelf.svg";
import Gamepad from "@/assets/GamePad.svg";
import Keyboard from "@/assets/Keyboard.svg";
import Monitor from "@/assets/Monitor.svg";
import Chair from "@/assets/Chair.svg";

export const productStore = {
  namespaced: true,
  state() {
    return {
      products: [],
       moreProducts: [
        { id: 21, title: "The north coat", price: 260, discount: 40, image: Coat, category: "men's clothing", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt officia tempora consectetur expedita itaque tenetur quidem ipsum corrupti magni architecto veritatis odit sapiente, recusandae totam exercitationem? Ut, placeat quam!", rating: { rate: 5, count: 65,} },
        { id: 22, title: "Gucci duffle bag", price: 1160, discount: 35, image: Bag, category: "women's clothing",  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt officia tempora consectetur expedita itaque tenetur quidem ipsum corrupti magni architecto veritatis odit sapiente, recusandae totam exercitationem? Ut, placeat quam!", rating:{ rate: 4.5, count: 65,} },
        { id: 23, title: "RGB liquid CPU Cooler", price: 170, discount: 30, image: Cooler, category: "phones",  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt officia tempora consectetur expedita itaque tenetur quidem ipsum corrupti magni architecto veritatis odit sapiente, recusandae totam exercitationem? Ut, placeat quam!", rating:{ rate: 4.5, count: 65} },
        { id: 24, title: "Small Bookshelf", price: 360, discount: 25, image: Shelf, category: "household", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt officia tempora consectetur expedita itaque tenetur quidem ipsum corrupti magni architecto veritatis odit sapiente, recusandae totam exercitationem? Ut, placeat quam!", rating:{ rate: 5, count: 99 }},
        { id: 25, title: "HAVIT HV-G92 Gamepad", price: 160, discount: 40, image: Gamepad, category: "gaming", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt officia tempora consectetur expedita itaque tenetur quidem ipsum corrupti magni architecto veritatis odit sapiente, recusandae totam exercitationem? Ut, placeat quam!", rating:{ rate: 5, count: 88} },
        { id: 26, title: "AK-900 Wired Keyboard", price: 1160, discount: 35, image: Keyboard, category: "computer",  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt officia tempora consectetur expedita itaque tenetur quidem ipsum corrupti magni architecto veritatis odit sapiente, recusandae totam exercitationem? Ut, placeat quam!", rating:{ rate: 4, count: 75 }},
        { id: 27, title: "IPS LCD Gaming Monitor", price: 400, discount: 30, image: Monitor, category: "computer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt officia tempora consectetur expedita itaque tenetur quidem ipsum corrupti magni architecto veritatis odit sapiente, recusandae totam exercitationem? Ut, placeat quam!", rating:{ rate: 5, count: 99 }},
        { id: 28, title: "S-Series Comfort Chair ", price: 400, discount: 25, image: Chair, category: "household", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt officia tempora consectetur expedita itaque tenetur quidem ipsum corrupti magni architecto veritatis odit sapiente, recusandae totam exercitationem? Ut, placeat quam!", rating:{ rate: 4.5, count: 99,}},
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
