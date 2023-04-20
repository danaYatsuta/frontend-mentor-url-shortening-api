<script>
import IconBrandRecognition from './icons/IconBrandRecognition.vue'
import IconDetailedRecords from './icons/IconDetailedRecords.vue'
import IconFullyCustomizable from './icons/IconFullyCustomizable.vue'

export default {
  components: {
    IconBrandRecognition,
    IconDetailedRecords,
    IconFullyCustomizable
  },
  props: {
    icon: String
  }
}
</script>

<template>
  <section class="relative rounded-md bg-white px-6 pb-10 text-center">
    <div
      class="absolute left-0 right-0 top-0 mx-auto flex h-[88px] w-[88px] -translate-y-1/2 items-center justify-center rounded-full bg-dark-violet"
    >
      <component :is="icon"></component>
    </div>

    <h3 class="pt-16 text-xl font-bold text-very-dark-violet"><slot name="heading"></slot></h3>

    <p class="mt-4 text-base">
      <slot></slot>
    </p>
  </section>
</template>
