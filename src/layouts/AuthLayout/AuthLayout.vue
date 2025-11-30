<script>
import Homeheader from '../HomepageLayout/Homeheader.vue';


    export default {
        components: {
            Homeheader
        }
    }
</script>

<template>
    <!-- <Homeheader/> -->
    <main class="w-full flex gap-25 items-center">
        <img src="../../assets/ImgAuth.svg" alt="" class=" h-screen"/>
        <div class="w-[370px] "><RouterView/></div> 

    </main>
</template>



<style lang="scss" scoped>

</style>