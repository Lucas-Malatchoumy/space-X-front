<template>
    <div v-if="launch">
         <h1>{{ launch.name }}</h1>
        <iframe v-if="launch.links.youtube_id"
      width="560"
      height="315"
      :src="`${ytLink}${launch.links.youtube_id}`"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>

    </div>
</template>
<script>
export default {
  name: 'IndexPage',
  async beforeMount() {
    console.log(this.$route.params.id);
    await this.$store.dispatch('launches/getLaunchById', this.$route.params.id)
    this.launch = await this.$store.state.launches?.launch
  },
  data() {
    return {
        launch: null
    }
  },
  computed: {
    ytLink() {
        return "https://www.youtube.com/embed/"
    }
  }
}
</script>