<script>
export default {
  props: {
    url: String,
    shortenedUrl: String
  }
}
</script>

<template>
  <div class="items-center gap-5 rounded-lg bg-white p-4 text-base md:flex md:px-6 md:text-lg">
    <div class="grow items-center justify-between divide-y divide-gray/50 md:flex md:divide-none">
      <div class="pb-3 text-very-dark-violet md:pb-0">
        {{ url }}
      </div>

      <div class="pt-3 text-cyan md:pt-0">
        {{ shortenedUrl }}
      </div>
    </div>

    <button
      type="submit"
      class="mt-4 h-10 w-full rounded-md bg-cyan font-bold text-white hover:opacity-50 md:mt-0 md:w-28"
    >
      Copy
    </button>
  </div>
</template>
