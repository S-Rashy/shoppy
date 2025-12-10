<script>
export default {
  name: 'Checkout',
  data() {
    return {
      form: {
        firstName: '',
        companyName: '',
        streetAddress: '',
        apartment: '',
        city: '',
        phoneNumber: '',
        emailAddress: '',
        saveInfo: false
      },
      paymentMethod: 'bank',
      couponCode: '',
      cartItems: [
        { id: 1, name: 'LCD Monitor', image: '🎮', price: 650 },
        { id: 2, name: 'H1 Gamepad', image: '🎮', price: 1100 }
      ]
    }
  },
  computed: {
    subtotal() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0);
    },
    shipping() {
      return 'Free';
    },
    total() {
      return this.subtotal;
    }
  },
  methods: {
    applyCoupon() {
      console.log('Applying coupon:', this.couponCode);
    },
    placeOrder() {
      console.log('Order placed:', this.form, 'Payment:', this.paymentMethod);
    }
  }
}
</script>

<template>
  <div class="max-w-6xl mx-auto p-8">
    <h1 class="text-3xl font-semibold mb-8">Billing Details</h1>
    
    <div class="flex gap-12">
      <!-- Billing Form -->
      <div class="flex-1">
        <div class="mb-6">
          <label class="block text-sm text-gray-600 mb-2">First Name*</label>
          <input 
            v-model="form.firstName"
            type="text"
            required
            class="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:bg-gray-200"
          >
        </div>

        <div class="mb-6">
          <label class="block text-sm text-gray-600 mb-2">Company Name</label>
          <input 
            v-model="form.companyName"
            type="text"
            class="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:bg-gray-200"
          >
        </div>

        <div class="mb-6">
          <label class="block text-sm text-gray-600 mb-2">Street Address*</label>
          <input 
            v-model="form.streetAddress"
            type="text"
            required
            class="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:bg-gray-200"
          >
        </div>

        <div class="mb-6">
          <label class="block text-sm text-gray-600 mb-2">Apartment, floor, etc. (optional)</label>
          <input 
            v-model="form.apartment"
            type="text"
            class="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:bg-gray-200"
          >
        </div>

        <div class="mb-6">
          <label class="block text-sm text-gray-600 mb-2">Town/City*</label>
          <input 
            v-model="form.city"
            type="text"
            required
            class="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:bg-gray-200"
          >
        </div>

        <div class="mb-6">
          <label class="block text-sm text-gray-600 mb-2">Phone Number*</label>
          <input 
            v-model="form.phoneNumber"
            type="tel"
            required
            class="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:bg-gray-200"
          >
        </div>

        <div class="mb-6">
          <label class="block text-sm text-gray-600 mb-2">Email Address*</label>
          <input 
            v-model="form.emailAddress"
            type="email"
            required
            class="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:bg-gray-200"
          >
        </div>

        <div class="flex items-center gap-3">
          <input 
            v-model="form.saveInfo"
            type="checkbox"
            id="saveInfo"
            class="w-5 h-5 accent-red-500"
          >
          <label for="saveInfo" class="text-sm cursor-pointer">
            Save this information for faster check-out next time
          </label>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="w-96">
        <div class="mb-6">
          <div v-for="item in cartItems" :key="item.id" class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <span class="text-2xl">{{ item.image }}</span>
              <span class="text-sm">{{ item.name }}</span>
            </div>
            <span class="text-sm">${{ item.price }}</span>
          </div>
        </div>

        <div class="border-t border-b border-gray-300 py-4 mb-6">
          <div class="flex justify-between mb-2">
            <span class="text-sm">Subtotal:</span>
            <span class="text-sm">${{ subtotal }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-sm">Shipping:</span>
            <span class="text-sm">{{ shipping }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-sm">Total:</span>
            <span class="text-sm font-semibold">${{ total }}</span>
          </div>
        </div>

        <!-- Payment Methods -->
        <div class="mb-6">
          <label class="flex items-center justify-between mb-3 cursor-pointer">
            <div class="flex items-center gap-3">
              <input 
                v-model="paymentMethod"
                type="radio"
                value="bank"
                class="w-4 h-4 accent-black"
              >
              <span class="text-sm">Bank</span>
            </div>
            <div class="flex gap-2">
              <img src="https://via.placeholder.com/30x20/e3f2fd/0066cc?text=B" alt="Bkash" class="h-5">
              <img src="https://via.placeholder.com/30x20/1a237e/ffffff?text=V" alt="Visa" class="h-5">
              <img src="https://via.placeholder.com/30x20/ff6d00/ffffff?text=M" alt="Mastercard" class="h-5">
              <img src="https://via.placeholder.com/30x20/ff5722/ffffff?text=N" alt="Nagad" class="h-5">
            </div>
          </label>

          <label class="flex items-center gap-3 cursor-pointer">
            <input 
              v-model="paymentMethod"
              type="radio"
              value="cash"
              class="w-4 h-4 accent-black"
            >
            <span class="text-sm">Cash on delivery</span>
          </label>
        </div>

        <!-- Coupon Code -->
        <div class="flex gap-3 mb-6">
          <input 
            v-model="couponCode"
            type="text"
            placeholder="Coupon Code"
            class="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-500"
          >
          <button 
            @click="applyCoupon"
            class="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded transition"
          >
            Apply Coupon
          </button>
        </div>

        <!-- Place Order Button -->
        <button 
          @click="placeOrder"
          class="w-full px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded transition"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>