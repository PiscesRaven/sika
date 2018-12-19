<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
        <h1 class="page-title">設計師 Stylist</h1>
      </b-row>
    </b-container fluid>
    <b-container>
      <b-row class="designer-row">
        <b-col
          v-for="list in DesignerList"
          xl="3"
          lg="4"
          sm="6"
          cols="12"
        >
          <router-link :to="{name:'designerinfo', params:{postid:list['id']}}">
            <b-card
              :title="list.name"
              :img-src="list.image_pc"
              :img-alt="list.name"
              img-top
              tag="article"
            >
              <p class="card-text">
                {{list.description}}
              </p>

            </b-card>
          </router-link>
          <div class="card-social">
            <a :href="list.facebook_link">
              <img
                src="../../assets/icon/btn_fb_w.svg"
                alt=""
                srcset=""
              >
            </a>
            <a :href="list.instagram_link">
              <img
                src="../../assets/icon/btn_Instagram_w.svg"
                alt=""
                srcset=""
              >
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Designers",
  data() {
    return {
      DesignerList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      axios.get("https://sika.idea-infinite.com/api/v1/designer").then(res => {
        // console.log(res.data.data)
        this.DesignerList = res.data.data;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/global.scss";
.section-img {
  background: url("../../../public/img/img_Stylist.jpg") center no-repeat;
  height: 410px;
  margin-bottom: 64px;
  background-size: cover;

  //平板
  @include pad-width {
    margin-bottom: 18px;
  }
  //平板以下
  @include pad-and-phone-width {
    background: url("../../../public/img/img_Stylist_pad.jpg") center no-repeat;
    margin-bottom: 18px;
    height: 288px;
  }
}

.designer-list {
  display: inline-flex;
  margin-top: 85px;
  margin-bottom: 36px;
  //平板
  @include pad-width {
    margin-top: 36px;
  }
  //小平板
  @include small-pad-width {
    margin-top: 36px;
  }
  //手機
  @include phone-width {
    margin-top: 36px;
  }
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
    a {
      color: $main-T-Color;
    }
  }
}
.designer-row {
  max-width: 1200px;
  a {
    &:hover {
      text-decoration: none;
    }
  }

  .card {
    position: relative;
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
      padding-bottom: 4%;
    }
    .card-body {
      color: $submain-T-Color;
      background: #707070;
      text-decoration: none;
      min-height: 135px;

      .card-title {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
      }
      .card-day {
        color: #707070;
      }
      .card-text {
        text-align: left;
        overflow: hidden;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        line-height: 20px;
      }
    }
  }
  .card-social {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 28%;
    //平板
    @include pad-width {
      bottom: 23.5%;
    }
    //小平板
    @include small-pad-width {
      bottom: 25%;
    }
    //手機
    @include phone-width {
      padding: 15px;
      bottom: 18.5%;
    }
    @media screen and (max-width: 480px) {
      bottom: 21%;
    }
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
