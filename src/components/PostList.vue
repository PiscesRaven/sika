<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
        <h1 class="page-title">優惠資訊 News</h1>
      </b-row>
    </b-container fluid>
    <b-container class="container-body">
      <b-row class="news-row">
        <b-col v-for="list in NewsList" lg="4" sm="6" cols="12">
          <router-link :to="{name:'優惠內文', params:{postid:list['id']}}">
            <b-card :title="list.title" :img-src="list.cover_image" img-alt="Image" img-top tag="article">
              <p class="card-day">{{list.created_date}}</p>
              <p class="card-text">
                {{list.text}}
              </p>
            </b-card>
          </router-link>
        </b-col>
        <div class="pagination-nav">
          <b-pagination-nav base-url="#" :link-gen="linkGen" :number-of-pages="15" v-model="currentPage" />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Postlist',
  data() {
    return {
      currentPage: 1,
      NewsList: []
    }
  },
  watch: {
    currentPage: function(pageNum) {
      this.getList(pageNum)
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList(pageNum = 1) {
      axios
        .get('https://sika.idea-infinite.com/api/v1/article/list', {
          params: {
            limit: 6,
            offset: (pageNum - 1) * 6
          }
        })
        .then(res => {
          console.log(res.data.data)
          this.NewsList = res.data.data
        })
    },
    linkGen(pageNum) {
      return '#/' + pageNum
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/global.scss';

.section-img {
  background: url('../../public/img/Image.jpg') right no-repeat;
  height: 410px;
  margin-bottom: 125px;
  //平板
  @include pad-width {
    margin-bottom: 10%;
  }
  //平板以下
  @include pad-and-phone-width {
    background: url('../../public/img/Image_pad.jpg') right no-repeat;
    margin-bottom: 10%;
    height: 288px;
  }
}
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
    //小平板
    @include small-pad-width {
      width: auto;
    }
    //手機
    @include phone-width {
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
