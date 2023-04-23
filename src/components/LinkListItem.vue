<script>
export default {
  props: {
    url: String,
    shortenedUrl: String
  },
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.shortenedUrl)

      this.clicked = true
      setTimeout(() => {
        this.clicked = false
      }, 3000)
    }
  }
}
</script>

<template>
  <div class="items-center gap-5 rounded-lg bg-white p-4 text-base md:flex md:px-6 md:text-lg">
    <div
      class="flex-1 items-center justify-between gap-4 divide-y divide-gray/50 overflow-hidden md:flex md:divide-none"
    >
      <div class="truncate pb-3 text-very-dark-violet md:pb-0">
        {{ url }}
      </div>

      <div class="pt-3 text-cyan md:pt-0">
        {{ shortenedUrl }}
      </div>
    </div>

    <button
      @click="copyToClipboard"
      href=""
      class="mt-4 h-10 w-full rounded-md font-bold text-white transition-colors md:mt-0 md:w-28"
      :class="{ 'bg-dark-violet': clicked, 'bg-cyan hover:opacity-50': !clicked }"
    >
      <span v-if="!clicked">Copy</span>
      <span v-else>Copied!</span>
    </button>
  </div>
</template>
