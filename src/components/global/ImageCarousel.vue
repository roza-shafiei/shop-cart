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
      <div
        class="carousel-wrapper relative flex items-center justify-start h-full max-w-[80%] mx-auto"
      >
        <!-- Content Section -->
        <div
          class="content-section hidden md:flex flex-col md:w-1/3 lg:w-1/2 items-start text-light-secondary"
        >
          <p class="text-sm uppercase">Welcome to Comforty</p>
          <h2 class="font-bold text-[26px] lg:text-5xl xl:text-6xl">{{ slide.title }}</h2>
          <v-btn class="mt-4">Shop Now</v-btn>
        </div>

        <!-- Image Section -->
        <div class="image-section relative w-full md:w-2/3 lg:w-1/2 h-full">
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
            <span class="hidden sm:block text-xs">Discount</span>
          </div>
        </div>

        <!-- Background Circle -->
        <div class="background-circle"></div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
<style lang="scss" scoped>
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
  @screen sm {
    width: min(90vw, 37rem);
    height: min(90vw, 37rem);
  }
  @screen md {
    width: min(44vw, 37rem);
    height: min(44vw, 37rem);
    right: 0;
    left: unset;
    transform: unset;
  }
  left: 50%;
  transform: translateX(-50%);
  top: calc(-20vw);
  z-index: 0;
  position: absolute;
  border-radius: 100%;
  background: $color-light-white-300;
}

.discount-badge {
  height: 4rem;
  width: 4rem;
  @screen sm {
    height: 5.5rem;
    width: 5.5rem;
  }
  @screen lg {
    height: 7rem;
    width: 7rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20%;
  right: 20%;
  z-index: 12;
  background: $color-light-white-100;
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
</style>
<style lang="scss">
.v-carousel__controls {
  margin-bottom: 1rem !important;
  height: 30px;
}

.v-carousel__controls {
  .v-btn--icon {
    height: 0.5rem !important;
    width: 0.5rem !important;
    margin-right: 0.5rem;
    margin-left: 0;
  }
}

.v-btn.v-carousel__controls__item:not(.v-btn--active) {
  background-color: $color-light-white-300;
}

.v-carousel__controls__item.v-btn--active {
  background-color: $color-light-secondary !important;
}
</style>
