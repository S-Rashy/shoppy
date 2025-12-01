<script>
import HomeSection from "@/slots/HomeSection.vue";
import ArrowLeft from "@/assets/icons/ArrowLeft.vue";
import ArrowRight from "@/assets/icons/ArrowRight.vue";
import ComputerIcon from "@/assets/icons/categoryIcons/ComputerIcon.vue";
import PhoneIcon from "@/assets/icons/categoryIcons/PhoneIcon.vue";
import SmartWatchIcon from "@/assets/icons/categoryIcons/SmartWatchIcon.vue";
import HeadphoneIcon from "@/assets/icons/categoryIcons/HeadphoneIcon.vue";
import CameraIcon from "@/assets/icons/categoryIcons/CameraIcon.vue";
import GamingIcon from "@/assets/icons/categoryIcons/GamingIcon.vue";

export default {
  components: {
    HomeSection,
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {
      categories: [
        { id: 1, title: "Phones", icon: PhoneIcon },
        { id: 2, title: "Computers", icon: ComputerIcon },
        { id: 3, title: "SmartWatch", icon: SmartWatchIcon },
        { id: 4, title: "Camera", icon: CameraIcon },
        { id: 5, title: "Headphones", icon: HeadphoneIcon },
        { id: 6, title: "Gaming", icon: GamingIcon },
      ],
    };
  },
};
</script>

<template>
  <HomeSection class="border-b border-black/30">
    <template #title>Categories</template>
    <template #details>
      <div class="">
        <h3 class="text-3xl font-semibold tracking-[1px]">
          Browse By Category
        </h3>
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

    <section class="flex justify-between my-12">
      <div
        v-for="category in categories"
        :key="category.id"
        class="flex flex-col items-center justify-center w-[170px] h-[145px] border border-black/30 rounded-[4px] gap-3 cursor-pointer hover:bg-[#DB4444] hover:text-white transition-transform duration-200"
      >
        <div class="">
          <component :is="category.icon" class="size-14" />
        </div>
        <h4 class="text-center text-sm font-medium">{{ category.title }}</h4>
      </div>
    </section>
  </HomeSection>
</template>

<style lang="scss" scoped></style>
