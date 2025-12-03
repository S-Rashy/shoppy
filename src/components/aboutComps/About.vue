<script>
import PageHeader from "@/slots/PageHeader.vue";
import ActiveSellers from "./ActiveSellers.vue";

export default {
  components: {
    PageHeader,
    ActiveSellers
  },
};
</script>
<template>
  <main class="px-15 py-10">
    <PageHeader>
      <template #path>Home</template>
      <template #page>About</template>
    </PageHeader>

    <section class="flex justify-between items-center mt-10 gap-20">
        <div class="w-[525px] space-y-6 ">
            <h2 class="text-[50px] font-semibold tracking-[6%]">Our Story</h2>
            <p class="text-sm">Launched in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p class="text-sm">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>

        <div>
            <img src="../../assets/AboutImg.svg" alt="">
        </div>
    </section>
    
    <ActiveSellers/>

    
  </main>
</template>

<style lang="scss" scoped></style>
