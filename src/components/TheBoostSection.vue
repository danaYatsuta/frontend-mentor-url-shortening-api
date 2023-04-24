<script>
import AppButton from './AppButton.vue'

export default {
  components: {
    AppButton
  }
}
</script>

<template>
  <div
    class="flex h-[300px] flex-col items-center justify-center gap-6 bg-dark-violet bg-boost-mobile bg-right-top bg-no-repeat md:h-[250px] md:bg-boost-desktop"
  >
    <p class="text-center text-3xl font-bold text-white md:text-4xl">Boost your links today</p>

    <AppButton>Get Started</AppButton>
  </div>
</template>
