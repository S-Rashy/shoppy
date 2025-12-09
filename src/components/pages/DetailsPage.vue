<script>
export default {
  // async mounted() {
  //   const id = this.$route.query.productId;
  //   const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //   const data = await response.json();
  //   this.product = data;

  //   // console.log(this.$route);
  // },
  data() {
    return {
      product: null,
    };
  },
  created() {
    const id = Number(this.$route.query.productId);

    this.product = this.$store.getters["productStore/allProducts"].find(
      (p) => p.id === id
    );
  },
};
</script>

<template>
  <main v-if="product" class="p-12">
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

    <section>
      <h2>{{ product.title }}</h2>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
