<script>
import axios from '@/plugins/axios.js'
import TheLoading from '@/components/global/TheLoading.vue'
import ThePlaceholder from '@/components/global/ThePlaceholder.vue'
import ProductCard from '@/components/global/ProductCard.vue'

export default {
  components: { ProductCard, ThePlaceholder, TheLoading },
  data() {
    return {
      catList: [],
      selectedCatProducts: [],
      loading: false,
      loadingSelected: false,
      selectedCat: 0,
    }
  },
  async mounted() {
    await this.getCategories() // Get Categories
    if (this.catList.length) {
      this.getSelectedCat() // Fetch products for the first category
    }
  },
  methods: {
    async getCategories() {
      try {
        this.loading = true
        const res = await axios.get('/products/category-list')
        if (res.status === 200) {
          this.catList = res.data.slice(0, 5)
        }
      } catch (e) {
        console.log('get categories content', e)
      } finally {
        this.loading = false
      }
    },
    async getSelectedCat() {
      if (this.catList.length) {
        console.log('[this.catList][this.getSelected]', this.catList)
        try {
          this.loadingSelected = true
          const catName = this.catList[this.selectedCat]
          console.log('[catName]', catName)
          const res = await axios.get(`/products/category/${catName}`)
          if (res.status === 200) {
            this.selectedCatProducts = res.data.products
            console.log('[selectedCatProducts]', this.selectedCatProducts)
          }
        } catch (e) {
          console.log('get categories content', e)
        } finally {
          this.loadingSelected = false
        }
      }
    },

    onCategoryClick(index) {
      this.selectedCat = index // Update selected category
      this.getSelectedCat() // Fetch products for the new category
    },
  },
}
</script>

<template>
  <div>
    <h2 class="main-title text-light-secondary text-center">Top Categories</h2>
    <TheLoading v-if="loading" class="mx-auto" />
    <ThePlaceholder v-else-if="!loading && !catList.length" />
    <div v-else class="flex flex-col gap-10">
      <div class="cat-container gap-3 flex items-center flex-col sm:flex-row justify-center">
        <span
          v-for="(cat, index) in catList"
          :key="index"
          :class="selectedCat === index ? 'text-light-black-900 active' : 'text-light-black-100'"
          class="uppercase cursor-pointer font-medium inline-block relative"
          @click="onCategoryClick(index)"
          >{{ cat }}</span
        >
      </div>
      <div class="products-container">
        <TheLoading v-if="loadingSelected" class="mx-auto" />
        <ThePlaceholder v-else-if="!loadingSelected && !selectedCatProducts.length" />
        <div
          v-else
          class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 justify-items-center"
        >
          <ProductCard
            v-for="(product, index) in selectedCatProducts"
            :key="index"
            :item="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-title {
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.active::after {
  content: '';
  height: 3px;
  background: $color-light-primary;
  position: absolute;
  bottom: -10px;
  left: 0;
  animation-name: fill-line;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes fill-line {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
