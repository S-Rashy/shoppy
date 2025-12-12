<script>
import Tom from "../../assets/people/Tom.svg";
import Emma from "../../assets/people/Emma.svg";
import Will from "../../assets/people/Will.svg";
import TwitterIcon from "@/assets/icons/socialIcons/TwitterIcon.vue";
import InstagramIcon from "@/assets/icons/socialIcons/InstagramIcon.vue";
import LinkedInIcon from "@/assets/icons/socialIcons/LinkedInIcon.vue";
export default {
  components: {
    TwitterIcon,
    InstagramIcon,
    LinkedInIcon,
  },
  data() {
    return {
      excos: [
        { id: 1, img: Tom, name: "Tom Cruise", title: "Founder & Chairman" },
        { id: 2, img: Emma, name: "Emma Watson", title: "Managing Director" },
        { id: 3, img: Will, name: "Will Smith", title: "Product Designer" },
      ],
    };
  },
};
</script>

<template>
  <main class="flex items-center justify-center gap-12">
    <div
      v-for="exco in excos"
      :key="exco.id"
      class="w-[370px] h-[564px] space-y-3"
    >
      <img :src="exco.img" alt="" />
      <div>
        <h4 class="text-[30px]">{{ exco.name }}</h4>
        <p>{{ exco.title }}</p>
      </div>
      <div class="flex gap-4">
        <TwitterIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
