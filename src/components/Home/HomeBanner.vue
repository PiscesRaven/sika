<template>
    <b-carousel
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      indicators
      background=" #ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with image only -->
      <b-carousel-slide
        class="banner-slide"
        v-for="item in banner"
        :img-src="mediaWidth(item)"
      ></b-carousel-slide>
    </b-carousel>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeBanner",
  props: ["image"],
  data() {
    return {
      slide: 0,
      sliding: null,
      banner: this.image,
      window_w: 0
    };
  },
  mounted() {
    this.window_w = window.innerWidth;
    window.addEventListener("resize", () => {
      this.window_w = window.innerWidth;
    });
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    mediaWidth(item) {
      if (this.window_w < 768) {
        return item.image_mobile;
      } else {
        return item.image_pc;
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
