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
  <div class="relative overflow-hidden lg:px-6">
    <section class="mx-auto max-w-6xl items-center lg:flex lg:h-[480px]">
      <div class="-right-32 mx-auto w-fit lg:absolute">
        <IllustrationWorking class="mx-6 h-[340px] lg:mx-0 lg:h-[480px]" />
      </div>
      <div
        class="flex flex-col items-center px-4 text-center lg:w-3/5 lg:items-start lg:px-0 lg:text-start"
      >
        <h1
          class="mt-10 text-4xl font-bold leading-tight tracking-tight text-very-dark-violet lg:mt-0 lg:text-[5.5rem] lg:leading-tight"
        >
          More than just shorter links
        </h1>
        <p class="mt-4 w-5/6 lg:mt-2 lg:text-2xl">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <AppButton class="mt-8 lg:mt-10">Get Started</AppButton>
      </div>
    </section>
  </div>
</template>
