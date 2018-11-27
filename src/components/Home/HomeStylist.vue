<template>
  <div>

    <!-- Swiper -->
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in stylist" :style="{backgroundImage: 'url(' +item.image_pc+ ')'}">
        <div class="designer-info-hover">
          <p class="panel-top">{{item.name}}</p>
          <p class="panel-mid"></p>
          <!-- <p class="panel-down">2018.11.11</p> -->
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev">
        <img src="../../assets/icon/btn_left.svg" alt="" srcset="">
      </div>
      <div class="swiper-button-next" slot="button-next">
        <img src="../../assets/icon/btn_right.svg" alt="" srcset="">
      </div>
    </swiper>

  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'carrousel',
  data() {
    return {
      stylistApi: 'https://sika.idea-infinite.com/api/v1/designer',
      stylist: [],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 3,
        breakpointsInverse: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          // // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false)
  },
  created() {
    this.getStylist()
  },
  methods: {
    getStylist() {
      // axios.get(stylistApi).then(res => {
      //   this.stylist = res.data.data
      // })

      axios.get('https://sika.idea-infinite.com/api/v1/designer').then(res => {
        console.log(res.data.data)
        this.stylist = res.data.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/global.scss';
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
        color: #fff;
        .panel-top {
          transform: translateY(-125%);
        }
        .panel-mid {
          opacity: 1;
        }
        .panel-down {
          transform: translateY(125%);
        }
      }
      .panel-top {
        transform: translateY(-1500%);
        transition: transform 0.5s;
      }
      .panel-mid {
        transition: transform 0.5s;
        width: 80%;
        height: 1px;
        opacity: 0;
        background: #fff;
      }
      .panel-down {
        transition: transform 0.5s;
        transform: translateY(1500%);
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