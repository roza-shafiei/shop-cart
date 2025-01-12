<script>
export default {
  name: 'Logo',
  props: {
    size: {
      type: [Number, String],
      default: 40,
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <RouterLink class="logo flex items-center" to="/">
    <div class="logo__img h-fit flex">
      <img :height="`${size}px`" alt="text" src="/images/logo/Logo.png" />
    </div>
    <p v-if="text" class="ms-2 text-xl font-medium text-light-secondary dark:text-dark-secondary">
      {{ text }}
    </p>
  </RouterLink>
</template>

<style scoped>
a.logo {
  color: inherit;
}
</style>
