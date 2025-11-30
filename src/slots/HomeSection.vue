<script>
export default {};
</script>

<template>
  <main class="my-10">
    <div class="text-[#DB4444] flex items-center gap-3">
      <div class="w-5 h-8 rounded-sm bg-[#DB4444]"></div>
      <h3 class="font-semibold">
        <slot name="title"></slot>
      </h3>
    </div>

    <div class="flex justify-between items-center my-6">
      <slot name="details"></slot>
    </div>

    <slot></slot>
  </main>
</template>

<style lang="scss" scoped></style>
