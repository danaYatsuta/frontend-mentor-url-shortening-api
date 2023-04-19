<script>
import LinkListForm from './LinkListForm.vue'
import LinkListItem from './LinkListItem.vue'

export default {
  components: {
    LinkListForm,
    LinkListItem
  },
  data() {
    return {
      items: [
        {
          id: 0,
          url: 'https://google.com',
          shortenedUrl: 'https://short.com'
        },
        {
          id: 2,
          url: 'https://google2.com',
          shortenedUrl: 'https://short2.com'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <LinkListForm />

    <LinkListItem
      v-for="item in items"
      :key="item.id"
      :url="item.url"
      :shortenedUrl="item.shortenedUrl"
    />
  </div>
</template>
