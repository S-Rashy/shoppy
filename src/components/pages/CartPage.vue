<script>
import ArrowDown from "@/assets/icons/ArrowDown.vue";
import MainButton from "@/slots/MainButton.vue";
import PageHeader from "@/slots/PageHeader.vue";

export default {
  components: {
    PageHeader,
    ArrowDown,
    MainButton
  },
  computed: {
    cart() {
      return this.$store.getters["cartStore/cartItems"];
    },
    total() {
      return this.$store.getters["cartStore/cartTotal"];
    },
  },
  methods: {
    increase(id) {
      this.$store.commit("cartStore/increaseQty", id);
    },
    decrease(id) {
      this.$store.commit("cartStore/decreaseQty", id);
    },
    remove(id) {
      this.$store.commit("cartStore/removeFromCart", id);
    },
  },
};
</script>

<template>
  <main class="px-15 py-10">
    <PageHeader>
      <template #path>Home</template>
      <template #page>Cart</template>
    </PageHeader>

    <section v-if="cart.length>0" >
      <div
        class="w-[1170px] h-[72px] rounded-[4px] shadow-sm px-8 flex justify-between items-center mt-6"
      >
        <section class="flex w-[420px] justify-between">
          <p>Product</p>
          <p>Price</p>
        </section>
        <section class="flex w-[420px] justify-between">
          <p>Quantity</p>
          <p>Subtotal</p>
        </section>
      </div>
      <div
        v-for="item in cart"
        :key="item.id"
        class="w-[1170px] h-[72px] rounded-[4px] shadow-sm px-8 flex justify-between items-center mt-8"
      >
        <section class="flex w-[420px] justify-between items-center">
          <div class="flex gap-2 items-center w-[350px]">
            <div class="relative">
              <img
                @click="remove(item.id)"
                src="../../assets/cancel.svg"
                alt="Cancel Icon"
                class="absolute top-0 left-0 z-20 cursor-pointer"
              />
              <img :src="item.image" alt="" class="size-14 relative z-10" />
            </div>
            <p>{{ item.title }}</p>
          </div>
          <p>${{ item.price }}</p>
        </section>
        <section class="flex w-[420px] justify-between items-center">
          <div
            class="border border-[1.5px] border-black/40 rounded-[4px] w-[72px] h-11 flex justify-center gap-2 items-center"
          >
            <p>{{ String(item.qty).padStart(2, "0") }}</p>
            <span class="flex flex-col justify-center gap-1 cursor-pointer">
              <button @click="increase(item.id)" class="rotate-180">
                <ArrowDown />
              </button>
              <button @click="decrease(item.id)"><ArrowDown /></button>
            </span>
          </div>
          <p>${{ item.qty * item.price }}</p>
        </section>
      </div>
      <div class="mt-6 flex justify-between">
        <RouterLink to="/"
          ><button
            class="w-[218px] h-[56px] rounded-[4px] border border-black/50"
          >
            Return To Shop
          </button></RouterLink
        >
        <button class="w-[218px] h-[56px] rounded-[4px] border border-black/50">
          Update Cart
        </button>
      </div>
      <section class="flex justify-between mt-10">
        <div class="flex gap-4">
          <input type="text" placeholder="Coupon Code"  class="w-[300px] h-[56px] rounded-[4px] border px-4"/>
          <MainButton class="w-[211px]"> Apply Coupon </MainButton>
        </div>
        <div class="w-[470px] h-[324px] rounded-[4px] border p-6" >
          <h4 class="text-[20px] font-medium">Cart Total</h4>
          <span class="flex justify-between items-center py-4 border-b border-black/40">
            <p>Subtotal:</p>
            <p>${{ total }}</p>
          </span>
          <span class="flex justify-between items-center py-4 border-b border-black/40">
            <p>Shipping:</p>
            <p>Free</p>
          </span>
          <span class="flex justify-between items-center py-4">
            <p>Total:</p>
            <p>${{ total }}</p>
          </span>
          <RouterLink to="/checkout" class="flex justify-center mt-4">
            <MainButton class="w-[260px] h-[56px] ">Proceed to checkout</MainButton>
          </RouterLink>
        </div>
      </section>
    </section>

    <p v-else class="text-center"> Your cart is currently empty</p>
  </main>
</template>
<style scoped>

</style>
