<template>
  <div>
    <b-container fluid>
      <b-row class="section-img"> </b-row>
    </b-container fluid>
    <b-container>
      <b-row v-for="article in post" class="article-row">
        <b-col cols="12">
          <h1 class="article-title">{{article.title}}</h1>
        </b-col>
        <b-col cols="6" class="article-date">
          <p>{{article.created_date}}</p>
        </b-col>
        <b-col cols="6" class="article-return">
          <p>
            <router-link to="/news">
              <span class="page-left"></span>回到上一頁</router-link>
          </p>
        </b-col>
        <b-col cols="12" class="article-community">
          <p>分享</p>
          <img src="../assets/icon/btn_facebook.svg" alt="" srcset="">
          <img src="../assets/icon/btn_twitter.svg" alt="" srcset="">
          <img src="../assets/icon/btn_Instagram.svg" alt="" srcset="">
          <img src="../assets/icon/btn_youtube.svg" alt="" srcset="">
        </b-col>
        <b-col cols="12">
          <img :src="article.cover_image">
        </b-col>
        <b-col cols="12">
          <h2 class="article-title-sec">{{article.title}}</h2>
        </b-col>
        <b-col cols="12">
          <p class="article-content">{{article.description}}</p>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Blog',
  data() {
    return {
      post: [],
      selectStatus: false,
      selectData: '請選擇一個選項'
    }
  },
  methods: {
    getUrl() {
      let vm = this
      let url = document.URL
      console.log(url)
      let sliceposition = url.lastIndexOf('/')
      console.log(sliceposition)
      let slicedata = url.slice(sliceposition + 1)
      console.log(slicedata)
      vm.page = parseInt(slicedata)
      console.log('url給的>>' + vm.page)
      vm.getList()
    },
    getList() {
      let vm = this
      axios
        .get('https://sika.idea-infinite.com/api/v1/article/content', {
          params: {
            id: vm.page
          }
        })
        .then(res => {
          vm.post = []
          vm.post.push(res.data.data)
        })
    }
  },
  created: function() {
    this.getUrl()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/global.scss';
.section-img {
  background: url('../../public/img/Image.jpg') center no-repeat;
  height: 410px;
  margin-bottom: 125px;
}

.article-row {
  > div {
    padding: 0;
  }
  text-align: left;
  .article-title {
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 700;
  }
  .article-date,
  .article-return {
    padding-bottom: 15px;
    border-bottom: 2px solid #707070;
  }

  .article-return {
    text-align: right;
    a {
      color: $main-T-Color;
    }
    .page-left {
      border-right: 3px solid #000;
      border-top: 3px solid #000;
      height: 16px;
      width: 16px;
      transform: rotate(-135deg);
      display: inline-block;
      margin-right: 15px;
      &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 3px;
        background: #000;
        top: 6px;
        left: -4px;
        transform: rotate(-45deg);
      }
    }
  }
  .article-date {
    font-size: 14px;
  }
  img {
    display: block;
    margin: auto;
  }
  .article-title-sec {
    margin: 90px auto 24px auto;
    font-size: 40px;
    text-align: center;
  }
  .article-content {
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 90px;
  }
  .article-community {
    margin: 15px auto;
    img {
      display: inline;
      margin: 10px 10px 5% 0;
      width: 32px;
      background: $submain-Bg-Color;
      color: $main-T-Color;
    }
  }
}
</style>
