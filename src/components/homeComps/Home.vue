<template>
    <div class="px-15">
        <Hero/>
        <FlashSales/>
        <Category/>

        <BestSelling/>
        <Enhance/>
        <Explore/>
        <NewArrival/>
        <FreeAndFast/>
    </div>
</template>

<script>
import BestSelling from './BestSelling.vue';
import Category from './Category.vue';
import Enhance from './Enhance.vue';
import Explore from './Explore.vue';
import FlashSales from './FlashSales.vue';
import FreeAndFast from './FreeAndFast.vue';
import Hero from './Hero.vue';
import NewArrival from './NewArrival.vue';

    export default {
        components: {
            Hero,
            FlashSales,
            Category,
            BestSelling,
            Enhance,
            Explore,
            NewArrival,
            FreeAndFast
        }
    }
</script>

<style lang="scss" scoped>

</style>