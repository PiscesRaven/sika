<template>
  <div>
    <!-- 文章區title圖片 -->
    <Card v-if="this.$route.name == 'newspost'" />
    <Card1 v-if="this.$route.name == 'articlepost'" />
    <Card3 v-if="this.$route.name == 'servicepost'" />
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
          >
          </p>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>
<script>
import axios from "axios";
import Card from "@/components/SectionImg/Card.vue";
import Card1 from "@/components/SectionImg/Card1.vue";
import Card2 from "@/components/SectionImg/Card2.vue";
import Card3 from "@/components/SectionImg/Card3.vue";

export default {
  name: "ArticleContact",
  components: {
    Card,
    Card1,
    Card2,
    Card3
  },
  data() {
    return {
      post: [],
      data: [
        {
          name: "newspost",
          api: `${process.env.VUE_APP_APIPATH}/news/content`
        },
        {
          name: "articlepost",
          api: `${process.env.VUE_APP_APIPATH}/article/content`
        },
        {
          name: "servicepost",
          api: `${process.env.VUE_APP_APIPATH}/products/content`
        }
      ]
    };
  },
  mounted() {
    let scriptIg = document.createElement("script");
    scriptIg.src = "https://www.instagram.com/embed.js";
    console.log(scriptIg);
    document.getElementsByTagName("head")[0].appendChild(scriptIg);
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
.section-img {
  background: url("../../public/img/Image.jpg") center no-repeat;
  height: 410px;
  margin-bottom: 125px;
  background-size: cover;
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
    margin-bottom: 70px;
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
}
</style>
