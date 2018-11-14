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
          <router-link to="/news/post">
            <b-card :title="list.title" :img-src="list.url" img-alt="Image" img-top tag="article">
              <p class="card-day">{{list.day}}</p>
              <p class="card-text">
                {{list.text}}
              </p>
            </b-card>
          </router-link>
        </b-col>
        <div class="pagination-nav">
          <b-pagination-nav base-url="#" :number-of-pages="15" v-model="currentPage" />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Postlist',
  data() {
    return {
      NewsList: [
        {
          id: '1',
          url: 'https://fakeimg.pl/270x200/000/',
          title: 'Blog Title',
          day: '2018-09-08',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, totam'
        },
        {
          id: '2',
          url: 'https://fakeimg.pl/270x200/000/',
          title: 'Blog Title',
          day: '2018-09-08',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, totam'
        },
        {
          id: '3',
          url: 'https://fakeimg.pl/270x200/000/',
          title: 'Blog Title',
          day: '2018-09-08',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, totam'
        },
        {
          id: '4',
          url: 'https://fakeimg.pl/270x200/000/',
          title: 'Blog Title',
          day: '2018-09-08',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, totam'
        },
        {
          id: '5',
          url: 'https://fakeimg.pl/270x200/000/',
          title: 'Blog Title',
          day: '2018-09-08',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, totam'
        },
        {
          id: '6',
          url: 'https://fakeimg.pl/270x200/000/',
          title: 'Blog Title',
          day: '2018-09-08',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, totam'
        },
        {
          id: '7',
          url: 'https://fakeimg.pl/270x200/000/',
          title: 'Blog Title',
          day: '2018-09-08',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, totam'
        },
        {
          id: '8',
          url: 'https://fakeimg.pl/270x200/000/',
          title: 'Blog Title',
          day: '2018-09-08',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, totam'
        },
        {
          id: '9',
          url: 'https://fakeimg.pl/270x200/000/',
          title: 'Blog Title',
          day: '2018-09-08',
          text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, totam'
        }
      ]
    }
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
