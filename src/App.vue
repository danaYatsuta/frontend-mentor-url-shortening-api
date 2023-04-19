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

    <div class="mt-40 bg-very-dark-blue/5">
      <TheLinkList />
    </div>
  </main>
</template>
