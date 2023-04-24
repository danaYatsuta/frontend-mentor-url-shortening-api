<script>
import ShortlyLogo from './images/ShortlyLogo.vue'
import FooterLinkList from './FooterLinkList.vue'
import FooterLink from './FooterLink.vue'
import IconFacebook from './icons/IconFacebook.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconPinterest from './icons/IconPinterest.vue'
import IconInstagram from './icons/IconInstagram.vue'

export default {
  components: {
    ShortlyLogo,
    FooterLinkList,
    FooterLink,
    IconFacebook,
    IconTwitter,
    IconPinterest,
    IconInstagram
  }
}
</script>

<template>
  <footer class="relative bg-very-dark-violet px-6 py-14">
    <nav
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row lg:items-start"
      aria-label="Secondary navigation"
    >
      <ShortlyLogo class="fill-white" />
      <div class="flex flex-col gap-8 lg:flex-row xl:gap-20">
        <FooterLinkList>
          <template #heading>Features</template>

          <FooterLink>Link Shortening</FooterLink>
          <FooterLink>Branded Links</FooterLink>
          <FooterLink>Analytics</FooterLink>
        </FooterLinkList>

        <FooterLinkList>
          <template #heading>Resources</template>

          <FooterLink>Blog</FooterLink>
          <FooterLink>Developers</FooterLink>
          <FooterLink>Support</FooterLink>
        </FooterLinkList>

        <FooterLinkList>
          <template #heading>Company</template>

          <FooterLink>About</FooterLink>
          <FooterLink>Our Team</FooterLink>
          <FooterLink>Careers</FooterLink>
          <FooterLink>Contact</FooterLink>
        </FooterLinkList>

        <div class="flex items-start gap-6">
          <FooterLink aria-label="Facebook page"><IconFacebook /></FooterLink>
          <FooterLink aria-label="Twitter page"><IconTwitter /></FooterLink>
          <FooterLink aria-label="Pinterest page"><IconPinterest /></FooterLink>
          <FooterLink aria-label="Instagram page"><IconInstagram /></FooterLink>
        </div>
      </div>
    </nav>

    <div class="absolute bottom-0 left-0 right-0 pb-1 text-center text-sm">
      <span>
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          class="underline hover:text-cyan"
          >Frontend Mentor</a
        >.
      </span>

      <span class="whitespace-pre">
        Coded by
        <a href="https://github.com/danaYatsuta" class="underline hover:text-cyan">Dana Yatsuta</a>.
      </span>
    </div>
  </footer>
</template>
