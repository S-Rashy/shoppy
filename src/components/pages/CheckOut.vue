<script>
import MainButton from "@/slots/MainButton.vue"
import CheckoutModal from "../modals/CheckoutModal.vue";

export default {
  name: "Checkout",
  data() {
    return {
      form: {
        firstName: "",
        companyName: "",
        streetAddress: "",
        apartment: "",
        city: "",
        phoneNumber: "",
        emailAddress: "",
        saveInfo: false,
      },
      showModal: false,
    };
  },
  components: {
    MainButton,
    CheckoutModal,
  },
  computed: {
    cartItems() {
      return this.$store.getters["cartStore/cartItems"];
    },
    total() {
      return this.$store.getters["cartStore/cartTotal"];
    },
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.$store.commit("cartStore/clearCart")
      this.showModal = false;
    },
  },
};
</script>

<template>
  <main class="mx-auto px-15 py-13">
    <h2 class="text-4xl font-medium mb-8">Billing Details</h2>

    <div class="flex justify-between">
      <section class="w-[470px]">
        <div class="mb-6">
          <label class="block text-sm text-black/40 mb-2">First Name*</label>
          <input
            v-model="form.firstName"
            type="text"
            required
            class="w-full px-4 py-3 bg-[#F5F5F5] rounded focus:outline-none"
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm text-black/40 mb-2">Company Name</label>
          <input
            v-model="form.companyName"
            type="text"
            class="w-full px-4 py-3 bg-[#F5F5F5] rounded focus:outline-none"
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm text-black/40 mb-2"
            >Street Address*</label
          >
          <input
            v-model="form.streetAddress"
            type="text"
            required
            class="w-full px-4 py-3 bg-[#F5F5F5] rounded focus:outline-none"
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm text-black/40 mb-2"
            >Apartment, floor, etc. (optional)</label
          >
          <input
            v-model="form.apartment"
            type="text"
            class="w-full px-4 py-3 bg-[#F5F5F5] rounded focus:outline-none"
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm text-black/40 mb-2">Town/City*</label>
          <input
            v-model="form.city"
            type="text"
            required
            class="w-full px-4 py-3 bg-[#F5F5F5] rounded focus:outline-none"
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm text-black/40 mb-2">Phone Number*</label>
          <input
            v-model="form.phoneNumber"
            type="tel"
            required
            class="w-full px-4 py-3 bg-[#F5F5F5] rounded focus:outline-none"
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm text-black/40 mb-2">Email Address*</label>
          <input
            v-model="form.emailAddress"
            type="email"
            required
            class="w-full px-4 py-3 bg-[#F5F5F5] rounded focus:outline-none"
          />
        </div>

        <div class="flex items-center gap-3">
          <input
            v-model="form.saveInfo"
            type="checkbox"
            id="saveInfo"
            class="w-5 h-5 accent-[#DB4444]"
          />
          <label for="saveInfo" class="text-sm cursor-pointer">
            Save this information for faster check-out next time
          </label>
        </div>
      </section>

      <section class="w-[527px]">
        <div class="mb-6 w-[425px]">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="flex items-center justify-between mb-4"
          >
            <div class="flex items-center gap-4">
              <img :src="item.image" alt="" class="size-13 object-contain" />
              <span class="text-sm w-[300px]">{{ item.title }}</span>
            </div>
            <span class="text-sm">${{ item.qty * item.price }}</span>
          </div>
        </div>

        <div class="py-4 mb-6 w-[425px]">
          <div class="flex justify-between mb-4 pb-3 border-b">
            <span class="text-sm">Subtotal:</span>
            <span class="text-sm">${{ total }}</span>
          </div>
          <div class="flex justify-between mb-4 pb-3 border-b">
            <span class="text-sm">Shipping:</span>
            <span class="text-sm">Free</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm">Total:</span>
            <span class="text-sm font-semibold">${{ total }}</span>
          </div>
        </div>

        <div class="mb-6 w-[425px]">
          <label class="flex items-center justify-between mb-3 cursor-pointer">
            <div class="flex items-center gap-3">
              <input
                v-model="paymentMethod"
                type="radio"
                value="bank"
                class="w-4 h-4 accent-black"
              />
              <span class="text-sm">Bank</span>
            </div>
            <div class="flex gap-2">
              <img src="../../assets/bkash.svg" alt="Bkash" class="h-5" />
              <img src="../../assets/visa.svg" alt="Visa" class="h-5" />
              <img src="../../assets/mastercard.svg" alt="Mastercard" class="h-5"/>
              <img src="../../assets/nagad.svg" alt="Nagad" class="h-5" />
            </div>
          </label>

          <label class="flex items-center gap-3 cursor-pointer">
            <input
              v-model="paymentMethod"
              type="radio"
              value="cash"
              class="w-4 h-4 accent-black"
            />
            <span class="text-sm">Cash on delivery</span>
          </label>
        </div>

        <div class="flex gap-4 my-6">
          <input
            type="text"
            placeholder="Coupon Code"
            class="w-[300px] h-[56px] rounded-[4px] border px-4"
          />
          <MainButton class="w-[211px]"> Apply Coupon </MainButton>
        </div>

        <MainButton class="w-[190px]" @click="openModal">
          Place Order
        </MainButton>
      </section>
    </div>

    <CheckoutModal v-if="showModal" @close-modal="closeModal" />
  </main>
</template>