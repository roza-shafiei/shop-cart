<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CartModal',

  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  computed: {
    ...mapGetters('cart', ['allCartItems', 'sumCart']),
    sumCartItems() {
      return `Total: ${this.sumCart} $`
    },
    showModel: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      },
    },
  },
  methods: {
    removeItem(item) {
      this.$store.commit('cart/REMOVE_ITEM', item)
    },
  },
}
</script>

<template>
  <template>
    <v-dialog v-model="showModel" scrollable width="auto">
      <div class="min-w-[350px] max-h-[60vh] rounded-lg p-4 bg-light-white-100 overflow-y-auto">
        <header class="flex items-center justify-between">
          <h2 class="font-bold text-2xl text-light-secondary">Cart</h2>
          <span aria-label="Close dialog" class="p-4 cursor-pointer" @click="showModel = false"
            >X</span
          >
        </header>
        <hr />
        <div class="mt-4 flex flex-col items-center">
          <div v-for="(item, index) in allCartItems" :key="index" class="w-full">
            <div class="w-full flex items-center justify-between gap-4">
              <img
                :alt="item.title"
                :src="item.thumbnail"
                class="h-20 w-20 object-cover rounded-lg"
              />
              <div>
                <p class="font-medium text-lg">{{ item.title }}</p>
                <p class="text-xs text-light-black-200">{{ item.price }}</p>
              </div>
              <p>{{ item.quantity }}</p>
              <span
                aria-label="Remove item from cart"
                class="p-4 cursor-pointer"
                @click="removeItem(item)"
                >X</span
              >
            </div>
            <hr />
          </div>
          <p class="mt-4">{{ sumCartItems }}</p>
        </div>
      </div>
    </v-dialog>
  </template>
</template>

<style lang="scss" scoped></style>
