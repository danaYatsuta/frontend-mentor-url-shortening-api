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
  <a :href="href" class="fill-white text-grayish-violet hover:fill-cyan hover:text-cyan"
    ><slot></slot>
  </a>
</template>
