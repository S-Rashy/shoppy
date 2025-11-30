<script>
import MainButton from "@/slots/MainButton.vue";

export default {
  components: {
    MainButton,
  },
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
        <MainButton>Create Account</MainButton>
        <button
          class="w-90 h-14 rounded-[4px] border border-black/40 flex justify-center items-center gap-3 cursor-pointer transition-all duration-300 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-2"
        >
          <img src="../../assets/Google.svg" alt="" />
          Sign up with Google
        </button>
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
