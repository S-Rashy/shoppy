<script>
import MainButton from "@/slots/MainButton.vue";

export default {
  emits: ["close-modal"],
  components: {
    MainButton,
  },
  props: {
    to: {
      type: String,
      default: "/"
    }
  },
  methods: {
    close() {
      this.$emit("close-modal");
    },
  },
};
</script>

<template>
  <div
    class="w-full h-full inset-0 fixed flex items-center justify-center bg-black/30 z-100"
  >
    <div class="bg-white h-59 w-120 py-12 px-12 space-y-8 text-center">
      <h5><slot name="info"></slot></h5>

      <RouterLink :to="to">
        <MainButton @click="close"><slot name="btn"></slot> </MainButton>
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
