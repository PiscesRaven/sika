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
              :class="status.selectStyle === item.name ? 'active' : ''"
              class="hair-style-list"
              @click.prevent="status.selectStyle =item.name"
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
              :class="status.selectDesigner === 'All' ? 'active' : ''"
              @click.prevent="status={
selectDesigner:'All',
selectStyle:'All'}"
            ><a href="#">All</a></li>
            <li
              v-for="item in DesignerList"
              :class="status.selectDesigner === item.designer_name ? 'active' : ''"
              @click.prevent="status={
selectDesigner:item.designer_name,
selectStyle:'All'}"
            >
              <a href="#">{{item.designer_name}}</a></li>
          </ul>
        </b-col>
        <b-col lg="10">
          <b-row>
            <b-col
              v-for="item in filterList"
              xl="3"
              lg="4"
              md="6"
              sm="6"
              cols="12"
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
            </b-col>
          </b-row>
          <div class="pagination-nav">
            <b-pagination-nav
              base-url="#"
              :number-of-pages="15"
              v-model="currentPage"
            />
          </div>
        </b-col>

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
      currentPage: 0,
      status: {
        selectDesigner: "All",
        selectStyle: "All"
      },
      Api: {
        PhotoWallApi: "https://sika.idea-infinite.com/api/v1/hair/style",
        StyleListApi: "https://sika.idea-infinite.com/api/v1/hair/type"
      },
      desActive: false,
      hairActive: false,
      stylelist: [],
      designer: [],
      HairData: []
    };
  },
  computed: {
    filterList: function() {
      let vm = this;
      let designer = vm.status.selectDesigner; //data的設計師
      let style = vm.status.selectStyle; //data的髮型
      console.log("現在是 " + designer + " 和 " + style + " 風格");
      if (designer === "All" && style === "All") {
        // console.log('全部設計師與風格')
        return vm.HairData;
      }
      if (designer !== "All" && style !== "All") {
        return vm.HairData.filter(function(list) {
          return list.designer_name == designer && list.type_name == style;
        });
      }
      if (style !== "All") {
        // console.log('只篩選風格')
        return vm.HairData.filter(function(list) {
          return list.type_name == style;
        });
      }
      if (designer !== "All") {
        // console.log('現在設計師' + designer + ',風格是' + style)
        return vm.HairData.filter(function(list) {
          return list.designer_name == designer;
        });
      }
    },
    DesignerList: function() {
      //過濾設計師清單
      const set = new Set();
      return this.designer.filter(item =>
        !set.has(item.designer_name) ? set.add(item.designer_name) : false
      );
    }
  },
  created() {
    this.getAllList();
  },
  methods: {
    getAllList() {
      let vm = this;
      axios
        .all([axios.get(vm.Api.StyleListApi), axios.get(vm.Api.PhotoWallApi)])
        .then(
          axios.spread(function(stylelist, PhotoWall) {
            vm.stylelist = stylelist.data.data;
            vm.stylelist.splice(0, 0, {
              id: "0",
              name: "All"
            });
            vm.HairData = PhotoWall.data.data;
            vm.designer = PhotoWall.data.data;
          })
        );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/global.scss";

.section-img {
  background: url("../../public/img/img_Work.jpg") center no-repeat;
  height: 410px;
  margin-bottom: 64px;
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
    //電腦版
    @include pc-width {
      width: 270px;
    }
    //平板
    @include pad-width {
      width: 270px;
    }
    //小平板
    @include small-pad-width {
      width: 270px;
    }
    //手機
    @include phone-width {
      width: 270px;
    }

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
  margin: 140px auto;
}
</style>
