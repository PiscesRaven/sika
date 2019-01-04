<template>
  <div>
    <Card v-if="$route.name == 'news'" />
    <Card1 v-if="$route.name == 'article'" />
    <Card2 v-if="$route.name == 'video'" />
    <Card3 v-if="$route.name == 'service'" />
    <b-container class="container-body">
      <b-row class="news-row">
        <b-col
          v-for="list in postList"
          lg="4"
          sm="6"
          cols="12"
          v-if="$route.name !== 'video'"
        >
          <router-link :to="{name:path, params:{postid:list['id']}}">
            <article
              class="card"
              v-if=" $route.name == 'service'"
            >
              <div
                class="post-img"
                :style="{backgroundImage: 'url(' + list.cover_image+')'}"
              ></div>
              <div class="card-body">
                <h4 class="card-title">{{list.title}}</h4>
                <p class="card-day">{{list.created_date}}</p>
                <p class="card-text">{{list.description}}</p>
              </div>
            </article>
            <b-card
              v-if="$route.name == 'news' || $route.name == 'article'"
              :title="list.title"
              :img-src="list.cover_image"
              img-alt="Image"
              img-top
              tag="article"
            >
              <p class="card-day">{{list.created_date}}</p>
              <p class="card-text">{{list.description}}</p>
            </b-card>
          </router-link>

        </b-col>

        <b-col
          v-if="$route.name == 'video'"
          v-for="item in postList"
          lg="4"
          md="12"
          sm="12"
          cols="12"
        >
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
        </b-col>
        <div class="pagination-nav">
          <b-pagination-nav
            base-url="/"
            :link-gen="linkGen"
            :number-of-pages="total"
            v-model="currentPage"
          />
        </div>
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
  name: "Postlist",
  components: {
    Card,
    Card1,
    Card2,
    Card3
  },
  data() {
    return {
      currentPage: 1,
      PostList: [],
      numPages: 0,
      total: 0,
      data: [
        {
          path: "/news", //現在路徑
          name: "news", //這個路徑name
          topath: "newspost", //前往的路徑
          api: `${process.env.VUE_APP_APIPATH}/news/list`
        },
        {
          path: "/article",
          name: "article",
          topath: "articlepost",
          api: `${process.env.VUE_APP_APIPATH}/article/list`
        },
        {
          path: "/service",
          name: "service",
          topath: "servicepost",
          api: `${process.env.VUE_APP_APIPATH}/service/list`
        },
        {
          path: "/video",
          name: "video",
          api: `${process.env.VUE_APP_APIPATH}/video`
        }
      ]
    };
  },
  methods: {
    getList(pageNum = 1) {
      let vm = this;
      var api = "";
      for (let i = 0; i < vm.data.length; i++) {
        if (vm.data[i].name == this.$route.name) {
          vm.api = vm.data[i].api;
          vm.path = vm.data[i].topath;
        }
      }
      axios
        .get(this.api, {
          params: {
            limit: 6,
            offset: (pageNum - 1) * 6
          }
        })
        .then(res => {
          vm.PostList = res.data.data;
          vm.numPages = res.data.total;
          vm.total = Math.ceil(vm.numPages / 6);
        });
    },
    linkGen(pageNum) {
      return "#/" + pageNum;
    }
  },
  computed: {},
  watch: {
    currentPage: function(pageNum) {
      this.getList(pageNum);
    },
    $route(to, from) {
      let vm = this;
      if (to.path !== from.path) {
        vm.getList(1);
      }
    }
  },
  mounted() {
    this.getList();
  },
  computed: {
    postList() {
      let vm = this;
      for (let i = 0; i < vm.PostList.length; i++) {
        vm.PostList[i].description =
          vm.PostList[i].description.substring(0, 30) + "...";
      }
      return vm.PostList;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.post-img {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
}
.news-row {
  a {
    max-height: 425px;
  }
  .card {
    max-width: 350px;
    text-align: left;
    margin-bottom: 30px;
    border: none;
    border-radius: 0px;
    //平板
    @include pad-width {
      width: auto;
    }
    //平板以下
    @include pad-and-phone-width {
      margin: 0 auto 10% auto;
    }

    .card-body {
      color: $main-T-Color;
      background: #d5d5d5;
      text-decoration: none;
      .card-title {
        font-size: 20px;
        font-weight: 700;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        // -webkit-line-clamp: 2;
        // display: -webkit-box;
        // -webkit-box-orient: vertical;
        line-height: 20px;
        height: 20px;
      }
      .card-day {
        color: #707070;
      }
      .card-text {
        overflow: hidden;
        //  white-space: nowrap;
        // -webkit-line-clamp: 2;
        // text-overflow: ellipsis;
        // display: -webkit-box;
        // -webkit-box-orient: vertical;
        line-height: 20px;
        height: 40px;
      }
    }
  }
  .video-section {
    margin-bottom: 30px;
    box-shadow: 5px 5px 19px 0px #ebebeb;
    //平板
    @include pad-width {
      margin-bottom: 30px;
    }
    //平板以下
    @include pad-and-phone-width {
      margin: 0 auto 10% auto;
    }
    h1 {
      height: 100px;
      padding: 15px 10px;
      text-align: left;
    }
  }
}

.pagination-nav {
  nav {
    @media screen and (max-width: $pc-media) {
      display: inline-block;
    }
  }
  margin-top: 70px;
  width: 100%;
  margin-bottom: 140px;
  //平板以下
  @include pad-and-phone-width {
    margin-bottom: 70px;
  }
}
</style>
