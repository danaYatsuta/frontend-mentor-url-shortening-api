<script>
import InfoCard from './InfoCard.vue'

export default {
  components: {
    InfoCard
  }
}
</script>

<template>
  <div>
    <section class="text-center">
      <h2 class="text-2xl font-bold text-very-dark-violet">Advanced Statistics</h2>

      <p class="mt-4 text-base">
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
    </section>

    <div class="mt-20 flex flex-col gap-24">
      <InfoCard icon="IconBrandRecognition">
        <template #heading>Brand Recognition</template>

        Boost your brand recognition with each click. Generic links don't mean a thing. Branded
        links help instil confidence in your content.
      </InfoCard>

      <InfoCard icon="IconDetailedRecords">
        <template #heading>Detailed Records</template>

        Gain insights into who is clicking your links. Knowing when and where people engage with
        your content helps inform better decisions.
      </InfoCard>

      <InfoCard icon="IconFullyCustomizable">
        <template #heading>Fully Customizable</template>

        Improve brand awareness and content discoverability through customizable links,
        supercharging audience engagement.
      </InfoCard>
    </div>
  </div>
</template>
