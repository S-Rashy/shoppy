<script>
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import MainButton from "@/slots/MainButton.vue";
import PageHeader from "@/slots/PageHeader.vue";

export default {
  // async mounted() {
  //   const id = this.$route.query.productId;
  //   const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //   const data = await response.json();
  //   this.product = data;

  //   // console.log(this.$route);
  // },
  components: {
    PageHeader,
    HeartIcon,
    MainButton
  },
  data() {
    return {
      product: null,
      selectedSize: "M",

      sizes: ["XS", "S", "M", "L", "XL"],
      quantity: 1,
    };
  },
  created() {
    const id = Number(this.$route.query.productId);

    this.product = this.$store.getters["productStore/allProducts"].find(
      (p) => p.id === id
    );
  },
  methods: {
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    increaseQuantity() {
      this.quantity++;
    },
  },
};
</script>

<template>
  <main v-if="product" class="p-12">
    <PageHeader>
      <template #path>Home/ {{ product.category }}</template>
      <template #page>{{ product.title }}</template>
    </PageHeader>
    <div class="flex gap-15">
      <section class="flex gap-6">
        <section class="grid grid-cols-1 gap-5 max-w-[55%]">
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
              class="w-10 h-12 flex items-center justify-center hover:bg-gray-100 transition"
            >
              −
            </button>
            <div
              class="w-16 h-12 flex items-center justify-center border-x border-gray-300 font-medium"
            >
              {{ quantity }}
            </div>
            <MainButton
              @click="increaseQuantity"
              class="w-[40px] h-[48px]"
            >
              +
            </MainButton>
          </div>
          <!-- @click="buyNow" -->
          <MainButton
            class="flex-1 h-12 font-medium"
          >
            Buy Now
          </MainButton>
          <!-- @click="addToWishlist" -->
          <button
            class="w-12 h-12 border border-gray-300 text-white rounded flex items-center justify-center hover:bg-gray-100 transition"
          >
            <HeartIcon />
          </button>
        </div>
      
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
