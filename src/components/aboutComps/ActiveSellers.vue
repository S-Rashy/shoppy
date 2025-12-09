<script>
import CustomerIcon from "@/assets/icons/CustomerIcon.vue";
import DollarIcon from "@/assets/icons/DollarIcon.vue";
import MoneyBagIcon from "@/assets/icons/MoneyBagIcon.vue";
import SellerIcon from "@/assets/icons/SellerIcon.vue";

export default {
  data() {
    return {
      features: [
        {
          id: 1,
          icon: SellerIcon,
          title: "10.5k",
          details: "Sellers active in our site",
        },
        {
          id: 2,
          icon: DollarIcon,
          title: "33k",
          details: "Monthly Product Sale",
        },
        {
          id: 3,
          icon: CustomerIcon,
          title: "45.5k",
          details: "Customers active in our site",
        },
        {
          id: 4,
          icon: MoneyBagIcon,
          title: "45k",
          details: "Annual gross sale in our site",
        },
      ],
    };
  },
};
</script>
<template>
  <section class="flex justify-center gap-12 my-30">
    <div
      v-for="feature in features"
      :key="feature.id"
      class="flex flex-col gap-4 items-center justify-center w-[270px] h-[230px] rounded-[4px] border border-black/30 hover:text-white hover:bg-[#DB4444] transition-transform duration-200 group"
    >
      <div
        class="size-20 bg-[#2F2E30]/30 flex justify-center items-center rounded-full group-hover:bg-white/30"
      >
        <div
          class="bg-black text-white size-14 flex justify-center items-center rounded-full group-hover:bg-white group-hover:text-black"
        >
          <component :is="feature.icon" />
        </div>
      </div>
      <div class="text-center space-y-2">
        <p class="font-bold text-[30px]">{{ feature.title }}</p>
        <p >{{ feature.details }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
