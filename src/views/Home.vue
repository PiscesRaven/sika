<template>
  <div>
    <HomeBranner :image="imgshow.banner" />
    <b-container
      fluid
      class="imgshow-container"
    >
      <b-row>
        <b-col
          lg="4"
          md="4"
          sm="4"
          cols="4"
          v-for="item in imgshow.works.slice(0,6)"
          class="imgshow-col"
        >
          <div class="imgshow-block">
            <img :src="item.image">
            <div>
              <p>{{item.name}}</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container fluid>
    <!-- 最新優惠資訊 -->
    <b-container>
      <b-row>
        <b-col
          lg="4"
          md="6"
          sm="7"
          cols="12"
        >
          <h2 class="home-sec-title">
            關於希卡
            <span class="en-title">
              Sika
            </span>
          </h2>
        </b-col>
      </b-row>
      <b-row class="home-news-row">
        <b-col
          lg="6"
          md="6"
          sm="12"
          cols="12"
          class="blog-sec"
        >
          <h1>{{aboutus[0].title}}</h1>
          <p v-html="aboutusReplace"></p>
          <router-link :to="{name:'aboutsika'}">more ></router-link>
        </b-col>
        <b-col>
          <!--  <div
            class="news-img"
            :style="{backgroundImage:'url('+list.cover_image +')'}"
          >
      <img :src="list.cover_image" >
          </div> -->
          <div class="news-img">
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- 設計師清單 -->
    <b-container
      fluid
      class="home-full-width"
    >
      <b-container>
        <b-row>
          <b-col
            lg="4"
            md="6"
            sm="7"
            cols="12"
          >
            <h2 class="home-sec-title">
              設計師
              <span class="en-title">
                Stylist
              </span>
            </h2>
          </b-col>
        </b-row>
        <b-row>
          <!--設計師 stylist-->
          <b-col md="12">
            <HomeStylist />
          </b-col>
        </b-row>
      </b-container>
    </b-container fluid>
    <!-- 部落格與影片專區 -->
    <b-container class="blog-video-sec">
      <b-row>
        <b-col
          lg="4"
          md="6"
          sm="7"
          cols="12"
        >
          <h2 class="home-sec-title">
            流行趨勢
            <span class="en-title">
              Blog
            </span>
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="4"
          sm="12"
          cols="12"
          v-for="list in blogLength"
        >
          <div class="home-article">
            <router-link :to="{name:'articlepost', params:{postid:list['id']}}">
              <img :src="list.cover_image">
              <h3>{{list.title}}</h3>
              <h4>{{list.description}}</h4>
              more >
            </router-link>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          lg="4"
          md="6"
          sm="7"
          cols="12"
        >
          <h2 class="home-sec-title">
            影片專區
            <span class="en-title">
              Video
            </span>
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="4"
          sm="12"
          v-for="item in videoLength.slice(0,3)"
        >
          <article class="home-article">
            <div class="video-section">
              <iframe
                width="100%"
                height="315"
                :src="item.embed_url"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h1>{{item.title}}</h1>
            </div>
          </article>
        </b-col>
      </b-row>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col
          md="3"
          sm="6"
          cols="6"
          v-for="list in productRow"
          class="pd-0"
        >
          <router-link :to="{name:'servicepost', params:{postid:list['id']}}">
            <article class="settimg-img slide-TextUp">
              <img :src="list.slider_image">
              <div class="scrolltop-txt">
                {{list.title}}
              </div>
            </article>
          </router-link>
        </b-col>
      </b-row>
    </b-container fluid>
    <!-- 希卡位置 與FB -->
    <b-container>
      <b-row>
        <b-col
          lg="4"
          md="6"
          sm="7"
          cols="12"
        >
          <h2 class="home-sec-title mt-title">
            希卡位置
            <span class="en-title">
              Map
            </span>
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          lg="6"
          md="12"
        >
          <address>
            <p>Tel. 04 723 3405</p>
            <p>Add. 彰化縣彰化市民生南路23號</p>
          </address>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5458.063410319871!2d120.5419531651003!3d24.07263338772579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469388f1b64e687%3A0xecb0929a6bd94e5!2z5biM5Y2hIFNpa2EgaGFpciBzYWxvbg!5e0!3m2!1szh-TW!2stw!4v1542599832447"
            width="100%"
            height="360"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
        </b-col>
        <b-col class="fb-col">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsikahairsalon%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
            width="400"
            height="480"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          lg="4"
          md="6"
          sm="7"
          cols="12"
        >
          <h2
            class="home-sec-title"
            data-from="booking"
          >
            線上預約
            <span class="en-title">
              Booking
            </span>
          </h2>

        </b-col>
      </b-row>
    </b-container>
    <b-container
      fluid
      class="home-full-width-form"
    >
      <b-row>
        <b-col
          md="6"
          sm="12"
          cols="12"
        >
          <img
            src="../../public/img/img_booking_home.jpg"
            alt=""
            class="booking-img"
          >
        </b-col>
        <b-col
          md="5"
          sm="12"
          cols="12"
          offset-xl="1"
        >
          <BookingFrom />
        </b-col>
      </b-row>
    </b-container fluid>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import HomeBranner from "@/components/Home/HomeBanner.vue";
