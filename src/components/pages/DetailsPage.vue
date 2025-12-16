<script>
import DeliveryIcon from "@/assets/icons/DeliveryIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import ReturnIcon from "@/assets/icons/ReturnIcon.vue";
import MainButton from "@/slots/MainButton.vue";
import PageHeader from "@/slots/PageHeader.vue";

export default {
  components: {
    PageHeader,
    HeartIcon,
    MainButton,
    DeliveryIcon,
    ReturnIcon,
  },
  data() {
    return {
      product: null,
      selectedSize: "M",
      sizes: ["XS", "S", "M", "L", "XL"],
      quantity: 1,
      showToast: false,
      toastMessage: "",
    };
  },
  created() {
    const id = Number(this.$route.query.productId);
    this.product = this.$store.getters["productStore/allProducts"].find(
      (p) => p.id === id
    );
  },
  computed: {
    wishlist() {
      return this.$store.getters["wishlistStore/wishlistItems"];
    },
    isInWishlist() {
      return this.product
        ? this.wishlist.some((item) => item.id === this.product.id)
        : false;
    },
  },
  methods: {
    toast(message) {
      this.toastMessage = message;
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    },

    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    increaseQuantity() {
      this.quantity++;
    },
    addToCart() {
      for (let i = 0; i < this.quantity; i++) {
        this.$store.dispatch("cartStore/appendToCart", this.product);
      }
      this.toast(`${this.quantity} item(s) added to cart`);
    },
    toggleWishlist() {
      this.$store.dispatch("wishlistStore/toggleWishlist", this.product);
      this.toast(
        this.isInWishlist
          ? "Item added to wishlist"
          : "Item removed from wishlist"
      );
    },
  },
};
</script>

<template>
  <main v-if="product" class="py-8 px-15">
    <div
      class="fixed top-0 left-0 w-full flex justify-center text-[#DB4444] bg-transparent text-center z-50"
    >
      <p
        class="bg-white px-6 py-4 rounded-lg shadow-lg w-90 mx-auto transform transition-all duration-300 ease-out"
        :class="
          showToast
            ? 'translate-y-6 opacity-100'
            : '-translate-y-full opacity-0'
        "
      >
        {{ toastMessage }}
      </p>
    </div>
    <PageHeader>
      <template #path>Home  / {{ product.category.charAt(0).toUpperCase() + product.category.slice(1)}}</template>
      <template #page>{{ product.title }}</template>
    </PageHeader>
    <div class="flex gap-15 mt-6">
      <section class="flex gap-6">
        <section class="grid grid-cols-1 gap-5 max-h-[600px] max-w-[55%]">
          <div
            class="p-2 bg-[#F5F5F5] w-[170px] h-[138px] flex justify-center items-center rounded-[4px]"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="w-[60%] rotate-45 object-contain"
            />
          </div>
          <div
            class="p-2 bg-[#F5F5F5] w-[170px] h-[138px] flex justify-center items-center rounded-[4px]"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="w-[60%] skew-10 object-contain"
            />
          </div>
          <div
            class="p-2 bg-[#F5F5F5] w-[170px] h-[138px] flex justify-center items-center rounded-[4px]"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="w-[60%] backface-visible object-contain"
            />
          </div>
          <div
            class="p-2 bg-[#F5F5F5] w-[170px] h-[138px] flex justify-center items-center rounded-[4px]"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="w-[60%] rotate-320 object-contain"
            />
          </div>
        </section>
        <div
          class="p-2 bg-[#F5F5F5] w-[500px] h-[610px] flex justify-center items-center rounded-[4px]"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="max-w-[60%] object-contain"
          />
        </div>
      </section>

      <section class="w-[400px] space-y-4">
        <h2 class="text-[24px] font-semibold">{{ product.title }}</h2>
        <div class="flex gap-2">
          <div>
            <span v-for="star in 5" :key="star" class="text-[#FFAD33]">
              {{ star <= Math.floor(product.rating?.rate || 0) ? "★" : "☆" }}
            </span>
          </div>
          <p class="text-black/50">({{ product.rating.count }} Reviews)</p>
          <p>|</p>
          <p class="text-[#00FF66]">In Stock</p>
        </div>
        <p class="text-[24px]">${{ product.price.toFixed(2) }}</p>
        <p class="text-sm">{{ product.description }}</p>
        <hr />
        <div class="flex items-center gap-4">
          <h4>Colours:</h4>
          <div class="size-5 bg-[#A0BCE0] rounded-full border-2"></div>
          <div class="size-5 bg-[#DB4444] rounded-full"></div>
        </div>
        <div class="flex items-center gap-4 mb-6">
          <h4 class="text-lg">Size:</h4>
          <div class="flex gap-3">
            <button
              v-for="size in sizes"
              :key="size"
              @click="selectedSize = size"
              :class="[
                'w-10 h-10 border rounded text-sm font-medium transition',
                selectedSize === size
                  ? 'bg-[#DB4444] text-white border-[#DB4444]'
                  : 'border-black/50 hover:border-gray-400',
              ]"
            >
              {{ size }}
            </button>
          </div>
        </div>
        <div class="flex items-center gap-4 mb-6">
          <div class="flex items-center border border-gray-300 rounded">
            <button
              @click="decreaseQuantity"
              class="w-10 h-12 hover:bg-gray-100 transition cursor-pointer"
            >
              −
            </button>
            <div
              class="w-16 h-12 flex items-center justify-center border-x border-gray-300 font-medium"
            >
              {{ quantity }}
            </div>
            <button
              @click="increaseQuantity"
              class="w-[40px] h-[48px] bg-[#DB4444] text-white cursor-pointer"
            >
              +
            </button>
          </div>
          <MainButton @click="addToCart" class="flex-1 h-12 font-medium">
            Buy Now
          </MainButton>
          <div
            @click="toggleWishlist"
            :class="[
              'w-12 h-12 border border-gray-300 rounded bg-white size-8 flex justify-center items-center cursor-pointer transition-colors duration-200',
              isInWishlist ? 'text-red-500' : 'text-white hover:text-red-500',
            ]"
          >
            <HeartIcon />
          </div>
        </div>

        <section class="border">
          <div class="flex px-4 items-center gap-4 w-[399px] h-[90px] border-b">
            <DeliveryIcon />
            <span>
              <p>Free Delivery</p>
              <p class="text-xs underline">
                Enter your postal code for Delivery Availability
              </p>
            </span>
          </div>
          <div class="flex px-4 items-center gap-4 w-[399px] h-[90px]">
            <ReturnIcon />
            <span>
              <p>Return Delivery</p>
              <p class="text-xs">
                Free 30 Days Delivery Returns.
                <span class="underline">Details</span>
              </p>
            </span>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
