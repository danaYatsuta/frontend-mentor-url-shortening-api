<script>
import ShortlyLogo from './images/ShortlyLogo.vue'
import HeaderLink from './HeaderLink.vue'
import IconMenu from './icons/IconMenu.vue'
import AppButton from './AppButton.vue'

export default {
  components: {
    ShortlyLogo,
    HeaderLink,
    IconMenu,
    AppButton
  }
}
</script>

<template>
  <header class="px-6 pb-7 pt-10 md:pb-12 md:pt-14">
    <nav class="mx-auto flex w-full max-w-6xl items-center justify-between">
      <div class="flex gap-12">
        <a href="#"><ShortlyLogo class="fill-very-dark-violet" /></a>

        <div class="hidden items-center gap-6 text-sm font-bold md:flex">
          <HeaderLink>Features</HeaderLink>
          <HeaderLink>Pricing</HeaderLink>
          <HeaderLink>Resources</HeaderLink>
        </div>
      </div>

      <button class="md:hidden"><IconMenu /></button>

      <div class="hidden items-center gap-9 md:flex">
        <HeaderLink>Login</HeaderLink>
        <AppButton size="small">Sign Up</AppButton>
      </div>
    </nav>
  </header>
</template>