import HomeStylist from "@/components/Home/HomeStylist.vue";
import BookingFrom from "@/components/From.vue";

export default {
  name: "home",
  components: {
    HomeBranner,
    HomeStylist,
    BookingFrom
  },
  data() {
    return {
      Api: {
        AboutUs: `${process.env.VUE_APP_APIPATH}/about_us`,
        StylistApi: `${process.env.VUE_APP_APIPATH}/designer`,
        BlogApi: `${process.env.VUE_APP_APIPATH}/article/list`,
        ProductApi: `${process.env.VUE_APP_APIPATH}/service/list`,
        DisplayApi: `${process.env.VUE_APP_APIPATH}/display`,
        VideoApi: `${process.env.VUE_APP_APIPATH}/video`
      },
      aboutus: [],
      imgshow: [],
      blog: [],
      video: [],
      productRow: []
    };
  },
  created() {
    this.getBlogList();
  },
  mounted() {},
  methods: {
    back() {
      window.scrollTo(0, 0);
    },
    getBlogList() {
      let vm = this;
      axios
        .all([
          axios.get(vm.Api.BlogApi, {
            params: {
              limit: 3,
              offset: 0
            }
          }),
          axios.get(vm.Api.ProductApi, {
            params: {
              limit: 4,
              offset: 0
            }
          }),
          axios.get(vm.Api.DisplayApi),
          axios.get(vm.Api.VideoApi),
          axios.get(vm.Api.AboutUs)
        ])
        .then(
          axios.spread(function(
            BlogApi,
            ProductApi,
            DisplayApi,
            VideoApi,
            AboutUs
          ) {
            vm.blog = BlogApi.data.data;
            vm.productRow = ProductApi.data.data;
            vm.imgshow = DisplayApi.data.data;
            vm.video = VideoApi.data.data;
            vm.aboutus.push(AboutUs.data.data);
          })
        );
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    blogLength() {
      let vm = this;
      for (let i = 0; i < vm.blog.length; i++) {
        vm.blog[i].title = vm.blog[i].title.substring(0, 20) + "...";
      }
      return vm.blog;
    },
    videoLength() {
      let vm = this;
      for (let i = 0; i < vm.video.length; i++) {
        vm.video[i].title = vm.video[i].title.substring(0, 25) + "...";
      }
      return vm.video;
    },
    aboutusReplace() {
      let vm = this;
      return vm.aboutus[0].description.replace(/\n/g, "<br>");
    }
  }
};
</script>
<style lang="scss">
.imgshow-container {
  margin-bottom: 178px;
  @include pad-width {
    margin: 0;
  }
  //手機
  @include pad-and-phone-width {
    margin: 0;
  }

  .imgshow-col {
    padding: 0;
    .imgshow-block {
      position: relative;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
      }
      &:hover {
        div {
          opacity: 1;
          position: absolute;
          right: 0;
          bottom: 0%;
        }
        p {
          opacity: 1;
          position: absolute;
        }
      }
      div {
        position: absolute;
        opacity: 0;
        bottom: -30%;
        right: 0;
        background: url("../assets/icon/icon_field.png") no-repeat right;
        transition: 0.3s all ease-in;
        height: 180px;
        width: 100%;
        @include pad-width {
          display: none;
        }
        //手機
        @include pad-and-phone-width {
          display: none;
        }
      }
      p {
        font-size: 50px;
        color: $submain-T-Color;
        transition: 0.3s all ease-in;
        opacity: 0;
        position: absolute;
        right: 20%;
        bottom: 15%;
        @include pad-width {
          display: none;
        }
        //手機
        @include pad-and-phone-width {
          display: none;
        }
      }
    }
  }
}
.home-sec-title {
  font-size: 22px;
  color: #52504d;
  border-bottom: 1px solid #000;
  position: relative;
  padding-bottom: 3px;
  padding-left: 24px;
  text-align: left;
  margin-bottom: 40px;
  //平板
  @include pad-width {
    margin: 10% auto;
  }
  //手機
  @include pad-and-phone-width {
    margin: 10% auto;
  }
  &:after {
    content: "";
    height: 10px;
    width: 10px;
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    border: 12px dashed #666;
    border-radius: 2px;
    border-bottom-color: #000;
    border-left-color: transparent;
    border-top-color: transparent;
    border-right-color: transparent;
  }
  .en-title {
    font-size: 45px;
    padding-left: 48px;
    // 平板
    @include pad-width {
      font-size: 22px;
    }
    //平板以下
    @include pad-and-phone-width {
      font-size: 22px;
    }
  }
}
[data-from] {
  margin-top: 180px;
  //平板
  @include pad-width {
    margin-top: 15%;
  }
  //小平板
  @include pad-and-phone-width {
    margin-top: 15%;
  }
}

