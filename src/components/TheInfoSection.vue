<script>
import InfoCard from './InfoCard.vue'

export default {
  components: {
    InfoCard
  }
}
</script>

<template>
  <div class="max-w-6xl">
    <section class="flex flex-col items-center text-center">
      <h2 class="text-3xl font-bold text-very-dark-violet md:text-4xl">Advanced Statistics</h2>

      <p class="mt-4 max-w-lg text-base md:text-lg">
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
    </section>

    <div class="relative mt-20 flex flex-col items-center gap-24 lg:mt-36 lg:flex-row lg:gap-8">
      <div
        class="absolute bottom-0 left-0 right-0 top-0 mx-auto w-2 bg-cyan lg:bottom-auto lg:top-auto lg:h-2 lg:w-auto"
      ></div>

      <InfoCard icon="IconBrandRecognition" class="lg:-translate-y-10">
        <template #heading>Brand Recognition</template>

        Boost your brand recognition with each click. Generic links don't mean a thing. Branded
        links help instil confidence in your content.
      </InfoCard>

      <InfoCard icon="IconDetailedRecords">
        <template #heading>Detailed Records</template>

        Gain insights into who is clicking your links. Knowing when and where people engage with
        your content helps inform better decisions.
      </InfoCard>

      <InfoCard icon="IconFullyCustomizable" class="lg:translate-y-10">
        <template #heading>Fully Customizable</template>

        Improve brand awareness and content discoverability through customizable links,
        supercharging audience engagement.
      </InfoCard>
    </div>
  </div>
</template>
