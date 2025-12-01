<script>
import ArrowLeft from "@/assets/icons/ArrowLeft.vue";
import ArrowRight from "@/assets/icons/ArrowRight.vue";
import HomeSection from "@/slots/HomeSection.vue";
import Coat from "@/assets/coat.svg";
import Bag from "@/assets/bag.svg";
import Cooler from "@/assets/cooler.svg";
import Shelf from "@/assets/shelf.svg";

import HeartIcon from "@/assets/icons/HeartIcon.vue";
import EyeIcon from "@/assets/icons/EyeIcon.vue";
import MainButton from "@/slots/MainButton.vue";

export default {
  components: {
    HomeSection,
    ArrowLeft,
    ArrowRight,
    HeartIcon,
    EyeIcon,
    MainButton,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "The north coat",
          price: 260,
          discount: 40,
          image: Coat,
          rate: 5,
          count: 65,
        },
        {
          id: 2,
          name: "Gucci duffle bag",
          price: 1160,
          discount: 35,
          image: Bag,
          rate: 4.5,
          count: 65,
        },
        {
          id: 3,
          name: "RGB liquid CPU Cooler",
          price: 170,
          discount: 30,
          image: Cooler,
          rate: 4.5,
          count: 65,
        },
        {
          id: 4,
          name: "Small Bookshelf",
          price: 360,
          discount: 25,
          image: Shelf,
          rate: 5,
          count: 99,
        },
      ],
    };
  },
};
</script>
<template>
  <HomeSection>
    <template #title> This Month </template>

    <template #details>
      <div>
        <h3 class="text-3xl font-semibold tracking-[1px]">
          Best Selling Products
        </h3>
      </div>
      <MainButton class="w-[159px] h-[56px]"> View All </MainButton>
    </template>

    <section class="grid grid-cols-4 mx-auto">
      <div
        v-for="product in products"
        :key="product.id"
        class="w-[270px] group"
      >
        <div
          class="h-[250px] bg-[#F5F5F5] rounded-[4px] pt-4 flex flex-col justify-between bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${product.image})` }"
        >
          <div class="flex justify-end px-4">
            <div class="flex flex-col gap-1 items-center">
              <div
                class="rounded-[50%] bg-white size-8 text-white flex justify-center items-center cursor-pointer hover:text-red-500 transition-colors duration-200"
              >
                <HeartIcon />
              </div>
              <div
                class="rounded-[50%] bg-white size-8 text-black flex justify-center items-center cursor-pointer hover:text-red-500 transition-colors duration-200"
              >
                <EyeIcon />
              </div>
            </div>
          </div>

          <button
            class="bg-black text-white h-[41px] w-[270px] rounded-b-[4px] cursor-pointer translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"
          >
            Add to Cart
          </button>
        </div>

        <div class="my-4 flex flex-col gap-2">
          <h4 class="font-medium">{{ product.name }}</h4>
          <p class="text-[#DB4444]">
            ${{ product.price - (product.discount / 100) * product.price
            }}<span class="line-through text-black/50 ml-2"
              >${{ product.price }}</span
            >
          </p>
        </div>
      </div>
    </section>

    <div class="flex my-10 justify-center">
      <MainButton class="w-[234px] h-[56px]"> View All Products </MainButton>
    </div>
  </HomeSection>
</template>

<style lang="scss" scoped></style>
