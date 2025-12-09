<script>
import Tom from "../../assets/people/Tom.svg";
import Emma from "../../assets/people/Emma.svg";
import Will from "../../assets/people/Will.svg";
export default {
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
        <div v-for="exco in excos" :key="exco.id" class="w-[370px] h-[564px]">
            <img :src="exco.img" alt="">
            <h4>{{ exco.name }}</h4>
            <p>{{ exco.title }}</p>
            <div class="">
                <img src="../../assets/instagram.svg" alt="">
            </div>

        </div>
    </main>
</template>

<style lang="scss" scoped></style>
