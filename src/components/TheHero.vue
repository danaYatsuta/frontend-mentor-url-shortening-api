<script>
import IllustrationWorking from './images/IllustrationWorking.vue'

export default {
  components: {
    IllustrationWorking
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

      <a href="#" class="mt-8 block rounded-full bg-cyan px-10 py-4 font-bold text-white"
        >Get Started</a
      >
    </div>
  </section>
</template>
