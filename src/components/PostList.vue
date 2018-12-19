<template>
  <div>
    <Card v-if="$route.name == 'news'" />
    <Card1 v-if="$route.name == 'article'" />
    <Card2 v-if="$route.name == 'video'" />
    <Card3 v-if="$route.name == 'products'" />
    <b-container class="container-body">
      <b-row class="news-row">
        <b-col
          v-for="list in PostList"
          lg="4"
          sm="6"
          cols="12"
          v-if="$route.name !== 'video' && $route.name !== 'products'"
        >
          <router-link :to="{name:path, params:{postid:list['id']}}">
            <b-card
              :title="list.title"
              :img-src="list.cover_image"
              img-alt="Image"
              img-top
              tag="article"
            >
              <p class="card-day">{{list.created_date}}</p>
              <p class="card-text">
                {{list.description}}
              </p>
            </b-card>
          </router-link>
        </b-col>

        <b-col
          v-if="$route.name == 'video'"
          v-for="item in PostList"
          lg="6"
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

        <b-col
          v-for="list in PostList"
          lg="4"
          sm="6"
          cols="12"
          v-if=" $route.name == 'products'"
        >
          <b-card
            :title="list.title"
            :img-src="list.cover_image"
            img-alt="Image"
            img-top
            tag="article"
          >
            <p class="card-day">{{list.created_date}}</p>
            <p class="card-text">
              {{list.description}}
            </p>
          </b-card>
        </b-col>

        <div class="pagination-nav">
          <b-pagination-nav
            base-url="#"
            :link-gen="linkGen"
            :number-of-pages="totalPage"
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
      total: "",
      data: [
        {
          path: "/news", //現在路徑
          name: "news", //這個路徑name
          topath: "newspost", //前往的路徑
          api: "https://sika.idea-infinite.com/api/v1/news/list"
        },
        {
          path: "/article",
          name: "article",
          topath: "articlepost",
          api: "https://sika.idea-infinite.com/api/v1/article/list"
        },
        {
          path: "/products",
          name: "products",
          topath: "productspost",
          api: "https://sika.idea-infinite.com/api/v1/products"
        },
        {
          path: "/video",
          name: "video",
          api: "https://sika.idea-infinite.com/api/v1/video"
        }
      ]
    };
  },
  methods: {
    getList(pageNum) {
      let vm = this;
      var api = "";
      for (let i = 0; i < vm.data.length; i++) {
        if (vm.data[i].name == this.$route.name) {
          vm.api = vm.data[i].api;
          vm.path = vm.data[i].topath;
        }
      }

      console.log("getList傳入" + pageNum);
      axios
        .get(this.api, {
          params: {
            limit: 6,
            offset: (pageNum - 1) * 6
          }
        })
        .then(res => {
          this.PostList = res.data.data;
          this.numPages = res.data.total;
          this.total = Math.ceil(this.numPages / 6);
        });
    },
    linkGen(pageNum) {
      return "#/" + pageNum;
    }
  },
  computed: {
    totalPage() {
      return this.total;
    }
  },
  watch: {
    currentPage: function(pageNum) {
      this.getList(pageNum);
      console.log("currentPage 變換");
    },
    $route(to, from) {
      let vm = this;

      for (let i = 0; i < this.data.length; i++) {
        if (to.path == this.data[i].path) {
          console.log("$route變換 to的");
          this.getList();
        }
      }
      for (let i = 0; i < this.data.length; i++) {
        if (from.path == this.data[i].path) {
          console.log("$route變換 from的");
          this.getList(vm.currentPage);
        }
      }
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/global.scss";
.news-row {
  max-width: 900px;
  margin: auto;
  .card {
    width: 270px;
    text-align: left;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border: none;
    border-radius: 0px;
    //平板
    @include pad-width {
      width: auto;
    }
    //平板以下
    @include pad-and-phone-width {
      width: auto;
    }

    .card-body {
      color: $main-T-Color;
      background: #d5d5d5;
      text-decoration: none;
      .card-title {
        font-size: 20px;
        font-weight: 700;
      }
      .card-day {
        color: #707070;
      }
      .card-text {
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        line-height: 20px;
      }
    }
  }
  .video-section {
    margin: 70px auto;
    box-shadow: 5px 5px 19px 0px #ebebeb;
    h1 {
      height: 100px;
      padding: 15px 10px;
    }
  }
}

.pagination-nav {
  nav {
    @media screen and (max-width: $pc-media) {
      display: inline-block;
    }
  }
  width: 100%;
  margin-bottom: 140px;
}
</style>
