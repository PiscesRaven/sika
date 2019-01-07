<template>
  <div >
    <!-- Swiper -->
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      v-if="swiperStatus ==true"
    >
      <!-- slides -->
      <swiper-slide
        v-for="item in stylist"
        :style="{backgroundImage: 'url(' + item.image_pc+ ')'}"
      >
        <div class="designer-info-hover">
          <router-link :to="{name:'designerinfo', params:{postid:item['id']}}">
            <p class="panel-top">{{item.name}}</p>
            <p class="panel-mid"></p>
            <p class="panel-down">{{item.description}}</p>
          </router-link>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
      <div
        class="swiper-button-prev"
        slot="button-prev"
      >
        <img
          src="../../assets/icon/btn_left.svg"
          alt=""
          srcset=""
        >
      </div>
      <div
        class="swiper-button-next"
        slot="button-next"
      >
        <img
          src="../../assets/icon/btn_right.svg"
          alt=""
          srcset=""
        >
      </div>
    </swiper>
    <div
      v-else
      class="mobile-stylist"
    >
      <b-col
        v-for="item in stylist"
        cols="6"
      >
        <div
          :style="{backgroundImage: 'url(' + item.image_mobile+ ')'}"
          class="mobile-block"
        >
          <div class="designer-info-hover">
            <router-link :to="{name:'designerinfo', params:{postid:item['id']}}">
              <p class="panel-top">{{item.name}}</p>
              <p class="panel-mid"></p>
              <p class="panel-down">{{item.description}}</p>
            </router-link>
          </div>
        </div>
      </b-col>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "carrousel",
  data() {
    return {
      window_w: 0,
      swiperStatus: true,
      stylistApi: `${process.env.VUE_APP_APIPATH}/designer`,
      stylist: [],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 5,
        slidesPerGroup: 1,
        breakpointsInverse: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 4,
            spaceBetween: 5
          },
          // when window width is >= 575px
          575: {
            slidesPerView: 4,
            spaceBetween: 5
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 4,
            spaceBetween: 15
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false);
    this.window_w = window.innerWidth;
    window.addEventListener("resize", () => {
      this.window_w = window.innerWidth;
    });
    if (this.window_w < 768) {
      return (this.swiperStatus = false);
    }
  },
  created() {
    this.getStylist();
  },
  methods: {
    getStylist() {
      axios.get(this.stylistApi).then(res => {
        this.stylist = res.data.data;
      });
    }
    // clientWidth(item) {
    //   if (this.window_w < 768) {
    //     // return item.image_mobile;
    //     this.swiperStatus = false;
    //   } else {
    //     // return item.image_pc;
    //   }
    // }
  }
};
</script>

<style scoped lang="scss">
.swiper-container {
  width: 100%;
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 340px;
    background-position: center;
    background-repeat: no-repeat;
    img {
      height: 100%;
    }
  }
}
.designer-info-hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s;
  flex-direction: column;
  color: $submain-T-Color;
  opacity: 0;
  &:hover {
    background-color: rgba(171, 171, 170, 0.6);
    opacity: 1;

    .panel-top {
      opacity: 1;
    }
    .panel-mid {
      opacity: 1;
    }
    .panel-down {
      opacity: 1;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
  .panel-top {
    opacity: 0;
    transition: transform 0.5s;
  }
  .panel-mid {
    transition: transform 0.5s;
    height: 1px;
    opacity: 0;
    background: #fff;
    margin: 10px auto;
  }
  .panel-down {
    transition: transform 0.5s;
    opacity: 0;
  }
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next,
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: none;
  background-color: #000;
  top: 94%;
  width: 42px;
  height: 42px;
  svg {
    color: #fff;
  }
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: 0;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: 0;
}
.mobile-stylist {
  display: flex;
  flex-wrap: wrap;
  margin: 60px -30px;
  > .col-6 {
    padding: 0;
  }
}

.mobile-block {
  height: 340px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>