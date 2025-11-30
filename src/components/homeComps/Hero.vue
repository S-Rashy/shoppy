<script>
export default {
  data() {
    return {
      sections: [
        {
          id: 1,
          title: "Woman's Fashion",
          link: "",
        },
        {
          id: 2,
          title: "Man's Fashion",
          link: "",
        },
        {
          id: 3,
          title: "Electronics",
          link: "",
        },
        {
          id: 4,
          title: "Home & Lifestyle",
          link: "",
        },
        {
          id: 5,
          title: "Medicine",
          link: "",
        },
        {
          id: 6,
          title: "Sports & Outdoor",
          link: "",
        },
        {
          id: 7,
          title: "Baby's & Toys",
          link: "",
        },
        {
          id: 8,
          title: "Groceries & Pets",
          link: "",
        },
        {
          id: 9,
          title: "Health & Beauty",
          link: "",
        },
      ],
    };
  },
};
</script>

<template>
  <main class="flex justify-between pb-10">
    <section class="w-[217px] border-r border-black/50 pt-4">
      <div
        v-for="section in sections"
        :key="section.id"
        class="text-[14px] hover:bg-gray-200 p-2 cursor-pointer flex justify-between group"
      >
        {{ section.title }}
        <img
          src="../../assets/DropDown.svg"
          alt=""
          class="invisible group-hover:visible"
        />
      </div>
    </section>

    <section
      class="bg-black text-white flex justify-between w-[892px] p-6 mt-4"
    >
      <div class="flex flex-col justify-center gap-4 ml-8">
        <div class="flex gap-6 items-center">
          <img src="../../assets/Apple.svg" alt="" />
          <p>iPhone 14 Series</p>
        </div>
        <h2 class="text-[44px] font-semibold tracking-[4%] w-[294px]">
          Up to 10% off Voucher
        </h2>
        <div class="flex gap-2">
          <p
            class="cursor-pointer border-b border-transparent hover:border-white hover:font-semibold py-2"
          >
            Shop Now
          </p>
          <img src="../../assets/arrow-right.svg" alt="" />
        </div>
      </div>

      <div>
        <img src="../../assets/HeroImg.svg" alt="" />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
