<script>
import CartIcon from "@/assets/icons/CartIcon.vue";
import DeleteIcon from "@/assets/icons/DeleteIcon.vue";
import WButton from "@/slots/WButton.vue";

export default {
  components: {
    DeleteIcon,
    WButton,
    CartIcon,
  },
  computed: {
    wishlist() {
      return this.$store.getters["wishlistStore/wishlistItems"];
    },
    wishlistLength() {
      return this.$store.getters["wishlistStore/wishlistCount"];
    },
  },
  methods: {
    deleteItem(id) {
      return this.$store.commit("wishlistStore/removeFromWishlist", id);
    },
    addToCart(product) {
      this.$store.dispatch("cartStore/appendToCart", product);
    },
  },
};
</script>

<template>
  <main class="px-15 py-12">
    <div class="flex justify-between my-6">
      <h3 class="text-[20px]">Wishlist ({{ wishlistLength }})</h3>
      <WButton v-if="wishlistLength > 0"> Move All To Bag</WButton>
    </div>

    <section class="grid grid-cols-4 gap-6 mx-auto">
      <div v-for="product in wishlist" :key="product.id">
        <div
          class="h-[250px] bg-[#F5F5F5] rounded-[4px] pt-4 flex flex-col justify-between relative overflow-hidden group"
        >
          <RouterLink
            :to="{
              path: '/product',
              query: {
                category: product.category,
                productId: product.id,
                name: product.title,
              },
            }"
            class="absolute inset-0 flex justify-center items-center p-4"
          >
            <img
              :src="product.image"
              alt=""
              class="max-h-full max-w-full object-contain"
            />
          </RouterLink>
          <div
            class="flex justify-end px-4 relative z-10 cursor-pointer"
            @click="deleteItem(product.id)"
          >
            <DeleteIcon />
          </div>
          <button
            class="bg-black text-white h-[41px] w-[270px] rounded-b-[4px] flex items-center justify-center gap-4 cursor-pointer transition-all duration-300 ease-out mx-auto relative z-10"
            @click="addToCart(product)"
          >
            <CartIcon />Add to Cart
          </button>
        </div>
        <div class="my-4 flex flex-col gap-2">
          <h4 class="font-medium truncate">{{ product.title }}</h4>
          <p class="text-[#DB4444]">
            ${{ (product.price - product.price * 0.1).toFixed(2) }}
            <span class="line-through text-black/50 ml-2">
              ${{ product.price.toFixed(2) }}
            </span>
          </p>
        </div>
      </div>
    </section>
    <p v-if="wishlistLength <= 0" class="text-center"> No items have been added to your wishlist</p>
  </main>
</template>

<style lang="scss" scoped></style>
