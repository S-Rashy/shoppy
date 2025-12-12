<script>
import CartIcon from "@/assets/icons/CartIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import UserIcon from "@/assets/icons/UserIcon.vue";
import TopHeader from "./TopHeader.vue";
import OrderIcon from "@/assets/icons/OrderIcon.vue";
import CancelIcon from "@/assets/icons/CancelIcon.vue";
import StarIcon from "@/assets/icons/StarIcon.vue";
import LogoutIcon from "@/assets/icons/LogoutIcon.vue";
import LogoutModal from "@/components/modals/LogoutModal.vue";

export default {
  name: "Homeheader",
  components: {
    SearchIcon,
    HeartIcon,
    CartIcon,
    UserIcon,
    TopHeader,
    OrderIcon,
    CancelIcon,
    StarIcon,
    LogoutIcon,
    LogoutModal,
  },
  data() {
    return {
      showDropdown: false,
      showModal: false,
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
     openModal() {
      this.showModal = true;
      this.showDropdown = false;
    },
    closeModal() {
      this.showModal = false;
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
        class="pb-1 border-b border-transparent hover:scale-110 hover:font-medium transition-all duration-200 ease-in"
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
          <HeartIcon
            class="text-white relative z-10 hover:scale-120 font-semibold transition-all duration-200 ease-in"
          />
        </RouterLink>

        <RouterLink to="/cart" class="relative">
          <p
            class="text-white bg-[#DB4444] rounded-full size-4 text-[12px] text-center absolute bottom-7 right-0 z-20"
            v-if="cartCount > 0"
          >
            {{ cartCount }}
          </p>
          <CartIcon
            class="relative z-10 hover:scale-120 font-semibold transition-all duration-200 ease-in"
          />
        </RouterLink>

        <UserIcon
          @click="toggleDropdown"
          class="cursor-pointer rounded-[50%] hover:text-white hover:bg-[#DB4444] hover:scale-105 transition-transform duration-200"
          :class="{ 'scale-105 bg-[#DB4444] text-white': showDropdown }"
        />
      </div>

      <div
        v-if="showDropdown"
        class="absolute right-17 mt-10 w-55 rounded-[4px] text-sm py-3 px-2 shadow overflow-hidden z-50 text-white bg-[rgba(0,0,0,0.04)] backdrop-blur-[150px]"
      >
        <RouterLink to="/account" @click="toggleDropdown">
          <div
            class="w-full px-3 py-2 flex items-center gap-1 rounded hover:bg-white/20 hover:backdrop-blur-[160px] transition-all duration-200 cursor-pointer"
          >
            <UserIcon />
            <p>Manage My Account</p>
          </div></RouterLink
        >
        <RouterLink to="/order" @click="toggleDropdown">
          <div
            class="w-full px-4 py-2 flex items-center gap-2 rounded hover:bg-white/20 hover:backdrop-blur-[160px] transition-all duration-200 cursor-pointer"
          >
            <OrderIcon />
            <p>My Orders</p>
          </div></RouterLink
        >
        <RouterLink to="/cancellations" @click="toggleDropdown">
          <div
            class="w-full px-4 py-2 flex items-center gap-2 rounded hover:bg-white/20 hover:backdrop-blur-[160px] transition-all duration-200 cursor-pointer"
          >
            <CancelIcon />
            <p>My Cancellations</p>
          </div></RouterLink
        >
        <RouterLink to="/reviews" @click="toggleDropdown">
          <div
            class="w-full px-4 py-2 flex items-center gap-2 rounded hover:bg-white/20 hover:backdrop-blur-[160px] transition-all duration-200 cursor-pointer"
          >
            <StarIcon />
            <p>My Reviews</p>
          </div></RouterLink
        >
        <div
        @click="openModal"
          class="w-full px-4 py-2 flex items-center gap-2 rounded hover:bg-white/20 hover:backdrop-blur-[160px] transition-all duration-200 cursor-pointer"
        >
          <LogoutIcon />
          <p>Logout</p>
        </div>
      </div>
    </main>
    <LogoutModal v-if="showModal" @close="closeModal" />
  </header>
</template>

<style scoped>
::placeholder {
  font-size: 14px;
}
</style>
