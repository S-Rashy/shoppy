<script>
import MainButton from "@/slots/MainButton.vue";
import PageHeader from "@/slots/PageHeader.vue";
import AccountSidebar from "../AccountSidebar.vue";

export default {
  components: {
    PageHeader,
    MainButton,
    AccountSidebar,
  },
};
</script>

<template>
  <main class="px-15 py-10">
    <PageHeader>
      <template #path>Home</template>
      <template #page>My Account</template>
      <template #side> Welcome, User </template>
    </PageHeader>

    <section class="flex gap-30 px-15 mt-8">
      <AccountSidebar />
      <form class="w-[60%] border space-y-4 p-5">
        <h4 class="text-xl text-[#DB4444] font-medium">Edit Your Profile</h4>
        <div class="flex">
          <label for="firstName" class="w-[330px]"
            >First Name <input type="text" id="firstName" name="firstName"
          /></label>
          <label for="lastName" class="w-[330px]"
            >Last Name <input type="text" id="lastName" name="lastName"
          /></label>
        </div>
        <div class="flex">
          <label for="email" class="w-[330px]"
            >Email <input type="text" id="email" name="email"
          /></label>
          <label for="address" class="w-[330px]"
            >Address <input type="text" id="address" name="address"
          /></label>
        </div>
        <div class="space-y-3">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Current Password"
            class="w-[710px]"
          />
          <input
            type="password"
            id="password"
            placeholder="New Password"
            class="w-[710px]"
          />
          <input
            type="password"
            id="password"
            placeholder="Confirm Password"
            class="w-[710px]"
          />
        </div>
        <div class="flex justify-end gap-4 mt-6">
          <button>Cancel</button>
          <MainButton class="w-[214px]"> Save Changes</MainButton>
        </div>
      </form>
    </section>
  </main>
</template>

<style scoped>
input {
  background-color: #f5f5f5;
  border-radius: 4px;
  display: block;
  height: 50px;
  width: 90%;
  outline: none;
}
</style>
