<script>
export default {
  name: 'TheNavbar',
  computed: {
    navLinks() {
      return [
        { title: 'Home', enable: true, href: '/' },
        { title: 'About', enable: true, href: '/about' },
        { title: 'Faq', enable: false, href: '/faq' },
      ]
    },
  },
}
</script>

<template>
  <nav class="navbar py-3 max-content flex justify-between items-center">
    <!--    Links-->
    <div class="navbar-wrapper gap-8 flex items-center">
      <RouterLink
        v-for="(link, index) in navLinks"
        :key="index"
        :to="link.href"
        class="text-sm font-medium text-[#636270]"
        >{{ link.title }}
      </RouterLink>
    </div>
    <!--    Contact Info-->
    <div class="text-sm">
      <span class="text-[#636270]">Contact: </span>
      <span class="font-medium text-light-secondary dark:text-dark-secondary">09210438302</span>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
a.router-link-exact-active {
  color: $color-light-primary;
}
</style>
