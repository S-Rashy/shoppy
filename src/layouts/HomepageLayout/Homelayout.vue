<script>
import Homeheader from "./Homeheader.vue";
import HomeFooter from "./HomeFooter.vue";
import MainButton from "@/slots/MainButton.vue";
export default {
  components: {
    Homeheader,
    HomeFooter,
    MainButton
  },
 
};
</script>

<template>
  <div class="">
    <Homeheader />
    <main>
      <RouterView />
    </main>

    <HomeFooter />
  </div>
</template>

<style lang="scss" scoped></style>
