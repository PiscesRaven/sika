<template>
  <div>
    <!-- 文章區title圖片 -->
    <CardSectionImg />
    <b-container>
      <b-row
        v-for="article in post"
        class="article-row"
      >
        <b-col cols="12">
          <!-- 文章 title -->
          <h1 class="article-title">{{article.title}}</h1>
        </b-col>
        <b-col
          cols="6"
          class="article-date"
        >
          <!-- 文章 日期 -->
          <p>{{article.created_date}}</p>
        </b-col>
        <b-col
          cols="6"
          class="article-return"
        >
          <p>
            <a
              href="#"
              @click.prevent="goBack"
            >
              <span class="page-left"></span>回到上一頁
            </a>
          </p>
        </b-col>
        <!-- 文章 分享社群 -->
        <b-col
          cols="12"
          class="article-community"
        >
          <p>分享</p>
          <a :href="fbshare">
            <img
              src="../assets/icon/btn_facebook.svg"
              alt=""
              srcset=""
            >
          </a>
          <img
            src="../assets/icon/btn_twitter.svg"
            alt=""
            srcset=""
          >
          <img
            src="../assets/icon/btn_Instagram.svg"
            alt=""
            srcset=""
          >
        </b-col>
        <b-col cols="12">
          <img :src="article.cover_image">
        </b-col>
        <b-col cols="12">
          <h2 class="article-title-sec">{{article.title}}</h2>
        </b-col>
        <!-- 文章 內容 -->
        <b-col cols="12">
          <p
            class="article-content"
            v-html="article.content"
          ></p>
          <!-- {{article.content}} -->
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import axios from "axios";
import CardSectionImg from "@/components/SectionImg/SectionImg.vue";

export default {
  name: "article",
  components: {
    CardSectionImg
  },
  data() {
    return {
      post: [],
      fbshare: " https://www.facebook.com/sharer/sharer.php?u=" + document.URL,
      data: [
        {
          name: "newspost",
          api: "https://sika.idea-infinite.com/api/v1/news/content"
        },
        {
          name: "articlepost",
          api: "https://sika.idea-infinite.com/api/v1/article/content"
        }
      ]
    };
  },
  methods: {
    getUrl() {
      let vm = this;
      let url = document.URL;
      // console.log(url);
      let sliceposition = url.lastIndexOf("/");
      // console.log(sliceposition);
      let slicedata = url.slice(sliceposition + 1);
      // console.log(slicedata);
      vm.page = parseInt(slicedata);
      // console.log("url給的>>" + vm.page);
      vm.getList();
    },
    getList() {
      let vm = this;
      var api = "";
      for (let i = 0; i < vm.data.length; i++) {
        if (this.$route.name == vm.data[i].name) {
          vm.api = vm.data[i].api;
        }
      }
      axios
        .get(this.api, {
          params: {
            id: vm.page
          }
        })
        .then(res => {
          vm.post = [];
          vm.post.push(res.data.data);
          console.log(res.data.data);
        });
    },
    goBack() {
      this.$router.back();
    }
  },
  created: function() {
    this.getUrl();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/global.scss";
.section-img {
  background: url("../../public/img/Image.jpg") center no-repeat;
  height: 410px;
  margin-bottom: 125px;
}

.article-row {
  > div {
    // padding: 0;
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
        content: "";
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
