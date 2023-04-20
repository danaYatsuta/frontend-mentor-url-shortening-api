<script>
import ShortlyLogo from './images/ShortlyLogo.vue'
import FooterLinkList from './FooterLinkList.vue'
import IconFacebook from './icons/IconFacebook.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconPinterest from './icons/IconPinterest.vue'
import IconInstagram from './icons/IconInstagram.vue'

export default {
  components: {
    ShortlyLogo,
    FooterLinkList,
    IconFacebook,
    IconTwitter,
    IconPinterest,
    IconInstagram
  }
}
</script>

<template>
  <footer
    class="flex flex-col items-center justify-between gap-10 bg-very-dark-violet py-14 lg:flex-row lg:items-start lg:px-20 xl:px-40"
  >
    <ShortlyLogo class="fill-white" />

    <div class="flex flex-col gap-8 lg:flex-row xl:gap-20">
      <FooterLinkList>
        <template #heading>Features</template>

        <a href="#">Link Shortening</a>
        <a href="#">Branded Links</a>
        <a href="#">Analytics</a>
      </FooterLinkList>

      <FooterLinkList>
        <template #heading>Resources</template>

        <a href="#">Blog</a>
        <a href="#">Developers</a>
        <a href="#">Support</a>
      </FooterLinkList>

      <FooterLinkList>
        <template #heading>Company</template>

        <a href="#">About</a>
        <a href="#">Our Team</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </FooterLinkList>

      <div class="flex gap-6">
        <a href="#"><IconFacebook /></a>
        <a href="#"><IconTwitter /></a>
        <a href="#"><IconPinterest /></a>
        <a href="#"><IconInstagram /></a>
      </div>
    </div>
  </footer>
</template>
