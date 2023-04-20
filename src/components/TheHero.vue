<script>
import IllustrationWorking from './images/IllustrationWorking.vue'
import AppButton from './AppButton.vue'

export default {
  components: {
    IllustrationWorking,
    AppButton
  }
}
</script>

<template>
  <section class="overflow-hidden">
    <div class="mx-auto w-fit">
      <IllustrationWorking class="mx-6 h-[340px]" />
    </div>

    <div class="flex flex-col items-center px-4 text-center">
      <h1 class="mt-10 text-4xl font-bold leading-tight tracking-tight text-very-dark-violet">
        More than just shorter links
      </h1>

      <p class="mt-4">
        Build your brand's recognition and get detailed insights on how your links are performing.
      </p>

      <AppButton class="mt-8">Get Started</AppButton>
    </div>
  </section>
</template>