.blog-sec {
  text-align: left;
  margin-top: 15px;
  //平板
  @include pad-width {
    margin-top: 0;
    margin-bottom: 50px;
  }
  //小平板
  @include pad-and-phone-width {
    margin-top: 0;
    margin-bottom: 50px;
    order: 2;
  }
  h1 {
    font-size: 34px;
    letter-spacing: 3.4px;
    margin-bottom: 14px;
    font-weight: 700;
  }
  p {
    font-size: 15px;
    margin-bottom: 10px;
    line-height: 25px;
  }
}
.home-news-row {
  margin-bottom: 170px;
  //平板
  @include pad-width {
    margin-bottom: 50px;
  }
  //小平板
  @include pad-and-phone-width {
    margin-bottom: 50px;
  }
  .news-img {
    margin-top: -80px;
    width: 100%;
    height: 375px;
    background-image: url("../../public/img/sila-about.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    // margin-top: -70px;
    // box-shadow: 50px -50px 0px 0px#e5e5e5;
    // border-radius: 50%;

    //小平板
    @include small-pad-width {
      max-width: 100%;
      height: calc(100vw -200px);
      margin: 0px auto 50px auto;
    }
    //手機
    @include phone-width {
      max-width: 100%;
      height: calc(100vw - 30px);
      margin: 0px auto 50px auto;
    }
  }
}

#carousel1 {
  outline: none;
  .carousel-indicators /deep/ li {
    outline: none;
    width: 10px;
    height: 10px;
    margin: 0 9px;
    border-radius: 50%;
    margin-bottom: 70px;
    // 平板
    @include pad-width {
      margin-bottom: 5%;
    }
    //平板以下
    @include pad-and-phone-width {
      margin-bottom: 5%;
    }
  }
}
.home-full-width,
.home-full-width-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 850px;
  background: url("../../public/img/bg_stylist.jpg") no-repeat bottom;
  background-size: cover;
  background-attachment: fixed;
  margin-bottom: 130px;
  // 電腦
  @include pc-width {
    min-height: 800px;
    margin-bottom: 10%;
  } // 平板
  @include pad-width {
    min-height: 700px;
    margin-bottom: 5%;
  }
  //平板以下
  @include pad-and-phone-width {
    min-height: 600px;
    margin-bottom: 5%;
  }
  .booking-img {
    //平板以下
    @include pad-and-phone-width {
      display: none;
    }
  }
  .booking-form {
    max-width: 480px;
    .input-row {
      input,
      .select {
        width: 480px;
        height: 56px;
        //平板
        @include pad-width {
          width: 100%;
        }
        //小平板
        @include small-pad-width {
          width: 100%;
        }
        //手機
        @include phone-width {
          width: 100%;
        }
      }
    }
  }
  #carousel2 {
    .carousel-item {
      display: inline-flex;
      width: 20%;
      margin: 0 2.5%;
      opacity: 0.5;
      align-items: stretch;
    }
    .carousel-item.active {
      opacity: 1;
    }
    .carousel-item-next {
      transform: none;
    }
  }
}

