<script>
import CartIcon from "@/assets/icons/CartIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import UserIcon from "@/assets/icons/UserIcon.vue";
import TopHeader from "./TopHeader.vue";

export default {
  name: "Homeheader",
  components: {
    SearchIcon,
    HeartIcon,
    CartIcon,
    UserIcon,
    TopHeader,
  },
  data() {
    return {
      showDropdown: false,
      routes: [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
        { name: "About", path: "/about" },
      ],
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    logout() {
      localStorage.removeItem("userData");
      this.$router.push({ name: "AuthPage" });
      this.toggleDropdown();
    },
  },
  computed: {
    isAuthPage() {
      return this.$route.path.startsWith("/auth");
    },
    isLoggedIn() {
      return this.$store.getters["userStore/isLoggedIn"];
    },
    cartCount() {
      return this.$store.getters["cartStore/cartCount"];
    },
    wishlistCount() {
      return this.$store.getters["wishlistStore/wishlistCount"];
    },
  },
};
</script>

<template>
  <TopHeader />
  <header
    class="w-full flex items-center justify-between py-5 px-20 border-b-black/50 border-b"
  >
    <img src="../../assets/Logo.svg" alt="" />

    <nav class="w-80 flex justify-between items-center">
      <RouterLink
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        @click="isActive(route.path)"
        class="pb-1 border-b border-transparent"
        :class="{
          'border-b-black/50': isActive(route.path),
        }"
      >
        {{ route.name }}
      </RouterLink>
      <RouterLink
        to="/auth/signup"
        v-if="!isLoggedIn"
        class="pb-1 border-b border-transparent"
        >Sign Up</RouterLink
      >
    </nav>

    <main class="flex gap-8 item">
      <div class="flex bg-[#F5F5F5] py-2 px-4 rounded-[4px]">
        <input
          type="text"
          placeholder="What are you looking for?"
          class="outline-none"
        />
        <SearchIcon />
      </div>
      <div v-if="!isAuthPage" class="flex gap-6">
        <RouterLink to="/wishlist" class="relative">

          
          <p
            class="text-white bg-[#DB4444] rounded-full size-4 text-[12px] text-center absolute bottom-7 right-0 z-20"
            v-if="wishlistCount > 0"
          >
            {{ wishlistCount }}
          </p>
          <HeartIcon class="text-white relative z-10" />
        </RouterLink>

        <RouterLink to="/cart" class="relative">
          <p
            class="text-white bg-[#DB4444] rounded-full size-4 text-[12px] text-center absolute bottom-7 right-0 z-20"
            v-if="cartCount > 0"
          >
            {{ cartCount }}
          </p>
          <CartIcon class="relative z-10" />
        </RouterLink>

        <UserIcon
          @click="toggleDropdown"
          class="cursor-pointer rounded-[50%] hover:text-white hover:bg-[#DB4444] hover:scale-105 transition-transform duration-200"
          :class="{ 'scale-105 bg-[#DB4444] text-white': showDropdown }"
        />
      </div>

      <div
        v-if="showDropdown"
        class="absolute right-17 mt-10 w-50 rounded-[4px] text-sm py-3 px-2 shadow overflow-hidden z-50 text-white bg-[rgba(0,0,0,0.04)] backdrop-blur-[150px]"
      >
        <RouterLink to="/account" @click="toggleDropdown">
          <div
            class="w-full px-4 py-2 rounded hover:bg-white/20 hover:backdrop-blur-[160px] transition-all duration-200 cursor-pointer"
          >
            Manage My Account
          </div></RouterLink
        >
        <RouterLink to="/order" @click="toggleDropdown">
          <div
            class="w-full px-4 py-2 rounded hover:bg-white/20 hover:backdrop-blur-[160px] transition-all duration-200 cursor-pointer"
          >
            My Orders
          </div></RouterLink
        >
        <RouterLink to="/cancellations" @click="toggleDropdown">
          <div
            class="w-full px-4 py-2 rounded hover:bg-white/20 hover:backdrop-blur-[160px] transition-all duration-200 cursor-pointer"
          >
            My Cancellations
          </div></RouterLink
        >
        <RouterLink to="/reviews" @click="toggleDropdown">
          <div
            class="w-full px-4 py-2 rounded hover:bg-white/20 hover:backdrop-blur-[160px] transition-all duration-200 cursor-pointer"
          >
            My Reviews
          </div></RouterLink
        >
        <div
          @click="logout"
          class="w-full px-4 py-2 rounded hover:bg-white/20 hover:backdrop-blur-[160px] transition-all duration-200 cursor-pointer"
        >
          Logout
        </div>
      </div>
    </main>
  </header>
</template>

<style scoped>
::placeholder {
  font-size: 14px;
}
</style>
