<script>
import EyeIcon from "@/assets/icons/EyeIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";

export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    HeartIcon,
    EyeIcon,
  },
  computed: {
    isInWishlist() {
      return this.$store.getters["wishlistStore/wishlistItems"].some(
        (item) => item.id === this.product.id
      );
    },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("cartStore/appendToCart", product);
    },

   toggleWishlist(product) {
      this.$store.dispatch("wishlistStore/toggleWishlist", product);
    },
  },
};
</script>

<template>
  <main>
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

      <div class="flex justify-end px-4 relative z-10">
        <div class="flex flex-col gap-1 items-center">
          <div
            :class="[
              'rounded-[50%] bg-white size-8 flex justify-center items-center cursor-pointer transition-colors duration-200',
              isInWishlist ? 'text-red-500' : 'text-white hover:text-red-500',
            ]"
            @click="toggleWishlist(product)"
          >
            <HeartIcon />
          </div>

          <div
            class="rounded-[50%] bg-white size-8 flex justify-center items-center cursor-pointer hover:text-red-500 transition-colors duration-200"
          >
            <EyeIcon />
          </div>
        </div>
      </div>

      <button
        class="bg-black text-white h-[41px] w-[270px] rounded-b-[4px] cursor-pointer translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out mx-auto relative z-10"
        @click="addToCart(product)"
      >
        Add to Cart
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
      
      <div class="flex items-center gap-2">
        <div class="flex gap-1">
          <span v-for="star in 5" :key="star" class="text-[#FFAD33]">
            {{ star <= Math.floor(product.rating?.rate || 0) ? '★' : '☆' }}
          </span>
        </div>
        <span class="text-sm text-black/50">({{ product.rating?.count || 0 }})</span>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped></style>
