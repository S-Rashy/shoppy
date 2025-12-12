<script>
import MainButton from "@/slots/MainButton.vue";
import Modal from "@/slots/Modal.vue";
import WButton from "@/slots/WButton.vue";

export default {
  components: {
    Modal,
    WButton,
    MainButton,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    logout() {
      this.$store.dispatch("userStore/logoutUser");
      this.closeModal()
      this.$router.push({ name: "AuthPage" });
    },
  },
};
</script>

<template>
  <Modal>
    <template #info> Are you sure you want to log out?</template>

    <template #button>
      <div class="flex justify-between gap-8 items-center">
        <WButton class="w-[200px]" @click="closeModal"> No, Cancel</WButton>
        <MainButton class="w-[200px]" @click="logout">
          Yes, Log out
        </MainButton>
      </div>
    </template>
  </Modal>
</template>

<style lang="scss" scoped></style>
