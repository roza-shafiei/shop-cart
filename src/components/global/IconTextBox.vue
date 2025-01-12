<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
<template>
  <div class="icon-box gap-4 flex items-center">
    <img :alt="item.title" :src="item.url" />
    <div class="content">
      <p class="text-[15px] font-medium text-light-secondary">{{ item.title }}</p>
      <p class="text-xs text-light-black-200">{{ item.desc }}</p>
    </div>
  </div>
</template>
