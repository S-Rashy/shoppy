<script>
import MainButton from "@/slots/MainButton.vue";

export default {
  components: {
    MainButton,
  },
   data() {
    return {
      email: "",
    };
  },
  methods: {
    handleLogin() {
      const userData = {
        isLoggedIn: true,
        userEmail: this.email,
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      this.$router.push({ name: "HomePage" });
    },
  },
};
</script>

<template>
  <main class="space-y-6">
    <div>
      <h3 class="text-3xl tracking-wider mb-2">Log in to Exclusive</h3>
      <p>Enter your details below</p>
    </div>
    <form @submit.prevent="handleLogin" class="flex flex-col space-y-4 w-[371px]">
      <input
        type="text"
        placeholder="Email or Phone Number"
        class="py-2 border-b border-b-black/40"
      />
      <input
        type="password"
        placeholder="Password"
        class="py-2 border-b border-b-black/40"
      />

      <div class="flex justify-between mt-5">
        <MainButton type="submit" class="w-[143px]">Log in</MainButton>
        <button class="h-[56px] border-none text-[#DB4444]">
          Forgot Password?
        </button>
      </div>
    </form>
  </main>
</template>
<style lang="scss" scoped></style>
