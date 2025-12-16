<script>
import CustomerServiceIcon from "@/assets/icons/CustomerServiceIcon.vue";
import DeliveryIcon from "@/assets/icons/DeliveryIcon.vue";
import GuaranteeIcon from "@/assets/icons/GuaranteeIcon.vue";

export default {
  data() {
    return {
      features: [
        {
          id: 1,
          icon: DeliveryIcon,
          title: "free and fast delivery",
          details: "Free delivery for all orders over $40",
        },
        {
          id: 2,
          icon: CustomerServiceIcon,
          title: "24/7 customer service",
          details: "Friendly 24/7 customer support",
        },
        {
          id: 3,
          icon: GuaranteeIcon,
          title: "money back guarantee",
          details: "We return money within 30 days",
        },
      ],
    };
  },
};
</script>
<template>
  <section class="flex justify-center gap-20 my-20">
    <div
      v-for="feature in features"
      :key="feature.id"
      class="flex flex-col gap-4 items-center"
    >
      <div
        class="size-20 bg-[#2F2E30]/30 flex justify-center items-center rounded-full"
      >
        <div
          class="bg-black size-14 flex justify-center items-center rounded-full"
        >
          <component :is="feature.icon" class=" text-white" />
        </div>
      </div>
      <div class="text-center space-y-2">
        <p class="uppercase font-semibold text-[18px]">{{ feature.title }}</p>
        <p class="text-sm">{{ feature.details }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
