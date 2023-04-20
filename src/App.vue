<script>
import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'
import TheLinkList from './components/TheLinkList.vue'
import TheInfoSection from './components/TheInfoSection.vue'

export default {
  components: {
    TheHeader,
    TheHero,
    TheLinkList,
    TheInfoSection
  }
}
</script>

<template>
  <TheHeader />

  <main>
    <TheHero />

    <div class="mt-40 flex flex-col items-center bg-very-dark-blue/5 px-6">
      <div class="w-full max-w-6xl">
        <TheLinkList class="-translate-y-20" />
      </div>

      <TheInfoSection class="mt-2" />
    </div>
  </main>
</template>
