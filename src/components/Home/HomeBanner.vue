<template>
  <div>
    <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" indicators background=" #ababab" :interval="4000" img-width="1024" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <!-- Slides with image only -->
      <b-carousel-slide :img-src="list" v-for="list in HomeBanner">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  data() {
    return {
      slide: 0,
      sliding: null,
      HomeBanner: ['../img/banner1.jpg', '../img/banner2.jpg']
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/scss/global.scss';
</style>
