<script>
import TheHeader from '@/components/layouts/TheHeader.vue'
import ImageCarousel from '@/components/global/ImageCarousel.vue'
import axios from '@/plugins/axios.js'
import TheLoading from '@/components/global/TheLoading.vue'
import ThePlaceholder from '@/components/global/ThePlaceholder.vue'
import IconTextBox from '@/components/global/IconTextBox.vue'
import SlideGroup from '@/components/global/SlideGroup.vue'

export default {
  components: { SlideGroup, IconTextBox, ThePlaceholder, TheLoading, ImageCarousel, TheHeader },
  data() {
    return {
      loading: false,
      imgList: [],
      loadingFeature: false,
      featuredList: [],
    }
  },
  computed: {
    featureList() {
      return [
        { title: 'Discount', url: '/images/icons/box.png', desc: 'Every week new sales' },
        {
          title: 'Support 24/7',
          url: '/images/icons/24-hours.png',
          desc: 'We care your experiences',
        },
        {
          title: 'Free Delivery',
          url: '/images/icons/delivery-truck.png',
          desc: '100% Free for all orders',
        },
        {
          title: 'secure Payment',
          url: '/images/icons/shield.png',
          desc: '100% Secure Payment Method',
        },
      ]
    },
    sponsorList() {
      return [
        {
          alt: 'burnttoast',
          url: '/images/home/burnttoast.png',
        },
        {
          alt: 'cibbank',
          url: '/images/home/cibbank.png',
        },
        {
          alt: 'logo',
          url: '/images/home/logo1.png',
        },
        {
          alt: 'pandadoc',
          url: '/images/home/pandadoc.png',
        },
        {
          alt: 'pipedrive',
          url: '/images/home/pipedrive.png',
        },
        {
          alt: 'zapier',
          url: '/images/home/zapier.png',
        },
      ]
    },
  },
  mounted() {
    this.getCarouselContent()
    this.getFeaturedProducts()
  },
  methods: {
    async getFeaturedProducts() {
      try {
        this.loadingFeature = true
        const res = await axios.get('/products/category/home-decoration')
        if (res.status === 200) {
          this.featuredList = res.data.products
        }
      } catch (e) {
        console.log('get carousel content', e)
      } finally {
        this.loadingFeature = false
      }
    },

    async getCarouselContent() {
      try {
        this.loading = true
        const res = await axios.get('/products?limit=4&skip=10')
        if (res.status === 200) {
          this.imgList = res.data.products
        }
      } catch (e) {
        console.log('get carousel content', e)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<template>
  <div class="home">
    <TheHeader />
    <div class="carousel-container">
      <TheLoading v-if="loading" class="mx-auto" />
      <ThePlaceholder v-else-if="!loading && !imgList.length" />
      <ImageCarousel v-else :slides="imgList" />
    </div>
    <div
      class="feature-container grid md:grid-cols-2 lg:grid-cols-4 layout p-10 rounded-xl justify-center gap-5 md:gap-3 xl:gap-5 bg-light-white-100"
    >
      <IconTextBox v-for="(item, index) in featureList" :key="index" :item="item" />
    </div>
    <div
      class="sponsor-container layout grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center"
    >
      <img v-for="(item, i) in sponsorList" :key="i" :alt="item.alt" :src="item.url" />
    </div>
    <SlideGroup :list="featuredList" />
  </div>
</template>
<style lang="scss" scoped>
.feature-container {
  box-shadow: 10px 0 30px rgba(22, 25, 50, 0.2);
}

.layout {
  max-width: 80%;
  margin: 1.5rem auto 0;
}
</style>
