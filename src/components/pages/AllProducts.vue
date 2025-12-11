<script>
import ArrowLeft from "@/assets/icons/ArrowLeft.vue";
import ArrowRight from "@/assets/icons/ArrowRight.vue";
import HomeSection from "@/slots/HomeSection.vue";

import HeartIcon from "@/assets/icons/HeartIcon.vue";
import EyeIcon from "@/assets/icons/EyeIcon.vue";
import MainButton from "@/slots/MainButton.vue";
import ProductCard from "../homeComps/ProductCard.vue";

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
  },
  data() {
    return {
      
    };
  },

  computed: {
    getProducts() {
      return this.$store.state.productStore.products;
    },
  },
};
</script>
<template>
  <main class="px-15">
      <HomeSection>
        <template #title> This Month </template>
        <template #details>
          <div>
            <h3 class="text-3xl font-semibold tracking-[1px]">
              Best Selling Products
            </h3>
          </div>
        </template>
        <section class="grid grid-cols-4 mx-auto gap-6">
      
          <ProductCard
            v-for="(product, index) in getProducts"
            :key="index"
            :product="product"
          />
        </section>
        <div class="flex my-10 justify-center">
          <RouterLink to="/">
              <MainButton class="w-[234px] h-[56px]"> Back to home </MainButton>
          </RouterLink>
        </div>
      </HomeSection>
  </main>
</template>

<style lang="scss" scoped></style>
