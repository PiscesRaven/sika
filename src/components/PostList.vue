<template>
  <div>
    <Card v-if="$route.name == '優惠資訊'" />
    <Card1 v-if="$route.name == '流行趨勢 Blog'" />
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
import Card from "@/components/Card/Card.vue";
import Card1 from "@/components/Card/Card1.vue";
export default {
  name: "Postlist",
  components: {
    Card,
    Card1
  },
  data() {
    return {
      currentPage: 1,
      NewsList: []
    };
  },
  watch: {
    currentPage: function(pageNum) {
      this.getList(pageNum);
    },
    $route(to, from) {
      if (to.path == "/news") {
        this.getList();
      }
      if (to.path == "/bloglist") {
        this.getList();
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
      if (this.$route.name == "優惠資訊") {
        vm.api = "https://sika.idea-infinite.com/api/v1/news/list";
        this.path = "優惠內文";
        // console.log("優惠資訊API");
      }
      if (this.$route.name == "流行趨勢 Blog") {
        vm.api = "https://sika.idea-infinite.com/api/v1/article/list";
        this.path = "Blog 內文";
        // console.log("流行趨勢 Blog API");
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
