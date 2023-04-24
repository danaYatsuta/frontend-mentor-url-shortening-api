<script>
import TheHeader from './components/TheHeader.vue'
import TheMobileMenu from './components/TheMobileMenu.vue'
import TheHeroSection from './components/TheHeroSection.vue'
import TheShortenLinkSection from './components/TheShortenLinkSection.vue'
import TheInfoSection from './components/TheInfoSection.vue'
import TheBoostSection from './components/TheBoostSection.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheMobileMenu,
    TheHeroSection,
    TheShortenLinkSection,
    TheInfoSection,
    TheBoostSection,
    TheFooter
  },
  data() {
    return {
      mobileMenuOpened: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpened = !this.mobileMenuOpened
    }
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (
        !this.$refs.mobileMenu.$el.contains(e.target) &&
        !this.$refs.header.$refs.mobileMenuButton.contains(e.target)
      ) {
        this.mobileMenuOpened = false
      }
    })
  }
}
</script>

<template>
  <TheHeader ref="header" @toggleMobileMenu="toggleMobileMenu" />
  <TheMobileMenu ref="mobileMenu" :mobileMenuOpened="mobileMenuOpened" />

  <main>
    <TheHeroSection />

    <div class="mt-40 flex flex-col items-center bg-very-dark-blue/5 px-6 pb-20 lg:pb-36">
      <div class="w-full max-w-6xl">
        <TheShortenLinkSection class="-translate-y-20" />
      </div>

      <TheInfoSection class="mt-2 md:mt-8" />
    </div>

    <TheBoostSection />
  </main>

  <TheFooter />
</template>
