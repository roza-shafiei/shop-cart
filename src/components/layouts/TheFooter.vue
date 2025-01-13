<script>
import Logo from '@/components/global/Logo.vue'

export default {
  components: {
    Logo,
  },
  computed: {
    footerLinks() {
      return [
        {
          label: 'Company',
          vertical: true,
          links: [
            {
              title: 'Home',
              icon: '',
              path: '/',
              isLocal: false,
            },
            {
              title: 'Faq',
              icon: '',
              path: '/faq',
              isLocal: false,
            },
            {
              title: 'About',
              icon: '',
              path: '/about',
              isLocal: false,
            },
          ],
        },

        {
          label: 'Fake Links',
          vertical: true,
          links: [
            {
              title: 'Fake 1',
              path: '',
              isLocal: true,
            },
            {
              title: 'Fake 2',
              path: '',
              isLocal: true,
            },
          ],
        },

        {
          label: 'Stay in touch',
          vertical: true,
          links: [
            {
              title: 'Fake Link 3',
              icon: '',
              path: '',
              isLocal: true,
            },
            {
              title: 'Fake Link 4',
              icon: '',
              path: '',
              isLocal: true,
            },
          ],
        },
      ]
    },
    terms() {
      return [
        {
          title: 'Terms and conditions',
          path: '',
        },
        {
          title: 'Privacy Policy',
          path: '',
        },
        {
          title: 'Cookie Policy',
          path: '',
        },
        {
          title: 'Disclaimer',
          path: '',
        },
      ]
    },
  },
}
</script>

<template>
  <footer class="footer w-full flex flex-col items-center">
    <div class="footer__wrapper p-4 sm:p-8 w-full h-full z-0">
      <div class="footer__middle pb-8 flex flex-col sm:flex-row justify-between">
        <div
          class="logo__container flex flex-row sm:flex-col items-start sm:mb-0 me-sm-6 me-md-14 max-w-full sm:max-w-[24%]"
        >
          <Logo class="mb-4 me-4" text="Comforty" />
          <p class="font-light text-sm text-light-black-300 dark:text-dark-black-300">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas
            purus
          </p>
        </div>
        <div class="links max-w-full sm:w-9/12 flex flex-row flex-wrap justify-between items-start">
          <div v-for="(nav, index) in footerLinks" :key="index" class="nav__wrap flex flex-col">
            <div
              class="text-lg font-bold mb-4 mt-6 sm:mt-0 text-light-black-400 dark:text-dark-black-400"
            >
              {{ nav.label }}
            </div>
            <div :class="nav.vertical ? 'flex-col' : 'flex-row'" class="flex">
              <div v-for="(link, i) in nav.links" :key="i" class="mb-2">
                <!--Local Links-->
                <RouterLink v-if="link.isLocal" :to="link.path">
                  <i v-if="link.icon" :class="link.icon" class="text-lg me-1" />
                  <span
                    v-if="link.title"
                    class="text-lg font-light text-light-black-900 dark:text-dark-black-900"
                  >
                    {{ link.title }}
                  </span>
                </RouterLink>
                <!--External Links-->
                <a v-else :href="link.path">
                  <i v-if="link.icon" :class="link.icon" class="text-lg me-1" />

                  <span
                    v-if="link.title"
                    class="text-lg font-light text-light-black-900 dark:text-dark-black-900"
                  >
                    {{ link.title }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="footer__bottom pt-4 sm:pt-8 flex justify-between items-start border-0 border-t border-solid border-light-white-500"
      >
        <div class="flex flex-col gap-4">
          <div class="flex gap-4 flex-wrap text-sm">
            <RouterLink
              v-for="(item, index) in terms"
              :key="index"
              :to="item.path"
              class="!text-light-black-900 dark:!text-dark-black-900"
              >{{ item.title }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer__bottom {
  flex-direction: column-reverse;
  text-align: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }
}

.social-container {
  align-self: center;
  @media screen and (min-width: 1024px) {
    align-self: start;
  }
}

.footer__wrapper {
  border-radius: 0.5rem;
  background: $color-light-white-200;
}
</style>
