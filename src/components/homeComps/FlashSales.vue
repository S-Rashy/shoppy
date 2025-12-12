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
    ProductCard
  },
  created() {
    this.$store.dispatch("productStore/fetchProducts");
  },
  data() {
    return {
      // products: [
      //   {
      //     id: 1,
      //     name: "HAVIT HV-G92 Gamepad",
      //     price: 160,
      //     discount: 40,
      //     image: Gamepad,
      //     rate: 5,
      //     count: 88,
      //   },
      //   {
      //     id: 2,
      //     name: "AK-900 Wired Keyboard",
      //     price: 1160,
      //     discount: 35,
      //     image: Keyboard,
      //     rate: 4,
      //     count: 75,
      //   },
      //   {
      //     id: 3,
      //     name: "IPS LCD Gaming Monitor",
      //     price: 400,
      //     discount: 30,
      //     image: Monitor,
      //     rate: 5,
      //     count: 99,
      //   },
      //   {
      //     id: 4,
      //     name: "S-Series Comfort Chair ",
      //     price: 400,
      //     discount: 25,
      //     image: Chair,
      //     rate: 4.5,
      //     count: 99,
      //   },
      // ],
    };
  },
  computed: {
    getProducts() {
      return this.$store.state.productStore.products.slice(4, 8);
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
            <h3 class="text-2xl font-bold tracking-[4px]">03</h3>
          </div>
          <p class="text-2xl font-bold text-[#E07575]">:</p>
          <div class="flex flex-col items-start w-10">
            <p class="text-xs">Hours</p>
            <h3 class="text-2xl font-bold tracking-[4px]">23</h3>
          </div>
          <p class="text-2xl font-bold text-[#E07575]">:</p>
          <div class="flex flex-col items-start w-10">
            <p class="text-xs">Minutes</p>
            <h3 class="text-2xl font-bold tracking-[4px]">19</h3>
          </div>
          <p class="text-2xl font-bold text-[#E07575]">:</p>
          <div class="flex flex-col items-start w-10">
            <p class="text-xs">Seconds</p>
            <h3 class="text-2xl font-bold tracking-[4px]">56</h3>
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
