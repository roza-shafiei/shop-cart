<script>
import TheHeader from '@/components/layouts/TheHeader.vue'
import axios from '@/plugins/axios.js'
import TheLoading from '@/components/global/TheLoading.vue'
import ThePlaceholder from '@/components/global/ThePlaceholder.vue'
import IconTextBox from '@/components/global/IconTextBox.vue'
import SlideGroup from '@/components/global/SlideGroup.vue'
import ImageCarousel from '@/components/global/ImageCarousel.vue'
import CatCard from '@/components/global/CatCard.vue'
import ProductList from '@/components/pages/home/ProductList.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'

export default {
  components: {
    ImageCarousel,
    TheFooter,
    CatCard,
    SlideGroup,
    IconTextBox,
    ThePlaceholder,
    TheLoading,
    TheHeader,
    ProductList,
  },
  data() {
    return {
      loading: false,
      loadingFeature: false,
      imgList: [],
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
    catList() {
      return [
        { title: 'Wing Chair', img: '/images/home/Image.png', count: 35 },
        { title: 'Wooden Chair', img: '/images/home/Image1.png', count: 157 },
        { title: 'Desk Chair', img: '/images/home/Image2.png', count: 154 },
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
      class="feature-container layout grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-3 xl:gap-5 bg-light-white-100"
    >
      <IconTextBox v-for="(item, index) in featureList" :key="index" :item="item" />
    </div>
    <div
      class="sponsor-container layout grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center"
    >
      <img v-for="(item, i) in sponsorList" :key="i" :alt="item.alt" :src="item.url" />
    </div>
    <section class="featured-products !mt-16 max-content">
      <h2 class="main-title text-light-secondary">Featured Products</h2>
      <SlideGroup :list="featuredList" />
    </section>
    <section class="top-categories !mt-24 max-content">
      <h2 class="main-title text-light-secondary">Top Categories</h2>
      <div class="cat-container grid grid-cols-1 md:grid-cols-3 gap-3">
        <CatCard v-for="(item, idx) in catList" :key="idx" :item="item" />
      </div>
    </section>
    <ProductList class="product-list !mt-24 max-content" />
    <TheFooter class="mt-20" />
  </div>
</template>
<style lang="scss" scoped>
.feature-container {
  justify-content: center;
  padding: 2.5rem;
  border-radius: 0.75rem;
  box-shadow: 10px 0 30px rgba(22, 25, 50, 0.2);
}

.layout {
  max-width: 80%;
  margin: 1.5rem auto 0;
}

.main-title {
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 2.25rem;
}
</style>
