<script>
import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'
import TheLinkList from './components/TheLinkList.vue'
import TheInfoSection from './components/TheInfoSection.vue'
import TheBoostSection from './components/TheBoostSection.vue'

export default {
  components: {
    TheHeader,
    TheHero,
    TheLinkList,
    TheInfoSection,
    TheBoostSection
  }
}
</script>

<template>
  <TheHeader />

  <main>
    <TheHero />

    <div class="mt-40 flex flex-col items-center bg-very-dark-blue/5 px-6 pb-20">
      <div class="w-full max-w-6xl">
        <TheLinkList class="-translate-y-20" />
      </div>

      <TheInfoSection class="mt-2" />
    </div>

    <TheBoostSection />
  </main>
</template>
