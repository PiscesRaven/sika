<template>
  <div>
    <!-- Swiper -->
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      v-if="clientWidth(swiperStatus)"
    >
      <!-- slides -->
      <swiper-slide
        v-for="item in stylist"
        :style="{backgroundImage: 'url(' + item.image_pc+ ')'}"
      >
        <div class="designer-info-hover">
          <p class="panel-text">
            <router-link :to="{name:'designerinfo', params:{postid:item['id']}}">
              {{item.name}}
            </router-link>
          </p>
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
    <div v-else>
      <b-row>
        <b-col
          v-for="item in stylist"
          cols="6"
          class="mo-info-hover"
        >
          <img :src="item.image_pc">
          <p class="panel-text">
            <router-link :to="{name:'designerinfo', params:{postid:item['id']}}">
              {{item.name}}
            </router-link>
          </p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "carrousel",
  data() {
    return {
      swiperStatus: true,
      stylistApi: "${process.env.VUE_APP_APIPATH}/designer",
      stylist: [],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 3,
        breakpointsInverse: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          // // when window width is >= 320px
          320: {
            slidesPerView: 4,
            spaceBetween: 5,
            slidesPerGroup: 1
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 4,
            spaceBetween: 5,
            slidesPerGroup: 1
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 30
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
    },
    clientWidth() {
      if (document.body.offsetWidth <= 768) {
        return (this.swiperStatus = !this.swiperStatus);
      } else {
        return (this.swiperStatus = this.swiperStatus);
      }
    }
  },
  mounted() {
    this.swiper.slideTo(0, 1000, false);
  },
  created() {
    this.getStylist();
  },
  methods: {
    getStylist() {
      axios.get(`${process.env.VUE_APP_APIPATH}/designer`).then(res => {
        this.stylist = res.data.data;
      });
    }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/global.scss";
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
  .designer-info-hover {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s;
    flex-direction: column;
    color: $submain-T-Color;
    &:hover {
      background-color: rgba(171, 171, 170, 0.6);

      .panel-text {
        transform: translateY(-50%);
      }
    }
    .panel-text {
      transform: translateY(-1500%);
      transition: transform 0.5s;
      a {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
      }
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
}
</style>