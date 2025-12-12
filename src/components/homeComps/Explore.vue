<script>
import HomeSection from "@/slots/HomeSection.vue";
import ProductCard from "./ProductCard.vue";
import MainButton from "@/slots/MainButton.vue";

export default {
  components: {
    HomeSection,
    ProductCard,
    MainButton,
  },
  created() {
    this.$store.dispatch("productStore/fetchProducts");

  },
 
  computed: {
    allProducts() {
      return this.$store.state.productStore.products.slice(8, 16);
    },
  },
};
</script>

<template>
  <HomeSection>
    <template #title> Our Products </template>

    <template #details>
      <div class="flex items-center gap-25">
        <h3 class="text-3xl font-semibold tracking-[1px]">
          Explore Our Products
        </h3>
      </div>
    </template>

    <section class="p-[30px] max-w-[1440px] mx-auto">
      <section class="grid grid-cols-4 px-[20px] gap-6">
       
        <ProductCard
          v-for="(product, index) in allProducts"
          :key="index"
          :product="product"
        />
      </section>
    </section>

    <div class="flex my-10 justify-center">
      <RouterLink to="/allProducts">
        <MainButton class="w-[234px] h-[56px]"> View All Products </MainButton>
      </RouterLink>
    </div>
  </HomeSection>
</template>

<style lang="scss" scoped></style>
