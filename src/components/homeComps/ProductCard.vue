<script>
import EyeIcon from "@/assets/icons/EyeIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";

export default {
  name: "ProductCard",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    HeartIcon,
    EyeIcon,
  },
};
</script>

<template>
  

    <div class="w-full group">
      <div
        class="h-[250px] bg-[#F5F5F5] rounded-[4px] pt-4 flex flex-col justify-between bg-contain bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${product.image})` }"
      >
        <div class="flex justify-end px-4">
          <div class="flex flex-col gap-1 items-center">
            <div
              class="rounded-[50%] bg-white size-8 text-white flex justify-center items-center cursor-pointer hover:text-red-500 transition-colors duration-200"
            >
              <HeartIcon />
            </div>
            <div
              class="rounded-[50%] bg-white size-8 text-black flex justify-center items-center cursor-pointer hover:text-red-500 transition-colors duration-200"
            >
              <EyeIcon />
            </div>
          </div>
        </div>

        <button
          class="bg-black text-white h-[41px] w-[270px] rounded-b-[4px] cursor-pointer translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"
        >
          Add to Cart
        </button>
      </div>

      <div class="my-4 flex flex-col gap-2">
        <h4 class="font-medium truncate">{{ product.title }}</h4>
        <p class="text-[#DB4444]">
          ${{ (product.price - (10 / 100) * product.price).toFixed(2)
          }}<span class="line-through text-black/50 ml-2"
            >${{ product.price.toFixed( 2 )  }}</span
          >
        </p>
      </div>
    </div>
</template>
