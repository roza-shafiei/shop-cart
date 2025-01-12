<script>
import ProductCard from '@/components/global/ProductCard.vue'

export default {
  components: { ProductCard },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>
<template>
  <v-slide-group class="slider-group pa-4" show-arrows>
    <template v-slot:next>
      <button aria-label="Next slide" class="nav-button">
        <img alt="Next" src="/images/icons/right.png" />
      </button>
    </template>
    <template v-slot:prev>
      <button aria-label="Previous slide" class="nav-button">
        <img alt="Previous" src="/images/icons/left.png" />
      </button>
    </template>
    <v-slide-group-item v-for="(item, index) in list" :key="index">
      <ProductCard :item="item" />
    </v-slide-group-item>
  </v-slide-group>
</template>
<style lang="scss">
.v-slide-group {
  .v-slide-group__container {
    .v-slide-group__content {
      gap: 1rem;
    }
  }
}

.slider-group {
  .nav-button {
    @apply cursor-pointer bg-light-white-100 dark:bg-light-white-100 p-4 rounded-full;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.08);
    }
  }
}
</style>
