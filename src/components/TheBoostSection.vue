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
    class="flex h-[300px] flex-col items-center justify-center gap-5 bg-dark-violet bg-boost-mobile bg-right-top bg-no-repeat"
  >
    <p class="text-3xl font-bold text-white">Boost your links today</p>

    <AppButton>Get Started</AppButton>
  </div>
</template>
