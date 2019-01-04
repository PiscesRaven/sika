<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
        <h1 class="page-title">作品專區 Hair</h1>
      </b-row>
    </b-container fluid>
    <b-container
      class="container-body"
      fluid
    >
      <b-row>
        <b-col lg="12">
          <ul class="hair-style-ul">
            <li
              v-for="item in stylelist"
              :class="status.type_id === item.id ? 'active' : ''"
              class="hair-style-list"
              @click.prevent="status.type_id =item.id , desWorks()"
            >
              <a href="#">
                {{item.name}}
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          lg="2"
          class="designer-list"
        >
          <h3>設計師</h3>
          <ul>
            <li
              :class="status.designer_id === 'All' ? 'active' : ''"
              @click.prevent="status={designer_id:'All',type_name:'All',type_id:'0',limit:status.limit,offset:'0'
              },getAllList()"
            ><a href="#">All</a></li>
            <li
              v-for="item in designer"
              :class="status.designer_id === item.id ? 'active' : ''"
              @click.prevent="status={designer_id:item.id,type_name:'All',type_id:'0', limit:status.limit,offset:'0',designer_name:item.name
              },desWorks(status)"
            >
              <a href="#">{{item.name}}</a></li>
          </ul>
        </b-col>

        <b-col lg="10">
          <b-row>
            <b-col
              v-for="item in HairData"
              xl="3"
              lg="4"
              md="6"
              sm="6"
              cols="6"
            >
              <a
                href="#"
                @click.prevent="lightBox(item)"
              >
                <transition
                  name="fade"
                  mode="out-in"
                  appear
                >
                  <div class="hair-style-sec">
                    <div class="fz-tw">
                      <img
                        :src="item.image"
                        alt=""
                      >
                      <span>{{item.designer_name}}</span>
                    </div>
                  </div>
                </transition>
              </a>
            </b-col>
          </b-row>
          <div class="pagination-nav">
            <b-pagination-nav
              base-url="#"
              :number-of-pages="totalPage"
              v-model="currentPage"
              v-if="total !=0 "
            />
          </div>
        </b-col>
        <transition
          name="fade"
          mode="out-in"
          appear
        >

          <div
            v-show="lightBoxData.length !=0"
            class="loght-box"
          >
            <div class="box-contact">
              <div
                class="close-btn"
                @click.prevrnt="closeLightBox()"
              ></div>
              <div class="box-img fz-tw">
                <!-- <img
                  :src="lightBoxData.image"
                  alt=""
                > -->
              </div>
              <span>{{lightBoxData.designer_name}}</span>
            </div>
          </div>
        </transition>
      </b-row>
    </b-container fluid>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HairStyle",
  props: {},
  data() {
    return {
      currentPage: 1, //現在頁數
      total: 0, //總頁數
      window_w: 0, //裝置寬
      status: {
        designer_name: "", //設計師名字
        designer_id: "All", //設計師ID
        type_name: "All", //髮型名稱
        type_id: "0", //髮型ID
        offset: 0,
        limit: 12 //文章上限
      },
      Api: {
        PhotoWallApi: `${process.env.VUE_APP_APIPATH}/hair/style`,
        StyleListApi: `${process.env.VUE_APP_APIPATH}/hair/type`,
        DesignerApi: `${process.env.VUE_APP_APIPATH}/designer`
      },
      desActive: false,
      hairActive: false,
      stylelist: [],
      designer: [],
      HairData: [],
      lightBoxData: []
    };
  },
  computed: {
    // filterList: function() {
    //   let vm = this;
    //   let designer = vm.status.designer_id; //data的設計師
    //   let style = vm.status.type_name; //data的髮型
    //   if (designer === "All" && style === "All") {
    //     // console.log('全部設計師與風格')
    //     return vm.HairData;
    //   }
    //   if (designer !== "All" && style !== "All") {
    //     return vm.HairData.filter(function(list) {
    //       return list.designer_id == designer && list.type_name == style;
    //     });
    //   }
    //   if (designer === "All" && style !== "All") {
    //     vm.desWorks();
    //     console.log("只篩選風格");
    //     // return vm.HairData.filter(function(list) {
    //     //   return list.type_name == style;
    //     // });
    //   }
    //   if (designer !== "All") {
    //     // console.log("現在設計師" + designer + ",風格是" + style);
    //     return vm.HairData.filter(function(list) {
    //       return list.designer_id == designer;
    //     });
    //   }
    // },
    totalPage() {
      return this.total;
    }
  },
  created() {
    this.getAllList();
  },
  mounted() {
    this.window_w = window.innerWidth;
    window.addEventListener("resize", () => {
      this.window_w = window.innerWidth;
    });
    if (this.window_w < 768) {
      console.log(this.currentPage);
      this.status.limit = "24";
    }
  },
  methods: {
    getAllList() {
      let vm = this;
      axios
        .all([
          axios.get(vm.Api.StyleListApi),
          axios.get(vm.Api.PhotoWallApi, {
            params: vm.status
          }),
          axios.get(vm.Api.DesignerApi)
        ])
        .then(
          axios.spread(function(stylelist, PhotoWall, Designer) {
            vm.stylelist = stylelist.data.data;
            vm.stylelist.splice(0, 0, {
              id: "0",
              name: "All"
            });
            let numPages = PhotoWall.data.total;
            vm.HairData = PhotoWall.data.data;
            vm.designer = Designer.data.data;
            vm.total = Math.ceil(numPages / vm.status.limit);
          })
        );
    },
    lightBox(item) {
      this.lightBoxData = item;
      document.querySelector(".box-img").style.backgroundImage = `url('${
        item.image
      }')`;
      document.body.classList.add("modal-open");
    },
    closeLightBox(item) {
      this.lightBoxData = [];
      document.body.classList.remove("modal-open");
    },
    desWorks(status) {
      let vm = this;
      axios
        .get(vm.Api.PhotoWallApi, {
          params: vm.status
        })
        .then(res => {
          let numPages = res.data.total;
          vm.HairData = res.data.data;
          // console.log(vm.HairData[0]);
          vm.total = Math.ceil(numPages / this.status.limit);
        });
    },
    linkGen(pageNum) {
      return "#/" + pageNum;
    }
  },
  watch: {
    currentPage: function(pageNum) {
      let vm = this;
      vm.currentPage = pageNum;
      vm.status.offset = (pageNum - 1) * vm.status.limit;
      vm.desWorks();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.section-img {
  background: url("../../public/img/img_Work.jpg") center no-repeat;
  height: 410px;
  margin-bottom: 64px;
  background-size: cover;

  //平板
  @include pad-width {
    margin-bottom: 18px;
  }
  //平板以下
  @include pad-and-phone-width {
    background: url("../../public/img/img_Work_pad.jpg") center no-repeat;
    margin-bottom: 18px;
    height: 288px;
  }
}
.container-body {
  max-width: 1440px;
  min-height: 750px;
  margin-bottom: 100px;
}

.hair-style-ul {
  display: inline-flex;
  margin-bottom: 36px;
  @include pc-width {
    margin-left: 10%;
  }
  //平板
  @include pad-width {
    display: flex;
    border-bottom: 1px solid #000;
    margin: auto;
  }
  //平板以下
  @include pad-and-phone-width {
    display: flex;
    border-bottom: 1px solid #000;
    margin: auto;
  }
  .hair-style-list {
    margin: auto 53px;
    //平板
    @include pad-width {
      margin: 0 auto 2.4% auto;
    }
    //平板以下
    @include pad-and-phone-width {
      margin: 0 auto 2.4% auto;
    }
    a {
      color: $main-T-Color;
      text-decoration: none;
    }
  }
  .hair-style-list.active {
    border-bottom: 1px solid #ababaa;
    a {
      color: #ababaa;
    }
  }
}
.designer-list {
  > h3 {
    line-height: 1.5;
    text-align: center;
    padding-bottom: 17px;
    border-bottom: solid 1px #707070;
    @include pad-width {
      display: none;
    }
    @include pad-and-phone-width {
      display: none;
    }
  }
  ul {
    //平板
    @include pad-width {
      display: flex;
    }
    //平板以下
    @include pad-and-phone-width {
      display: flex;
    }
    li {
      text-transform: capitalize;
      margin: 50px auto;
      //平板
      @include pad-width {
        display: inline-flex;
        margin: 2.4% auto 3% auto;
      }
      //平板以下
      @include pad-and-phone-width {
        display: inline-flex;
        margin: 2.4% auto 3% auto;
      }
      a {
        color: $main-T-Color;
        text-decoration: none;
      }
    }

    .active {
      a {
        color: #ababaa;
      }
    }
  }
}

.hair-style-sec {
  margin-top: 25px;
  margin-bottom: 20px;

  > div {
    position: relative;
    margin: auto;

    span {
      position: absolute;
      right: 13px;
      bottom: 20px;
      font-size: 22px;
      text-transform: capitalize;
      color: $submain-T-Color;
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
  margin: 70px auto;
}
.page-title {
  //平板以下
  @include pad-and-phone-width {
    font-size: 25px;
  }
}
.loght-box {
  position: fixed;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  background: rgba(106, 106, 106, 0.51);
  padding: 100px 0px;
  z-index: 9999;
}
.box-contact {
  position: relative;
  margin: auto;
  background: #fff;
  height: 80vh;
  max-width: 810px;
  padding: 100px;
  //電腦版
  @include pc-width {
    padding: 100px;
  }
  //平板
  @include pad-width {
    padding: 100px;
  }
  //手機
  @include phone-width {
    padding: 15vw 10vw;
    height: 100%;
  }
  span {
    position: absolute;
    right: 25%;
    bottom: 5%;
    font-size: 45px;
    text-transform: capitalize;
    color: #000;
    //電腦版
    @include pc-width {
      bottom: 5%;
      right: 15%;
    }
    //平板
    @include pad-width {
      bottom: 5%;
      right: 20%;
    }
    //小平板
    @include small-pad-width {
      bottom: 5%;
      right: 20%;
    }
    //手機
    @include phone-width {
      bottom: 5%;
      right: 20%;
    }
  }
}
.close-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
  z-index: 9999;
  position: absolute;
  top: 30px;
  right: 30px;
  //平板以下
  @include pad-and-phone-width {
    width: 24px;
    height: 24px;
  }
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 65%;
    height: 4px;
    border-radius: 20px;
    background: #fff;
    transform: rotate(45deg) translateX(5px) translateY(29px);
    //平板以下
    @include pad-and-phone-width {
      transform: rotate(45deg) translateX(1px) translateY(13px);
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 65%;
    height: 4px;
    position: absolute;
    border-radius: 20px;
    background: #fff;
    transform: rotate(-45deg) translateX(-29px) translateY(5px);
    //平板以下
    @include pad-and-phone-width {
      transform: rotate(-45deg) translateX(-13px) translateY(1px);
    }
  }
}
.box-img {
  height: 100%;
  margin: auto;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
}
.box-enter-active,
.box-leave-active {
  transition: opacity 1s;
}

.box-enter,
.box-leave-active {
  opacity: 0;
}
</style>
