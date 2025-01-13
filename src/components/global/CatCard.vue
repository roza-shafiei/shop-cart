<script>
export default {
  name: 'CatCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div class="cat-card h-[400px] w-full relative">
    <img :alt="item.title" :src="item.img" class="h-full w-full object-cover rounded-lg" />
    <div class="content p-4 absolute bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.7)] rounded-b-lg">
      <span class="font-semibold text-xl text-light-white-100">{{ item.title }}</span>
      <span class="block text-sm text-light-white-300">{{ item.count + ' Products' }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
