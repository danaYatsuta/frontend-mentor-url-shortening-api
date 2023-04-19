<script>
import ShortlyLogo from './images/ShortlyLogo.vue'
import IconMenu from './icons/IconMenu.vue'

export default {
  components: {
    ShortlyLogo,
    IconMenu
  }
}
</script>

<template>
  <header class="mx-6 pb-7 pt-10">
    <nav class="mx-auto flex w-full max-w-6xl items-center justify-between">
      <a href="#"><ShortlyLogo class="fill-very-dark-violet" /></a>

      <button><IconMenu /></button>
    </nav>
  </header>
</template>
