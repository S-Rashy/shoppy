<template>
    <div class="px-15">
        <Hero/>
        <FlashSales/>
        <Category/>
    </div>
</template>

<script>
import Category from './Category.vue';
import FlashSales from './FlashSales.vue';
import Hero from './Hero.vue';

    export default {
        components: {
            Hero,
            FlashSales,
            Category
        }
    }
</script>

<style lang="scss" scoped>

</style>