.home-full-width-form {
  margin-bottom: 0;
  //平板
  @include pad-width {
  }
  //小平板
  @include small-pad-width {
    min-height: 750px;
  }
  //手機
  @include phone-width {
    min-height: 750px;
  }
}
.blog-video-sec {
  .home-sec-title {
    margin: 0px auto 42px auto;
    // 平板
    @include pad-width {
      margin: 10% auto;
    }
    //平板以下
    @include pad-and-phone-width {
      margin: 10% auto;
    }
  }
  .home-article {
    text-align: left;
    margin: auto;
    margin-bottom: 175px;
    max-width: 370px;
    // 平板
    @include pad-width {
      margin-bottom: 80px;
    }
    //平板以下
    @include pad-and-phone-width {
      margin-bottom: 60px;
    }
    a {
      color: $main-T-Color;
      &:hover {
        text-decoration: none;
      }
      img {
        margin-bottom: 30px;
      }
      h3 {
        letter-spacing: 2.5px;
        margin-bottom: 6px;
        font-size: 25px;
        color: $main-T-Color;
        height: 50px;
        overflow: hidden;
      }
      h4 {
        overflow: hidden;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        letter-spacing: 0.8px;
        margin-bottom: 7px;
        width: 80%;
        line-height: 30px;
        color: $main-T-Color;
      }
    }
    .video-section {
      margin: 20px auto;
      box-shadow: 5px 5px 19px 0px #ebebeb;
      h1 {
        overflow: hidden;
        height: 100px;
        padding: 15px 10px;
      }
    }
  }
}

address {
  text-align: left;
  margin: 0px auto 70px auto;
  p {
    margin-bottom: 10px;
  }
  // 平板
  @include pad-width {
    margin: 10% auto;
  }
  //平板以下
  @include pad-and-phone-width {
    margin: 10% auto;
  }
}
.pd-0 {
  padding: 0;
}
.settimg-img {
  padding: 0;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
    //電腦版
    @include pc-width {
      height: auto;
    }
    //平板
    @include pad-width {
      height: auto;
    }
    //小平板
    @include small-pad-width {
      height: auto;
    }
    //手機
    @include phone-width {
      height: auto;
    }
  }
  .scrolltop-txt {
    background: linear-gradient(
      to bottom,
      rgba(68, 68, 68, 0) 0%,
      rgba(68, 68, 68, 0.01) 1%,
      rgba(68, 68, 68, 0.7) 18%,
      rgba(68, 68, 68, 1) 100%
    );
    padding-top: 18%;
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 101%;
    height: 100%;
    display: block;
    transition: all 0.3s ease;
    transform: translateY(100%);
    color: $submain-T-Color;
    //平板
    @include pad-width {
      padding-top: 7%;
    }
    //小平板
    @include small-pad-width {
      padding-top: 7%;
    }
    //手機
    @include phone-width {
      padding-top: 7%;
    }
  }
}
.slide-TextUp:hover .scrolltop-txt {
  transform: translateY(75%);
}

.fb-col {
  //平板
  @include pad-width {
    display: none;
  }
  //小平板
  @include small-pad-width {
    display: none;
  }
  //手機
  @include phone-width {
    display: none;
  }
}
.mt-title {
  margin-top: 78px;
}
</style>
