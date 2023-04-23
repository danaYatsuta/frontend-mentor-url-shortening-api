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
      links: [],
      incorrectLinkError: false
    }
  },
  methods: {
    addLink(newLink) {
      this.links.push(newLink)
    }
  }
}
</script>

<template>
  <div>
    <LinkListForm
      :incorrect-link-error="incorrectLinkError"
      @addLink="(newLink) => addLink(newLink)"
    />

    <div class="mt-6 flex flex-col gap-6 md:gap-4">
      <LinkListItem
        v-for="link in links"
        :key="link.id"
        :url="link.url"
        :shortenedUrl="link.shortenedUrl"
      />
    </div>
  </div>
</template>
