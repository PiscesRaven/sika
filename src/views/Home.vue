<template>
  <div>
    <HomeBranner />
    <b-container fluid class="imgshow-container">
      <b-row>
        <b-col lg="4" md="6" sm="12" cols="12" v-for="pic in imgshow" class="imgshow-col">
          <img :src="pic.imgurl">
        </b-col>
      </b-row>
    </b-container fluid>
    <!-- 最新優惠資訊 -->
    <b-container>
      <b-row>
        <b-col lg="4" md="6" sm="12" cols="12">
          <h2 class="home-sec-title">
            優惠資訊
            <span class="en-title">
              News
            </span>
          </h2>
        </b-col>
      </b-row>
      <b-row v-for="list in newBlog" class="news-row">
        <b-col lg="6" md="6" sm="12" cols="12">
          <div class="blog-sec">
            <p>{{list.title}}</p>
            <p>{{list.created_date}}</p>
            <router-link to="">more ></router-link>
          </div>
        </b-col>
        <b-col>
          <img :src="list.cover_image">
        </b-col>
      </b-row>
    </b-container>
    <!-- 設計師清單 -->
    <b-container fluid class="home-full-width">
      <b-row>
        <b-container>
          <b-row>
            <b-col md="4">
              <h2 class="home-sec-title">
                設計師
                <span class="en-title">
                  Stylist
                </span>
              </h2>
            </b-col>
            <!--設計師 stylist-->
            <HomeStylist />

          </b-row>
        </b-container>
      </b-row>
    </b-container fluid>
    <!-- 部落格與影片專區 -->
    <b-container class="blog-video-sec">
      <b-row>
        <b-col md="4">
          <h2 class="home-sec-title">
            流行趨勢
            <span class="en-title">
              Blog
            </span>
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12" cols="12" v-for="list in blog">
          <div class="home-article">
            <img :src="list.imgurl">
            <h3>{{list.title}}</h3>
            <h4>{{list.text}}</h4>
            <router-link to="#">more ></router-link>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <h2 class="home-sec-title">
            影片專區
            <span class="en-title">
              Video
            </span>
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4" sm="12" v-for="list in blog">
          <article class="home-article">
            <img :src="list.imgurl">
            <h3>{{list.title}}</h3>
            <h4>{{list.text}}</h4>
            <router-link to="#">more ></router-link>
          </article>
        </b-col>
      </b-row>
      </b-row>
    </b-container>

    <b-container fluid>
      <b-row>
        <b-col md="3" sm="6" v-for="list in productRow" class="pd-0">
          <article class="settimg-img slide-TextUp">
            <img :src="list.imgurl">
            <div class="scrolltop-txt">{{list.text}}</div>
          </article>
        </b-col>
      </b-row>
    </b-container fluid>
    <!-- 希卡位置 與FB -->
    <b-container>
      <b-row>
        <b-col md="4">
          <h2 class="home-sec-title">
            希卡位置
            <span class="en-title">
              Map
            </span>
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="6" md="12">
          <address>
            <p>Tel. 04 723 3405</p>
            <p>Add. 彰化縣彰化市民生南路23號</p>
          </address>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5458.063410319871!2d120.5419531651003!3d24.07263338772579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469388f1b64e687%3A0xecb0929a6bd94e5!2z5biM5Y2hIFNpa2EgaGFpciBzYWxvbg!5e0!3m2!1szh-TW!2stw!4v1542599832447" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </b-col>
        <b-col class="fb-col">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsikahairsalon%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" width="400" height="480" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </b-col>

      </b-row>
      <b-row>
        <b-col md="4">
          <h2 class="home-sec-title">
            線上預約
            <span class="en-title">
              Booking
            </span>
          </h2>

        </b-col>
      </b-row>

    </b-container>
    <b-container fluid class="home-full-width">
      <b-row>
        <b-col cols="6">
          <img src="../../public/img/img_booking_home.jpg" alt="" srcset="">
        </b-col>
        <b-col cols="6">
          <BookingFrom />
        </b-col>
      </b-row>
    </b-container fluid>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import HomeBranner from '@/components/Home/HomeBanner.vue'
import HomeStylist from '@/components/Home/HomeStylist.vue'
import BookingFrom from '@/components/From.vue'

