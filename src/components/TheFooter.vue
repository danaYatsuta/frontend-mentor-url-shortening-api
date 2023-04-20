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
  <footer class="gap-10 bg-very-dark-violet py-14 px-6">
    <nav
      class="mx-auto flex max-w-6xl flex-col items-center justify-between lg:flex-row lg:items-start"
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

        <div class="flex gap-6">
          <FooterLink><IconFacebook /></FooterLink>
          <FooterLink><IconTwitter /></FooterLink>
          <FooterLink><IconPinterest /></FooterLink>
          <FooterLink><IconInstagram /></FooterLink>
        </div>
      </div>
    </nav>
  </footer>
</template>
