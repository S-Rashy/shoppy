<script>
import MainButton from '@/slots/MainButton.vue';
import PageHeader from '@/slots/PageHeader.vue';

export default {
  name: 'Contact',
  components: {
    PageHeader,
    MainButton

  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      showSuccess: false
    }
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form);
      
      this.showSuccess = true;
      
      this.form = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
      
      setTimeout(() => {
        this.showSuccess = false;
      }, 3000);
    }
  }
}
</script>

<template>
  <main class=" mx-auto px-15 py-12 ">
      <PageHeader>
      <template #path>Home</template>
      <template #page>Contact</template>
    </PageHeader>

    <div class="flex gap-8 mt-8">
      <section class="w-[340px] h-[457px] flex-shrink-0 shadow-md p-5">
        <div class="pb-10 space-y-5 border-b">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center text-white">
              📞
            </div>
            <h3 class="font-semibold">Call To Us</h3>
          </div>
          <p class="text-sm mb-2">We are available 24/7, 7 days a week.</p>
          <p class="text-sm">Phone: +8801611112222</p>
        </div>

        <div class="pt-6 space-y-5 " >
          <div class="flex items-center gap-3 my-5">
            <div class="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center text-white">
              ✉️
            </div>
            <h3 class="font-semibold">Write To Us</h3>
          </div>
          <p class="text-sm mb-2">Fill out our form and we will contact you within 24 hours.</p>
          <p class="text-sm">Emails: customer@exclusive.com</p>
          <p class="text-sm">Emails: support@exclusive.com</p>
        </div>
    </section>

      <section class="flex-1">
        <!-- <div v-if="showSuccess" class="bg-green-500 text-white p-4 rounded mb-4 text-center">
          Message sent successfully!
        </div> -->

        <form @submit.prevent="submitForm" class=" w-[800px] h-[457px] shadow-md px-6 py-8 ">
          <div class="flex gap-4 mb-4">
            <input 
              v-model="form.name" 
              type="text" 
              placeholder="Your Name *" 
              required
              class="flex-1 px-4 py-3 bg-[#F5F5F5] rounded focus:outline-none "
            >
            <input 
              v-model="form.email" 
              type="email" 
              placeholder="Your Email *" 
              required
              class="flex-1 px-4 py-3 bg-[#F5F5F5] rounded focus:outline-none "
            >
            <input 
              v-model="form.phone" 
              type="tel" 
              placeholder="Your Phone *" 
              required
              class="flex-1 px-4 py-3 bg-[#F5F5F5] rounded focus:outline-none "
            >
          </div>

          <textarea 
            v-model="form.message" 
            placeholder="Your Message"
            rows="8"
            class="w-full px-4 py-3 bg-[#F5F5F5] rounded focus:outline-none  mb-4"
          ></textarea>

          <div class="text-right mt-6">
            <MainButton class="w-[215px]"> Send Message </MainButton>
          </div>
        </form>
    </section>
    </div>
</main>
</template>