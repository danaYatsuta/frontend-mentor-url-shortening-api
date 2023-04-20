<script>
import ShortlyLogo from './images/ShortlyLogo.vue'
import NavLink from './NavLink.vue'
import IconMenu from './icons/IconMenu.vue'
import AppButton from './AppButton.vue'

export default {
  components: {
    ShortlyLogo,
    NavLink,
    IconMenu,
    AppButton
  }
}
</script>

<template>
  <header class="mx-6 pb-7 pt-10 md:pt-14">
    <nav class="mx-auto flex w-full max-w-6xl items-center justify-between">
      <div class="flex gap-12">
        <a href="#"><ShortlyLogo class="fill-very-dark-violet" /></a>

        <div class="hidden items-center gap-6 text-sm font-bold md:flex">
          <NavLink>Features</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Resources</NavLink>
        </div>
      </div>

      <button class="md:hidden"><IconMenu /></button>

      <div class="hidden items-center gap-9 md:flex">
        <NavLink>Login</NavLink>
        <AppButton size="small">Sign Up</AppButton>
      </div>
    </nav>
  </header>
</template>
