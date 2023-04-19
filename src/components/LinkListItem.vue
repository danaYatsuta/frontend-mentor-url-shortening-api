<script>
export default {
  props: {
    url: String,
    shortenedUrl: String
  }
}
</script>

<template>
  <div class="rounded-lg bg-white p-4 text-base">
    <div class="divide-y divide-gray/50">
      <div class="pb-3 text-very-dark-violet">
        {{ url }}
      </div>

      <div class="pt-3 text-cyan">
        {{ shortenedUrl }}
      </div>
    </div>

    <button type="submit" class="mt-4 h-10 w-full rounded-md bg-cyan font-bold text-white">
      Copy
    </button>
  </div>
</template>
