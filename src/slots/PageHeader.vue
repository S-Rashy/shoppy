<script>
export default {};
</script>

<template>
  <main class="flex justify-between">
    <div class="flex gap-2 text-sm">
      <p class="text-black/50">
        <slot name="path"></slot>
      </p>
      <span class="text-black/50">/</span>
      <p>
        <slot name="page"></slot>
      </p>
    </div>

    <div class="text-sm"><slot name="side"></slot></div>
  </main>
</template>

<style lang="scss" scoped></style>