export default {
  name: 'home',
  components: {
    HomeBranner,
    HomeStylist,
    BookingFrom
  },
  data() {
    return {
      newBlog: [],
      imgshow: [
        { id: '1', imgurl: 'https://fakeimg.pl/640x500/000/fff' },
        { id: '2', imgurl: 'https://fakeimg.pl/640x500/000/fff' },
        { id: '3', imgurl: 'https://fakeimg.pl/640x500/000/fff' },
        { id: '4', imgurl: 'https://fakeimg.pl/640x500/000/fff' },
        { id: '5', imgurl: 'https://fakeimg.pl/640x500/000/fff' },
        { id: '6', imgurl: 'https://fakeimg.pl/640x500/000/fff' }
      ],
      blog: [
        {
          id: '1',
          imgurl: 'https://fakeimg.pl/370x310/000/fff',
          title: '文章Title',
          text:
            'text 文章內文,text 文章內文,text 文章內文,text 文章內文,text 文章內文,text 文章內文'
        },
        {
          id: '2',
          imgurl: 'https://fakeimg.pl/370x310/000/fff',
          title: '文章Title',
          text: 'text 文章內聞'
        },
        {
          id: '3',
          imgurl: 'https://fakeimg.pl/370x310/000/fff',
          title: '文章Title',
          text: 'text 文章內聞'
        }
      ],
      productRow: [
        { id: '1', imgurl: 'https://fakeimg.pl/660x480/000/fff', text: 'TEXT' },
        { id: '2', imgurl: 'https://fakeimg.pl/660x480/000/fff', text: 'TEXT' },
        { id: '3', imgurl: 'https://fakeimg.pl/660x480/000/fff', text: 'TEXT' },
        { id: '4', imgurl: 'https://fakeimg.pl/660x480/000/fff', text: 'TEXT' }
      ]
    }
  },
  created() {
    this.getBlogList()
  },
  methods: {
    getBlogList() {
      axios
        .get('https://sika.idea-infinite.com/api/v1/news/list', {
          params: {
            limit: 1,
            offset: 0
          }
        })
        .then(res => {
          console.log(res.data.data)
          this.newBlog = res.data.data
        })
    }
  }
}
</script>
<style lang="scss">
@import '../assets/scss/global.scss';
.imgshow-container {
  margin-bottom: 110px;
  .imgshow-col {
    padding: 0;
    img {
      display: block;
    }
  }
}
.home-sec-title {
  font-size: 22px;
  color: #52504d;
  border-bottom: 1px solid #000;
  position: relative;
  padding-bottom: 3px;
  margin: 70px auto;
  &:after {
    content: '';
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
  }
}

.blog-sec {
  margin-top: 80px;
  width: 70%;

  //平板
  @include pad-width {
    width: 100%;
    margin-bottom: 50px;
    text-align: center;
  }
  //小平板
  @include small-pad-width {
    width: 100%;
    margin-bottom: 50px;
    text-align: center;
  }
  //手機
  @include phone-width {
    width: 100%;
    margin-bottom: 50px;
    text-align: center;
  }
}
.news-row {
  margin-bottom: 170px;
  img {
    box-shadow: 50px -50px 0px 0px#e5e5e5;
  }
}

#carousel1 {
  .carousel-indicators /deep/ li {
    width: 10px;
    height: 10px;
    margin: 0 9px;
    border-radius: 50%;
  }
}
.home-full-width {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 774px;
  background: url('../../public/img/bg_stylist.jpg') no-repeat center;
  background-attachment: fixed;
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
.blog-video-sec {
  .home-sec-title {
    margin: 120px auto 80px auto;
  }
  .home-article {
    text-align: left;
    margin-bottom: 35px;
    img {
      margin-bottom: 30px;
    }
    h3 {
      letter-spacing: 2.5px;
      margin-bottom: 6px;
    }
    h4 {
      overflow: hidden;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      letter-spacing: 0.8px;
      margin-bottom: 7px;
      width: 80%;
      line-height: 18px;
    }
  }
}

address {
  text-align: left;
  margin: 70px auto;
  p {
    margin-bottom: 10px;
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
    height: 670px;
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
      359deg,
      rgba(167, 167, 167, 0),
      rgba(119, 118, 116, 0),
      #454444
    );
    padding-top: 18%;
    color: $submain-T-Color;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
    transition: all 0.3s ease;
    transform: translateY(100%);
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
</style>
