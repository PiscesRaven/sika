<template>
  <div>
    <SectionImg />
    <b-container class="container-body">
      <b-row class="news-row">
        <b-col
          v-for="list in NewsList"
          lg="4"
          sm="6"
          cols="12"
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
        <div class="pagination-nav">
          <b-pagination-nav
            base-url="#"
            :link-gen="linkGen"
            :number-of-pages="15"
            v-model="currentPage"
          />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import SectionImg from "@/components/SectionImg/SectionImg.vue";
export default {
  name: "Postlist",
  components: {
    SectionImg
  },
  data() {
    return {
      currentPage: 1,
      NewsList: [],
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
        }
      ]
    };
  },
  watch: {
    currentPage: function(pageNum) {
      this.getList(pageNum);
    },
    $route(to, from) {
      for (let i = 0; i < this.data.length; i++) {
        if (to.path == this.data[i].path) {
          this.getList();
          console.log("to");
        }
      }
    }
  },
  created() {
    this.getList();
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
          this.NewsList = res.data.data;
        });
    },
    linkGen(pageNum) {
      return "#/" + pageNum;
    }
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
