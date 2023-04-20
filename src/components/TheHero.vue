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
  <div class="relative overflow-hidden md:px-6">
    <section
      class="mx-auto max-w-6xl items-center md:flex md:min-h-[340px] lg:min-h-[400px] xl:min-h-[480px]"
    >
      <div class="mx-auto w-fit md:absolute md:-right-36">
        <IllustrationWorking class="mx-6 h-[340px] md:mx-0 lg:h-[400px] xl:min-h-[480px]" />
      </div>

      <div
        class="flex flex-col items-center px-4 text-center md:w-1/2 md:items-start md:px-0 md:text-start 2xl:w-3/5"
      >
        <h1
          class="mt-10 text-4xl font-bold leading-tight tracking-tight text-very-dark-violet md:mt-0 md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-tight 2xl:text-[5.5rem] 2xl:leading-tight"
        >
          More than just shorter links
        </h1>

        <p class="mt-4 w-5/6 2xl:mt-2 2xl:text-2xl">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>

        <AppButton class="mt-8 2xl:mt-10">Get Started</AppButton>
      </div>
    </section>
  </div>
</template>
