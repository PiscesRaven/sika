<template>
  <div>
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
        class="pc-slide"
        v-for="item in PcBanner"
        :img-src="item.image_pc"
      ></b-carousel-slide>
    </b-carousel>

    <b-carousel
      id="carousel2"
      style="text-shadow: 1px 1px 2px #333;"
      indicators
      background=" #ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
      v-model="slide2"
      @sliding-start="onSlideStart2"
      @sliding-end="onSlideEnd2"
    >
      <b-carousel-slide
        v-for="item in MobileBanner"
        :img-src="item.image_mobile"
        class="pad-slide"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeBanner",

  data() {
    return {
      slide: 0,
      sliding: null,
      slide2: 0,
      sliding2: null,
      PcBanner: [],
      MobileBanner: []
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    onSlideStart2(slide) {
      this.sliding2 = true;
    },
    onSlideEnd2(slide) {
      this.sliding2 = false;
    },
    getList() {
      let vm = this;
      var api = "https://sika.idea-infinite.com/api/v1/display";
      axios.get("https://sika.idea-infinite.com/api/v1/display").then(res => {
        vm.PcBanner = res.data.data.banner;
        vm.MobileBanner = res.data.data.banner;
      });
    }
  },
  created() {
    this.getList();
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/global.scss";
#carousel2 {
  display: none;
  @include pad-width {
    display: block;
  }
  //平板以下
  @include pad-and-phone-width {
    display: block;
    margin: auto;
  }
}

#carousel1 {
  @include pad-width {
    display: none;
  }
  //手機
  @include pad-and-phone-width {
    display: none;
  }
}
</style>
