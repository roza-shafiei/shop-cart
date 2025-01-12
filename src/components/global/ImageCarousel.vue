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
    <!-- Navigation Arrows -->
    <template v-slot:prev="{ props }">
      <button aria-label="Previous slide" class="nav-button" @click="props.onClick">
        <img alt="Previous" src="/images/icons/left.png" />
      </button>
    </template>

    <template v-slot:next="{ props }">
      <button aria-label="Next slide" class="nav-button" @click="props.onClick">
        <img alt="Next" src="/images/icons/right.png" />
      </button>
    </template>

    <!-- Carousel Items -->
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <div class="carousel-wrapper flex items-center justify-start h-full max-w-[75%] mx-auto">
        <!-- Content Section -->
        <div class="content-section flex flex-col basis-1/2 items-start text-light-secondary">
          <p class="text-sm uppercase">Welcome to Comforty</p>
          <h2 class="font-bold text-6xl">{{ slide.title }}</h2>
          <v-btn class="mt-4">Shop Now</v-btn>
        </div>

        <!-- Image Section -->
        <div class="image-section relative basis-1/2 h-full">
          <v-img :alt="slide.title" :src="slide.images[0]" class="product-image">
            <template v-slot:placeholder>
              <div class="flex items-center justify-center h-full">
                <v-progress-circular color="grey-lighten-6" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>

          <!-- Discount Badge -->
          <div class="discount-badge">
            <span class="font-bold text-2xl text-red-500">
              {{ Math.ceil(slide.discountPercentage) }}%
            </span>
            <span class="text-xs">Discount</span>
          </div>
        </div>
      </div>

      <!-- Background Circle -->
      <div class="background-circle"></div>
    </v-carousel-item>
  </v-carousel>
</template>
<style scoped>
.discount-badge {
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}

.nav-button {
  @apply cursor-pointer bg-light-white-100 dark:bg-light-white-100 p-4 rounded-full;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }
}

.background-circle {
  @apply w-[38rem] h-[38rem] right-[7.25rem] top-[-50%] z-[0]
  absolute rounded-full bg-light-white-300;
}

.discount-badge {
  @apply flex flex-col gap-2 items-center justify-center absolute
  top-[20%] right-[20%] z-[12] h-[100px] w-[100px]
  bg-light-white-100;
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
