<script>
import MainButton from "@/slots/MainButton.vue";
import WButton from "@/slots/WButton.vue";

export default {
  components: {
    MainButton,
    WButton
  },
  data() {
    return {
      firstName: "",
    };
  },
   methods: {
    handleSignup() {
      this.$store.dispatch("userStore/setUser", this.firstName);
      this.$router.push({ name: "HomePage" });
    }
  }

};
</script>

<template>
  <main class="space-y-6">
    <div>
      <h3 class="text-3xl tracking-wider mb-2">Create an account</h3>
      <p>Enter your details below</p>
    </div>
    <form class="flex flex-col space-y-4 w-[371px]">
      <input
        v-model="firstName"
        type="text"
        placeholder="Name"
        class="py-2 border-b border-b-black/40 outline-none"
      />
      <input
        type="text"
        placeholder="Email or Phone Number"
        class="py-2 border-b border-b-black/40 outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        class="py-2 border-b border-b-black/40 outline-none"
      />

      <div class="space-y-4 mx-auto">
        <MainButton @click.prevent="handleSignup">Create Account</MainButton>
        <WButton
          class="w-90 h-14 flex items-center justify-center gap-8"
        >
          <img src="../../assets/Google.svg" alt="" />
          Sign up with Google
        </WButton>
      </div>
    </form>

    <p class="text-black/70 text-center">
      Already have an account?
      <RouterLink
        to="/auth/login"
        class="border-b hover:text-black hover:font-semibold hover:border-b-2"
      >
        Log in</RouterLink
      >
    </p>
  </main>
</template>
<style lang="scss" scoped></style>
