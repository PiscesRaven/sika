<template>
  <div>
    <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" indicators background=" #ababab" :interval="4000" img-width="1024" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <!-- Slides with image only -->
      <b-carousel-slide :img-src="list" v-for="list in HomeBanner">
        <div class="social-icon">
          <font-awesome-icon :icon="['fab','instagram']" size="2x" />
          <font-awesome-icon :icon="['fab','facebook-f']" size="2x" />
        </div>
      </b-carousel-slide>
    </b-carousel>
    <img src="../../../public/img/phone_banner.jpg" class="phone-banner">
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
.phone-banner {
  display: none;
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
  .carousel-inner {
    .carousel-item {
      .social-icon {
        position: relative;
        bottom: 15%;
        display: inline-flex;
        width: 100%;
        color: $submain-T-Color;

        svg {
          margin-right: 30px;
        }
      }
    }
  }
}
</style>
