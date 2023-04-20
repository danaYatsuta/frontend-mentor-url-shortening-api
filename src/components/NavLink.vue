<script>
export default {
  props: {
    href: {
      type: String,
      default: '#'
    }
  }
}
</script>

<template>
  <a :href="href" class="text-sm font-bold text-grayish-violet hover:text-very-dark-violet"
    ><slot></slot>
  </a>
</template>
