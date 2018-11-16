<template>
  <div>
    <HomeBranner />
    <b-container fluid>
      <b-row>
        <b-col lg="4" md="6" sm="12" cols="12" v-for="pic in imgshow" class="imgshow-col">
          <img :src="pic.imgurl">
        </b-col>
      </b-row>
    </b-container fluid>
    <b-container>
      <b-row v-for="list in newBlog">
        <b-col lg="6" md="6" sm="12" cols="12">
          <div class="blog-sec">
            <h2 class="home-sec-title">
              優惠資訊
              <span class="en-title">
                News
              </span>
            </h2>
            {{list.title}}
            {{list.created_date}}
          </div>
        </b-col>
        <b-col>
          <img :src="list.cover_image">
        </b-col>
      </b-row>

    </b-container>
    <b-container fluid>
      <b-row>
        <b-col>
          <h2 class="home-sec-title">
            設計師
            <span class="en-title">
              Stylist
            </span>
          </h2>

        </b-col>
        !!component的幻燈片
      </b-row>
    </b-container fluid>
    <b-container>
      <b-row>
        <b-col>
          <h2 class="home-sec-title">
            流行趨勢
            <span class="en-title">
              Blog
            </span>
          </h2>
        </b-col>
        <b-col cols="4">
          流行趨勢 Blog文章
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2 class="home-sec-title">
            影片專區
            <span class="en-title">
              Video
            </span>
          </h2>

        </b-col>
        <b-col cols="4">
          影片專區 Video
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col>
          燙髮注意事項
        </b-col>
        !!component的幻燈片
      </b-row>
    </b-container fluid>

    <b-container>
      <b-row>
        <b-col>
          <h2 class="home-sec-title">
            希卡位置
            <span class="en-title">
              Map
            </span>
          </h2>
        </b-col>
        <b-col cols="4">
          Tel. 04 723 3405
          Add. 彰化縣彰化市民生南路23號
          Google Map
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <!-- <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsikahairsalon%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe> -->
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2 class="home-sec-title">
            線上預約
            <span class="en-title">
              Booking
            </span>
          </h2>

        </b-col>
      </b-row>

    </b-container>
    <b-container fluid>
      <b-row>
        <b-col cols="6"></b-col>
        <b-col cols="6">
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

export default {
  name: 'home',
  components: {
    HomeBranner
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
<style lang="scss" scoped>
.imgshow-col {
  padding: 0;
  img {
    display: block;
  }
}
.home-sec-title {
  font-size: 22px;
  color: #52504d;
  border-bottom: 1px solid #000;
  position: relative;
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
</style>
