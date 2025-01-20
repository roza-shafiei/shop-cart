<script>
import TheFooter from '@/components/layouts/TheFooter.vue'
import TheHeader from '@/components/layouts/TheHeader.vue'

export default {
  name: 'FaqView',
  components: { TheHeader, TheFooter },
  computed: {
    faqList() {
      return [
        {
          title: 'title 1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eos nam reiciendis',
        },
        {
          title: 'title 2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eos nam reiciendis',
        },
        {
          title: 'title 3',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eos nam reiciendis',
        },
        {
          title: 'title 4',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eos nam reiciendis',
        },
      ]
    },
  },
}
</script>

<template>
  <div class="faq">
    <TheHeader />
    <main class="faq-wrapper">
      <article
        class="faq-header p-4 gap-4 bg-light-content flex flex-col md:flex-row items-center justify-between"
      >
        <div class="md:max-w-[50%] flex flex-col gap-4">
          <h2 class="text-4xl font-semibold">Frequently Asked Questions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eos nam reiciendis
            saepe voluptates! Ab aliquam amet aperiam assumenda blanditiis commodi consequatur
            ducimus eius libero magni maxime minima minus nobis officia possimus quam quo
            repudiandae saepe sed sint, saepe!
          </p>
        </div>
        <img src="/images/faq/img.png" />
      </article>
      <v-expansion-panels class="mt-8 max-w-[94%] md:max-w-[80%] mx-auto" variant="accordion">
        <v-expansion-panel
          v-for="(item, i) in faqList"
          :key="i"
          :text="item.text"
          :title="item.title"
        ></v-expansion-panel>
      </v-expansion-panels>
    </main>
    <TheFooter class="mt-20" />
  </div>
</template>

<style lang="scss">
.v-expansion-panel-title__overlay {
  background: transparent !important;
}
</style>
