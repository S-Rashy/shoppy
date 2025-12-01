<script>
export default {};
</script>

<template>
  <main class="bg-black flex p-8 justify-between items-center">
    <section class="space-y-6">
      <h4 class="text-[#00FF66] font-semibold text-base">Categories</h4>
      <h2 class="text-white font-semibold text-5xl w-[440px] my-4 leading-[60px]">
        Enhance Your Music Experience
      </h2>

      <section class="flex items-end gap-3">
        <div
          class="flex flex-col items-center justify-center size-16 border bg-white rounded-[50%]"
        >
          <h3 class="text-base font-semibold">05</h3>
          <p class="text-xs">Days</p>
        </div>
        <div
          class="flex flex-col items-center justify-center size-16 border bg-white rounded-[50%]"
        >
          <h3 class="text-base font-semibold">23</h3>
          <p class="text-xs">Hours</p>
        </div>
        <div
          class="flex flex-col items-center justify-center size-16 border bg-white rounded-[50%]"
        >
          <h3 class="text-base font-semibold">59</h3>
          <p class="text-xs">Minutes</p>
        </div>
        <div
          class="flex flex-col items-center justify-center size-16 border bg-white rounded-[50%]"
        >
          <h3 class="text-base font-semibold">35</h3>
          <p class="text-xs">Seconds</p>
        </div>
      </section>

      <button class="bg-[#00FF66] text-white rounded-[4px] w-[171px] h-[56px]">
        Buy Now!
      </button>
    </section>

    <section class="relative w-[600px] flex justify-center items-center">
      <div
        class="absolute w-[504px] h-[500px] rounded-full bg-[#D9D9D9]/30 filter blur-[200px]"
      ></div>

      <img src="../../assets/EnhanceImg.svg" alt="" class="relative z-10 w-[568px]" />
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
