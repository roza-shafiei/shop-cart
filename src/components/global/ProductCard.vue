<script>
import CartModal from '@/components/global/CartModal.vue'

export default {
  name: 'ProductCard',
  data() {
    return {
      showCartDialog: false,
    }
  },
  components: { CartModal },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productPrice() {
      return '$' + this.item.price
    },
  },
  methods: {
    addToCart() {
      this.$store.commit('cart/ADD_TO_CART', this.item)
      this.showCartDialog = true
    },
  },
}
</script>

<template>
  <div class="product-card w-full max-w-[18rem] rounded-lg">
    <div
      class="img-container relative h-[18rem] rounded-lg bg-center bg-contain bg-origin-border bg-gradient-to-bl from-light-white-300 to-[#029FAE59]"
    >
      <img
        :alt="item.title"
        :src="item.thumbnail"
        class="w-full h-auto absolute object-contain rounded-lg"
      />
    </div>
    <div class="card-content mt-2 flex items-center justify-between">
      <div class="product-info">
        <p>{{ item.title }}</p>
        <span class="font-semibold text-lg">{{ productPrice }}</span>
      </div>
      <div
        aria-label="Shopping cart"
        class="card-btn w-11 h-11 rounded-lg bg-light-white-200 hover:bg-light-primary flex items-center justify-center cursor-pointer"
        @click="addToCart"
      >
        <img alt="shopping cart" src="/images/icons/buy.png" />
      </div>
    </div>
    <CartModal v-model="showCartDialog" />
  </div>
</template>

<style lang="scss" scoped>
.card-btn {
  transition: all 0.3s ease-in-out;
}
</style>
