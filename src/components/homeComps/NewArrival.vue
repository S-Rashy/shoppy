<script>
import HomeSection from "@/slots/HomeSection.vue";
import Ps5 from "@/assets/Ps5.svg";
import Woman from "@/assets/Woman.svg";
import Speaker from "@/assets/Speaker.svg";
import Perfume from "@/assets/Perfume.svg";
export default {
  components: {
    HomeSection,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "PlayStation 5",
          image: Ps5,
          details: "Black and White version of the PS5 coming out on sale.",
        },
        {
          id: 2,
          title: "Women's Collection",
          image: Woman,
          details: "Featured woman collections that give you another vibe.",
        },
        {
          id: 3,
          title: "Speakers",
          image: Speaker,
          details: "Amazon wireless speakers",
        },
        {
          id: 4,
          title: "Perfume",
          image: Perfume,
          details: "GUCCI INTENSE OUD EDP",
        },
      ],
    };
  },
};
</script>

<template>
  <HomeSection>
    <template #title>Featured</template>
    <template #details>
      <div class="flex items-center gap-25">
        <h3 class="text-3xl font-semibold tracking-[1px]">New Arrival</h3>
      </div>
    </template>

    <div class="grid grid-cols-4 grid-rows-2 gap-6 text-white">
      <div
        class="col-span-2 row-span-2 p-6 flex flex-col justify-end items-start bg-black rounded-[4px] bg-contain bg-center bg-no-repeat h-[500px]"
        :style="{ backgroundImage: `url(${products[0].image})` }"
      >
        <div class="space-y-2">
          <h4 class="text-[24px] font-semibold tracking-[1px]">{{ products[0].title }}</h4>
          <p class="w-[240px] text-sm">{{ products[0].details }}</p>
          <p class="underline font-medium">Shop Now</p>
        </div>
      </div>

      <div
        class="col-span-2 bg-[#0d0d0d]  p-6 flex flex-col justify-end items-start rounded-[4px] bg-contain bg-right bg-no-repeat h-[240px]"
        :style="{ backgroundImage: `url(${products[1].image})` }"
      >
        <div class="space-y-2">
          <h4>{{ products[1].title }}</h4>
          <p class="w-[240px] text-sm">{{ products[1].details }}</p>
          <p class="underline font-medium">Shop Now</p>
        </div>
      </div>

      <div
        class="bg-black rounded-[4px] p-6 flex flex-col justify-end items-start bg-contain bg-center bg-no-repeat h-[240px]"
        :style="{ backgroundImage: `url(${products[2].image})` }"
      >
        <div  class="space-y-2">
          <h4>{{ products[2].title }}</h4>
          <p class="w-[240px] text-sm">{{ products[2].details }}</p>
          <p class="underline font-medium">Shop Now</p>
        </div>
      </div>

      <div
        class="bg-black rounded-[4px] p-6 flex flex-col justify-end items-start bg-contain bg-center bg-no-repeat h-[240px]"
        :style="{ backgroundImage: `url(${products[3].image})` }"
      >
        <div  class="space-y-2">
          <h4>{{ products[3].title }}</h4>
          <p class="w-[240px] text-sm">{{ products[3].details }}</p>
          <p class="underline font-medium">Shop Now</p>
        </div>
      </div>
    </div>
  </HomeSection>
</template>

<style lang="scss" scoped></style>
