<script>
import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'
import TheLinkList from './components/TheLinkList.vue'

export default {
  components: {
    TheHeader,
    TheHero,
    TheLinkList
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
    </div>
  </main>
</template>
