<script>
import ArrowLeft from "@/assets/icons/ArrowLeft.vue";
import ArrowRight from "@/assets/icons/ArrowRight.vue";
import HomeSection from "@/slots/HomeSection.vue";

import HeartIcon from "@/assets/icons/HeartIcon.vue";
import EyeIcon from "@/assets/icons/EyeIcon.vue";
import MainButton from "@/slots/MainButton.vue";
import ProductCard from "./ProductCard.vue";

export default {
  components: {
    HomeSection,
    ArrowLeft,
    ArrowRight,
    HeartIcon,
    EyeIcon,
    MainButton,
    ProductCard,
  },
  created() {
    this.$store.dispatch("productStore/fetchProducts");
    this.timer = setInterval(() => {
      if (this.totalSeconds > 0) {
        this.totalSeconds--;
      }
    }, 1000);
  },
  data() {
    return {
      totalSeconds: 269200,
      timer: null,
    };
  },
  computed: {
    getProducts() {
      return this.$store.state.productStore.products.slice(4, 8);
    },
    days() {
      return Math.floor(this.totalSeconds / 86400);
    },
    hours() {
      return Math.floor((this.totalSeconds % 86400) / 3600);
    },
    minutes() {
      return Math.floor((this.totalSeconds % 3600) / 60);
    },
    seconds() {
      return this.totalSeconds % 60;
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    padZero(num) {
      return num.toString().padStart(2, "0");
    },
  },
};
</script>
<template>
  <HomeSection class="border-b border-black/30">
    <template #title> Today's </template>

    <template #details>
      <div class="flex items-center gap-25">
        <h3 class="text-3xl font-semibold tracking-[4px]">Flash Sales</h3>
        <section class="flex items-end gap-3">
          <div class="flex flex-col items-start w-10">
            <p class="text-xs">Days</p>
            <h3 class="text-2xl font-bold tracking-[4px]">
              {{ padZero(days) }}
            </h3>
          </div>
          <p class="text-2xl font-bold text-[#E07575]">:</p>
          <div class="flex flex-col items-start w-10">
            <p class="text-xs">Hours</p>
            <h3 class="text-2xl font-bold tracking-[4px]">
              {{ padZero(hours) }}
            </h3>
          </div>
          <p class="text-2xl font-bold text-[#E07575]">:</p>
          <div class="flex flex-col items-start w-10">
            <p class="text-xs">Minutes</p>
            <h3 class="text-2xl font-bold tracking-[4px]">
              {{ padZero(minutes) }}
            </h3>
          </div>
          <p class="text-2xl font-bold text-[#E07575]">:</p>
          <div class="flex flex-col items-start w-10">
            <p class="text-xs">Seconds</p>
            <h3 class="text-2xl font-bold tracking-[4px]">
              {{ padZero(seconds) }}
            </h3>
          </div>
        </section>
      </div>
      <div class="flex items-center gap-4">
        <div
          class="rounded-[50%] bg-gray-200 size-10 flex justify-center items-center cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
        >
          <ArrowLeft class="" />
        </div>
        <div
          class="rounded-[50%] bg-gray-200 size-10 flex justify-center items-center cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
        >
          <ArrowRight class="" />
        </div>
      </div>
    </template>

    <section class="grid grid-cols-4 gap-6">
      <ProductCard
        v-for="(product, index) in getProducts"
        :key="index"
        :product="product"
        :showDiscount="true"
      />
    </section>

    <div class="flex my-10 justify-center">
      <RouterLink to="/allProducts" class="flex my-10 justify-center">
        <MainButton class="w-[234px] h-[56px]"> View All Products </MainButton>
      </RouterLink>
     
    </div>
  </HomeSection>
</template>

<style lang="scss" scoped></style>
