<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
      </b-row>
    </b-container fluid>
    <b-container>
      <b-row>
        <div class="return-row">
          <span class="page-left"></span>
          <a
            href="#"
            @click.prevent="goBack"
          >回到上一頁
          </a>
        </div>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div
            class="designer-card"
            v-for="item in designer"
          >
            <div class="designer-img">
              <!--  :style="{backgroundImage:'url('+item.image_pc+')'}" -->
              <img
                :src="item.image_pc"
                alt=""
              >
            </div>
            <div class="designer-info">
              <div class="info-block">
                <h1>Name {{item.name}}</h1>
                <h4>資料簡介:{{item.description}}</h4>
              </div>

              <div class="info-block">
                <div class="contact-icons">
                  <a :href="item.instagram_link">
                    <font-awesome-icon
                      :icon="['fab','instagram']"
                      size="2x"
                    />
                  </a>
                  <a :href="item.facebook_link">
                    <font-awesome-icon
                      :icon="['fab','facebook-f']"
                      size="2x"
                    />
                  </a>
                  <a :href="item.line_link">
                    <font-awesome-icon
                      :icon="['fab','line']"
                      size="2x"
                    />
                  </a>
                </div>
                <div class="designer-contact">
                  <h5>T: {{item.phone}}</h5>
                  <h5>E: {{item.email}}</h5>
                </div>
              </div>
            </div>
          </div>
        </b-col>

      </b-row>
      <h3>
        精選作品 Feature
      </h3>
      <!-- <div
        class="designer-card"
        v-for="item in designer"
      >
        <b-row>
          <b-col
            lg="6"
            md="12"
            sm="12"
            cols="12"
          >
            <img :src="item.image_pc">
          </b-col>
          <b-col
            lg="6"
            md="12"
            sm="12"
            cols="12"
          >
            <div class="designer-info">
              <div class="info-block">
                <h1>Name {{item.name}}</h1>
                <h4>資料簡介:{{item.description}}</h4>
              </div>

              <div class="info-block">
                <div class="contact-icons">
                  <a :href="item.instagram_link">
                    <font-awesome-icon
                      :icon="['fab','instagram']"
                      size="2x"
                    />
                  </a>
                  <a :href="item.facebook_link">
                    <font-awesome-icon
                      :icon="['fab','facebook-f']"
                      size="2x"
                    />
                  </a>
                  <a :href="item.line_link">
                    <font-awesome-icon
                      :icon="['fab','line']"
                      size="2x"
                    />
                  </a>
                </div>
                <div class="designer-contact">
                  <h5>T: {{item.phone}}</h5>
                  <h5>E: {{item.email}}</h5>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <h3>
          精選作品 Feature
        </h3>
      </div> -->
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col
          md="3"
          sm="6"
          cols="12"
          class="work-row"
          v-for="pic in works"
        >
          <img :src="pic.image">
        </b-col>
      </b-row>
    </b-container fluid>
    <b-container>
      <b-row>
        <b-col
          cols="12"
          class="return-work"
        >
          <router-link to="/hairstyle">
            <span class="page-left"></span> 作品集觀看更多
          </router-link>
        </b-col>
        <b-col v-for="item in designer">
          <p v-html="item.content"></p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DersinerInfo",
  data() {
    return {
      designer: [],
      works: []
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
      axios
        .get(`${process.env.VUE_APP_APIPATH}/designer/content`, {
          params: {
            id: vm.page
          }
        })
        .then(res => {
          vm.designer.push(res.data.data);
          vm.works = res.data.data.works;
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
  background: url("../../../public/img/img_Stylist.jpg") center center no-repeat;
  background-size: cover;
  height: 410px;
  margin-bottom: 125px;
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

h3 {
  font-size: 32px;
  text-align: center;
  line-height: 1.47;
  margin-top: 172px;
  margin-bottom: 60px;
}
p {
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  margin-top: 24px;
  margin-bottom: 120px;
}
.page-left {
  border-right: 3px solid $main-T-Color;
  border-top: 3px solid $main-T-Color;
  height: 16px;
  width: 16px;
  transform: rotate(-135deg);
  display: inline-block;
  margin-right: 15px;
  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 3px;
    background: $main-Bg-Color;
    top: 6px;
    left: -4px;
    transform: rotate(-45deg);
  }
}
.return-row {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  margin-bottom: 25px;
  > a {
    color: #000;
  }
}

.designer-card {
  display: flex;
  flex-wrap: wrap;
  .designer-img {
    flex: 1 0 50%;
    width: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    //平板
    @include pad-width {
      flex: 1 0 100%;
    }
    //平板以下
    @include pad-and-phone-width {
      flex: 1 0 100%;
      margin: 0 -15px;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
  .designer-info {
    flex: 1 0 50%;
    background: $main-Bg-Color;
    color: $submain-T-Color;
    padding: 100px;
    text-align: left;
    //電腦版
    @include pc-width {
      padding: 85px;
    }
    //平板
    @include pad-width {
      padding: 20px;
      flex: 1 0 100%;
    }
    //小平板
    @include small-pad-width {
      padding: 15px;
      margin: -15px;
      flex: 1 0 100%;
    }
    //手機
    @include phone-width {
      padding: 10px;
      margin: -15px;
      flex: 1 0 100%;
    }
    .info-block {
      text-align: center;
      border-bottom: 1px solid $submain-Bg-Color;
      padding: 0 25px 16px 25px;
      h1 {
        font-size: 40px;
        line-height: 1.15;
      }
      h4 {
        font-size: 20px;
        line-height: 1.5;
      }
    }
    .contact-icons {
      display: inline-flex;
      margin-top: 75px;
      height: 100px;
      justify-content: center;
      width: 100%;
      a {
        color: $submain-T-Color;
      }
      svg {
        margin: 0 15px;
      }
    }
    .designer-contact {
      text-align: center;
      font-size: 20px;
      line-height: 1.5;
      //平板
      @include pad-width {
        padding: 20px;
      }
      //小平板
      @include small-pad-width {
        padding: 15px;
      }
      //手機
      @include phone-width {
        padding: 10px;
      }
    }
  }
}

.work-row {
  padding: 0;
  img {
    display: block;
  }
}
.return-work {
  margin: 60px auto;
  a {
    text-decoration: none;
    color: $main-T-Color;
    transition: 0.5s;
    padding-bottom: 10px;
    &:hover {
      border-bottom: 1px solid #000;
    }
  }
}
</style>
