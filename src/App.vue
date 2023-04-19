<script>
import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue';

export default {
  components: {
    TheHeader,
    TheHero
  }
}
</script>

<template>
  <TheHeader />

  <main>
    <TheHero />
  </main>
</template>
