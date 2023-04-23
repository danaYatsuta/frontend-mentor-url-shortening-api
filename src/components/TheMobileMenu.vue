<script>
import AppButton from './AppButton.vue'

export default {
  components: {
    AppButton
  },
  props: {
    mobileMenuOpened: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <Transition
    enter-from-class="opacity-0 translate-y-2"
    enter-to-class="opacity-100"
    leave-to-class="opacity-0 translate-y-2"
  >
    <div
      v-if="mobileMenuOpened"
      class="absolute top-24 z-10 w-full transition duration-300 motion-reduce:transition-none md:hidden"
    >
      <nav
        class="mx-6 flex flex-col divide-y divide-light-violet rounded-lg bg-dark-violet px-6 py-10 font-bold text-white"
        aria-label="Mobile navigation"
      >
        <div class="flex flex-col items-center gap-6 pb-8">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>

        <div class="flex flex-col items-center gap-6 pt-8">
          <a href="#">Login</a>
          <AppButton class="self-stretch">Sign Up</AppButton>
        </div>
      </nav>
    </div>
  </Transition>
</template>
