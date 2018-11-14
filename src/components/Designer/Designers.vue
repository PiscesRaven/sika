<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
        <h1 class="page-title">設計師 Stylist</h1>
      </b-row>
    </b-container fluid>

    <b-container>
      <b-row>
        <b-col>
          <ul class="designer-list">
            <li v-for="item in DesignerName">{{item.name}}</li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="designer-row">
        <b-col v-for="list in DesignerName" xl="3" lg="4" sm="6" cols="12">
          <router-link to="/DesignerInfo">
            <b-card :title="list.name" :img-src="list.pic" img-alt="Image" img-top tag="article">
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
              <div class="card-social">
                <a :href="list.facebook">
                  <img src="../../assets/icon/btn_fb.svg" alt="" srcset="">
                </a>
                <a :href="list.IG">
                  <img src="../../assets/icon/btn_Instagram.svg" alt="" srcset="">
                </a>
              </div>
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
  name: 'Designers',
  data() {
    return {
      DesignerName: [
        {
          name: 'ebbby',
          pic: 'https://fakeimg.pl/270x200/000/',
          facebook: 'https://www.facebook.com/ideainfinitey/',
          IG: 'https://www.instagram.com/idea_infinite/'
        },
        {
          name: 'lili',
          pic: 'https://fakeimg.pl/270x200/000/',
          facebook: 'https://www.facebook.com/ideainfinitey/',
          IG: 'https://www.instagram.com/idea_infinite/'
        },
        {
          name: 'sam ',
          pic: 'https://fakeimg.pl/270x200/000/',
          facebook: 'https://www.facebook.com/ideainfinitey/',
          IG: 'https://www.instagram.com/idea_infinite/'
        },
        {
          name: 'mary',
          pic: 'https://fakeimg.pl/270x200/000/',
          facebook: 'https://www.facebook.com/ideainfinitey/',
          IG: 'https://www.instagram.com/idea_infinite/'
        },
        {
          name: 'kerven',
          pic: 'https://fakeimg.pl/270x200/000/',
          facebook: 'https://www.facebook.com/ideainfinitey/',
          IG: 'https://www.instagram.com/idea_infinite/'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/scss/global.scss';
.section-img {
  background: url('../../../public/img/img_Stylist.jpg') center no-repeat;
  height: 410px;
  margin-bottom: 125px;
}

.designer-list {
  display: inline-flex;
  margin-top: 66px;
  margin-bottom: 36px;
  //平板
  @include pad-width {
    display: flex;
  }
  //小平板
  @include small-pad-width {
    display: flex;
  }
  //手機
  @include phone-width {
    display: flex;
  }
  li {
    margin: auto 53px;
    //平板
    @include pad-width {
      margin: 5% auto;
    }
    //小平板
    @include small-pad-width {
      margin: 5% auto;
    }
    //手機
    @include phone-width {
      margin: 5% auto;
    }
  }
}
.designer-row {
  max-width: 1200px;

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
        text-align: left;
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }

      .card-social {
        display: flex;
        justify-content: center;
        > a {
          display: block;
          margin: 5px 15px;
          img {
            width: 20px;
            height: 20px;
          }
        }
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
