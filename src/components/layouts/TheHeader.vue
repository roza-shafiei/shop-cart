<script>
import Logo from '@/components/global/Logo.vue'
import TheNavbar from '@/components/layouts/TheNavbar.vue'

export default {
  name: 'TheHeader',
  components: { TheNavbar, Logo },
}
</script>

<template>
  <header aria-label="Main Header" class="header">
    <!-- Announcement Section -->
    <div
      aria-label="Announcements"
      class="top-header py-3 text-sm bg-light-secondary text-light-content dark:text-dark-content dark:bg-dark-secondary"
      role="region"
    >
      <div class="max-content flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img alt="Tick icon indicating confirmation" src="/images/icons/check.png" />
          <span>Free shipping on all orders over $50</span>
        </div>
        <RouterLink class="flex items-center gap-2 cursor-pointer" to="/faq">
          <img alt="Alert icon" src="/images/icons/alert-circle.svg" />
          <p>Need Help</p>
        </RouterLink>
      </div>
    </div>

    <!-- Navigation and Search -->
    <div class="middle-header py-5 bg-light-content dark:bg-dark-content">
      <div class="max-content grid grid-cols-2 items-center">
        <!-- Logo Section -->
        <Logo text="Comforty" />
        <!-- Cart Section -->

        <div class="justify-self-end flex items-center gap-3">
          <div
            aria-labelledby="cart"
            class="p-2 relative flex items-center gap-1 rounded-lg cursor-pointer bg-light-white-100 dark:bg-dark-white-100"
          >
            <img alt="Shopping cart icon" src="/images/icons/buy.png" />
            <p id="cart" class="text-xs">Cart</p>
            <span
              class="px-1 text-[10px] absolute top-0 right-0 rounded-full text-light-white-100 bg-light-primary dark:bg-dark-primary"
              >2</span
            >
          </div>
          <div
            aria-label="User profile"
            class="p-2 rounded-lg cursor-pointer bg-light-white-100 dark:bg-dark-white-100"
          >
            <img alt="user profile icon" src="/images/icons/Profile.png" />
          </div>
        </div>
      </div>
    </div>
    <!--        Navbar Section-->
    <TheNavbar />
  </header>
</template>

<style scoped></style>
