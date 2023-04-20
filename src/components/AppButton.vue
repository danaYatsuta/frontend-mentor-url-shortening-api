<script>
export default {
  props: {
    href: {
      type: String,
      default: '#'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    sizeClasses() {
      if (this.size === 'small') {
        return 'px-5 py-2 text-sm'
      }
      return 'px-10 py-4 text-lg'
    }
  }
}
</script>

<template>
  <div class="overflow-hidden rounded-full bg-white">
    <a :href="href" class="block bg-cyan font-bold text-white hover:opacity-50" :class="sizeClasses"
      ><slot></slot
    ></a>
  </div>
</template>
