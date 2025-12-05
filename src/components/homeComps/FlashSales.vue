<script>
import ArrowLeft from "@/assets/icons/ArrowLeft.vue";
import ArrowRight from "@/assets/icons/ArrowRight.vue";
import HomeSection from "@/slots/HomeSection.vue";
import Gamepad from "@/assets/GamePad.svg";
import Keyboard from "@/assets/Keyboard.svg";
import Monitor from "@/assets/Monitor.svg";
import Chair from "@/assets/Chair.svg";
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
          name: "HAVIT HV-G92 Gamepad",
          price: 160,
          discount: 40,
          image: Gamepad,
          rate: 5,
          count: 88,
        },
        {
          id: 2,
          name: "AK-900 Wired Keyboard",
          price: 1160,
          discount: 35,
          image: Keyboard,
          rate: 4,
          count: 75,
        },
        {
          id: 3,
          name: "IPS LCD Gaming Monitor",
          price: 400,
          discount: 30,
          image: Monitor,
          rate: 5,
          count: 99,
        },
        {
          id: 4,
          name: "S-Series Comfort Chair ",
          price: 400,
          discount: 25,
          image: Chair,
          rate: 4.5,
          count: 99,
        },
      ],
    };
  },
  methods: {
    toggleLike(product) {
      product.liked = !product.liked;
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
          <div class="flex justify-between px-4">
            <div
              class="bg-[#DB4444] text-white text-xs text-center py-1 rounded-[4px] w-[55px] h-[26px]"
            >
              - {{ product.discount }}%
            </div>
            <div class="flex flex-col gap-1 items-center">
              <div
                class="rounded-[50%] bg-white size-8 flex justify-center items-center cursor-pointer hover:text-red-500 transition-colors duration-200"
                @click="toggleLike(product)"
                :class="product.liked ? 'text-red-500' : 'text-white'"
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
