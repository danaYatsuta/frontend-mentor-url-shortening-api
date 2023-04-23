<script>
let id = 0

export default {
  data() {
    return {
      link: '',
      noLinkError: false,
      incorrectLinkError: false
    }
  },
  methods: {
    async onSubmit() {
      if (this.link !== '') {
        const response = await fetch(
          'https://api.shrtco.de/v2/shorten?' + new URLSearchParams({ url: this.link })
        )

        if (response.ok) {
          this.incorrectLinkError = false
          const data = await response.json()

          const newLink = {
            id: id++,
            url: this.link,
            shortenedUrl: data['result']['short_link']
          }

          this.$emit('addLink', newLink)
        } else {
          this.incorrectLinkError = true
        }

        this.noLinkError = false
        this.link = ''
      } else {
        this.noLinkError = true
      }
    }
  },
  computed: {
    errorMessage() {
      if (this.noLinkError) {
        return 'Please add a link'
      } else if (this.incorrectLinkError) {
        return 'Incorrect link'
      }

      return null
    }
  }
}
</script>

<template>
  <div
    class="flex items-center rounded-lg bg-dark-violet bg-shorten-mobile bg-right-top bg-no-repeat p-6 md:bg-shorten-desktop md:px-16 md:py-14"
  >
    <form @submit.prevent="onSubmit" class="flex w-full flex-col gap-4 md:flex-row md:gap-6">
      <div class="relative flex grow flex-col gap-2">
        <input
          type="text"
          placeholder="Shorten a link here..."
          v-model="link"
          class="h-12 w-full rounded-md px-4 text-base placeholder:text-gray md:h-16 md:text-xl"
          :class="{ 'outline outline-2 outline-red': errorMessage }"
        />
        <p v-if="errorMessage" class="-bottom-8 text-sm italic text-red md:absolute md:text-base">
          {{ errorMessage }}
        </p>
      </div>

      <div class="rounded-md bg-white">
        <button
          type="submit"
          class="h-12 w-full whitespace-nowrap rounded-md bg-cyan font-bold text-white hover:opacity-50 md:h-16 md:px-10 md:text-xl"
        >
          Shorten It!
        </button>
      </div>
    </form>
  </div>
</template>
