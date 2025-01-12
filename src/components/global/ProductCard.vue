<script>
export default {
  name: 'ProductCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <RouterLink :to="item.url" class="product-card w-[18rem] rounded-lg">
    <div
      class="img-container relative h-[18rem] rounded-lg bg-center bg-contain bg-origin-border bg-gradient-to-bl from-light-white-300 to-[#029FAE59]"
    >
      <img :src="item.thumbnail" class="w-full h-auto absolute object-contain" />
    </div>
    <div class="card-content">
      <div>
        <p>{{ item.title }}</p>
        <span>{{ item.price }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped></style>
