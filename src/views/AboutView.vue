<script>
import TheHeader from '@/components/layouts/TheHeader.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'

export default {
  name: 'AboutView',
  components: { TheFooter, TheHeader },
}
</script>

<template>
  <TheHeader />
  <main class="max-w-[94%] md:max-w-[70%] mx-auto">
    <h2 class="text-center text-3xl font-semibold">Who we are and why we do what we do!</h2>
    <p class="mt-4">
      Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida
      arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna
      maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus,
      ac sodales lectus placerat quis.
    </p>
    <h3 class="mt-6 text-2xl font-semibold">Top trends</h3>
    <img alt="chair" class="mt-4 mx-auto" src="/images/about/chair.png" />
    <p class="mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat
      hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget
      arcu facilisis consequat sed eu felis.
    </p>
    <ul class="mt-4">
      <li>consectetur adipiscing elit. Aliquam placerat</li>
      <li>Lorem ipsum dolor sit amet consectetur</li>
    </ul>
  </main>
  <TheFooter class="mt-20" />
</template>

<style lang="scss" scoped>
ul {
  list-style: circle;
  padding: 0 2rem;
}
</style>
