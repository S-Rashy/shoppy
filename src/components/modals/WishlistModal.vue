<script>
import Modal from "@/slots/Modal.vue";

export default {
  components: {
    Modal
  },
};
</script>

<template>
  <Modal to="/cart"> 
    <template #info>Your wishlist items have been added to cart</template>
    <template #btn>View your cart</template>
  </Modal>
</template>

<style lang="scss" scoped></style>
