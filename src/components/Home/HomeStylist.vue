<template>
  <!-- Swiper -->
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide><img src="https://picsum.photos/1024/480/?image=54"></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/1024/480/?image=58"></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/1024/480/?image=54"></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/1024/480/?image=58"></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/1024/480/?image=54"></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/1024/480/?image=58"></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/1024/480/?image=54"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>

</template>


<script>
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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
  }
}
</script>

<style scoped lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    img {
      height: 100%;
    }
  }
  .swiper-slide.swiper-slide-active {
    opacity: 1;
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next,
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    background-color: #000;
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    bottom: 0;
  }
}
</style>