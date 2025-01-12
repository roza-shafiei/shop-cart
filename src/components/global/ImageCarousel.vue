<script>
export default {
  name: 'ImageCarousel',
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<template>
  <v-carousel
    class="carousel bg-light-white-200 dark:bg-dark-white-200"
    cycle
    hide-delimiter-background
    show-arrows
  >
    <template v-slot:prev="{ props }">
      <div
        class="cursor-pointer bg-light-white-100 dark:bg-light-white-100 p-4 rounded-full"
        @click="props.onClick"
      >
        <img alt="left icon" src="/images/icons/left.png" />
      </div>
    </template>
    <template v-slot:next="{ props }">
      <div
        class="cursor-pointer bg-light-white-100 dark:bg-light-white-100 p-4 rounded-full"
        @click="props.onClick"
      >
        <img alt="right icon" src="/images/icons/right.png" />
      </div>
    </template>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <div class="carousel__wrapper flex items-center justify-start h-full max-w-[75%] mx-auto">
        <div
          class="carousel__content flex flex-col basis-1/2 items-start text-light-secondary dark:text-dark-secondary"
        >
          <p class="text-sm uppercase">Welcome to Comforty</p>
          <p class="font-bold text-6xl">{{ slide.title }}</p>
          <v-btn class="mt-4">Shop Now</v-btn>
        </div>
        <div class="img-container relative basis-1/2 h-full">
          <v-img :alt="slide.title" :src="slide.images[0]" class="w-full h-full">
            <template v-slot:placeholder>
              <div class="flex items-center justify-center h-full">
                <v-progress-circular color="grey-lighten-6" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>
          <div
            class="discount flex flex-col gap-2 items-center justify-center absolute top-[20%] right-[20%] z-[12] h-[100px] w-[100px] bg-light-white-100"
          >
            <span class="font-bold text-2xl text-red-500">{{
              Math.ceil(slide.discountPercentage) + '%'
            }}</span>
            <span class="text-xs">Discount</span>
          </div>
        </div>
      </div>
      <div
        class="w-[38rem] h-[38rem] right-[7.25rem] top-[-50%] z-[0] absolute rounded-full bg-light-white-300"
      ></div>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.discount {
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.v-img {
  img {
    z-index: 10 !important;
  }
}

.v-img {
  z-index: 10 !important;
}

.v-window__controls {
  z-index: 11 !important;
}

.v-carousel__controls {
  height: 30px;
}
</style>
<style lang="scss">
.v-btn--icon {
  height: 1rem !important;
  width: 1rem !important;
}

.v-btn.v-carousel__controls__item:not(.v-btn--active) {
  background-color: $color-light-white-300;
}

.v-carousel__controls__item.v-btn--active {
  background-color: $color-light-secondary !important;
}
</style>
