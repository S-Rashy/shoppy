<script>
import HomeSection from "@/slots/HomeSection.vue";
import ProductCard from "./ProductCard.vue";
import MainButton from "@/slots/MainButton.vue";

export default {
  components: {
    HomeSection,
    ProductCard,
    MainButton
  },
  async created() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      this.products = data;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },
  data() {
    return {
      products: [],
    };
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
        v-for="(product, index) in products.slice(3, 11)"
        :key="index"
        :product="product"
      />
    </section>
  </section>

   <div class="flex my-10 justify-center">
      <MainButton class="w-[234px] h-[56px]"> View All Products </MainButton>
    </div>


  </HomeSection>
</template>

<style lang="scss" scoped></style>
