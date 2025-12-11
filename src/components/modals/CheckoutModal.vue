<script>
import Modal from "@/slots/Modal.vue";

export default {
  components: {
    Modal
  },
};
</script>

<template>
  <Modal > 
    <template #info>Order has been successfully placed. Kindly check your mail for tracking information.</template>
    <template #btn>Back to Home</template>
  </Modal>
</template>

<style lang="scss" scoped></style>
