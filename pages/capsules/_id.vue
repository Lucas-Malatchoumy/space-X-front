<template>
    <div v-if="capsule" class="d-flex flex-column align-center mt-16">
         <h1>{{ capsule.serial }}</h1>
         <span>Type : {{ capsule.type }}</span>
        <!-- <iframe v-if="launch.links.youtube_id"
      width="560"
      height="315"
      :src="`${ytLink}${launch.links.youtube_id}`"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe> -->

    </div>
</template>
<script>
export default {
  name: 'IndexPage',
  async beforeMount() {
    console.log(this.$route.params.id);
    await this.$store.dispatch('launches/getCapsuleById', this.$route.params.id)
    this.capsule = await this.$store.state.launches?.capsule
    console.log(this.capsule);
  },
  data() {
    return {
        capsule: null
    }
  },
  computed: {
    ytLink() {
        return "https://www.youtube.com/embed/"
    }
  }
}
</script>