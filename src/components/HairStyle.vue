<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
        <h1 class="page-title">作品專區 Hair</h1>
      </b-row>
    </b-container fluid>
    <b-container class="container-body" fluid>
      <b-row>
        <b-col lg="12">
          <ul class="hair-style-ul">
            <li v-for="item in stylelist" class="hair-style-list" :class="selectStatus.selectStyle === item ? 'active' : ''" @click.prevent="status.selectStyle =item.style">
              <a href="#">
                {{item.style}}
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="2" class="designer-list">
          <h3>設計師</h3>
          <ul>
            <li v-for="item in designer" @click.prevent="status.selectDesigner =item.designer">
              <a href="#">{{item.designer}}</a></li>
          </ul>
        </b-col>
        <b-col lg="10">
          <b-row>
            <b-col v-for="item in filterList" xl="3" lg="4" md="6" sm="6" cols="12">
              <div class="hair-style-sec">
                <div class="fz-tw">
                  <img :src="item.imgurl" alt="">
                  <span>{{item.designer}}</span>
                  <p>{{item.style}}</p>
                </div>
              </div>
            </b-col>
          </b-row>
          <div class="pagination-nav">
            <b-pagination-nav base-url="#" :number-of-pages="15" v-model="currentPage" />
          </div>
        </b-col>

      </b-row>

    </b-container fluid>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HairStyle',
  props: {},
  data() {
    return {
      currentPage: 0,
      desActive: false,
      hairActive: false,
      status: {
        selectDesigner: 'All',
        selectStyle: 'All'
      },
      stylelist: [
        { style: 'All' },
        { style: '長髮' },
        { style: '短髮' },
        { style: '直髮' },
        { style: '捲髮' },
        { style: '男士髮' }
      ],
      designer: [
        { designer: 'All' },
        { designer: 'lily' },
        { designer: 'raven' },
        { designer: 'erica' },
        { designer: 'kevin' },
        { designer: '邦晉' }
      ],
      HairData: [
        {
          id: '1',
          imgurl: 'https://pic.pimg.tw/loory/1513015180-993819727.png',
          designer: 'lily',
          style: '長髮'
        },
        {
          id: '2',
          imgurl:
            'http://ws1.sinaimg.cn/large/9150e4e5ly1fe6b7s0ohaj205i053web.jpg',
          designer: 'raven',
          style: '短髮'
        },
        {
          id: '3',
          imgurl:
            'http://www.sciencenets.com/data/attachment/album/201506/01/100503si77ymzmkuki7lgk.gif',
          designer: 'erica',
          style: '直髮'
        },
        {
          id: '4',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'kevin',
          style: '捲髮'
        },
        {
          id: '5',
          imgurl:
            'https://cdn-images-1.medium.com/max/800/0*J6Non4YDjq1BPZrK.png',
          designer: '阿哲',
          style: '男士髮'
        },
        {
          id: '6',
          imgurl:
            'https://cc.tvbs.com.tw/img/_data/i/upload/2018/01/02/20180102113246-466c0ae6-me.jpg',
          designer: '邦晉',
          style: '長髮'
        },
        {
          id: '7',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'lily',
          style: '短髮'
        },
        {
          id: '8',
          imgurl: 'http://img.malaimo.tw/20171123190951_71.jpg',
          designer: 'raven',
          style: '直髮'
        },
        {
          id: '9',
          imgurl:
            'http://www.sciencenets.com/data/attachment/album/201506/01/100503si77ymzmkuki7lgk.gif',
          designer: 'erica',
          style: '捲髮'
        },
        {
          id: '10',
          imgurl: 'https://pic.pimg.tw/loory/1513015180-993819727.png',
          designer: 'kevin',
          style: '男士髮'
        },
        {
          id: '11',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: '阿哲',
          style: '長髮'
        },
        {
          id: '12',
          imgurl: 'http://img.malaimo.tw/20171123190951_71.jpg',
          designer: '邦晉',
          style: '短髮'
        },
        {
          id: '13',
          imgurl: 'http://m.acg.ms/photo/33990_0_392.png',
          designer: 'lily',
          style: '直髮'
        },
        {
          id: '14',
          imgurl: 'https://i.ytimg.com/vi/4lFPUi4A5i0/hqdefault.jpg',
          designer: 'raven',
          style: '捲髮'
        },
        {
          id: '15',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'erica',
          style: '男士髮'
        },
        {
          id: '16',
          imgurl:
            'http://img4.cache.netease.com/photo/0031/2014-05-01/9R4KPLJ93V8J0031.jpg',
          designer: 'kevin',
          style: '長髮'
        },
        {
          id: '17',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: '阿哲',
          style: '短髮'
        },
        {
          id: '18',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: '邦晉',
          style: '直髮'
        },
        {
          id: '19',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'lily',
          style: '捲髮'
        },
        {
          id: '20',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'raven',
          style: '男士髮'
        },
        {
          id: '21',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'erica',
          style: '長髮'
        },
        {
          id: '22',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'kevin',
          style: '短髮'
        },
        {
          id: '23',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: '阿哲',
          style: '直髮'
        },
        {
          id: '24',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: '邦晉',
          style: '捲髮'
        },
        {
          id: '25',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'lily',
          style: '男士髮'
        }
      ]
    }
  },
  computed: {
    filterList: function() {
      let vm = this
      let selectDesigner = vm.status.selectDesigner
      let selectStyle = vm.status.selectStyle
      console.log(selectDesigner)
      if (selectDesigner === 'All' && selectStyle === 'All') {
        console.log('所有清單')
        return vm.HairData
      }
      if (selectDesigner != 'All') {
        return vm.HairData.filter(function(list) {
          return list.designer == selectDesigner
        })
      }
      if (selectStyle != 'All') {
        return vm.HairData.filter(function(list) {
          return list.style == selectStyle
        })
      }

      // else if (selectDesigner == 'All') {
      //   console.log('選擇所有設計師的時候')
      //   return vm.HairData.filter(function(list) {
      //     vm.selectStyle = 'All'
      //     return vm.HairData
      //   })
      // }
      // else if (selectDesigner != 'All' && selectStyle == 'All') {
      //   return vm.HairData.filter(function(list) {
      //     console.log(
      //       '設計師不是 All 是 ' +
      //         selectDesigner +
      //         ' 的時候,風格是' +
      //         selectStyle
      //     )
      //     return list.designer == selectDesigner
      //   })
      // }
      //  else if (selectStyle != 'All' && selectDesigner != 'All') {
      //   return vm.HairData.filter(function(list) {
      //     console.log(
      //       '設計師不是 All 是' +
      //         selectDesigner +
      //         ' 的時候,風格不是 All 是' +
      //         selectStyle
      //     )

      //     return list.designer == selectDesigner && list.style == selectStyle
      //   })
      // }
      // else if (selectDesigner != 'All') {
      //   if (selectDesigner != selectDesigner) {
      //     return vm.HairData
      //   }
      // }
      // else if (selectStyle != 'All') {
      //   console.log('選擇風格不換設計師的時候')
      //   return vm.HairData.filter(function(list) {
      //     return list.style == selectStyle
      //   })
      // }

      //else if (selectStyle != 'All' && selectDesigner == 'All') {
      //   return vm.HairData.filter(function(list) {
      //     console.log('設計師選項是 All 的時候,風格不是 All 是' + selectStyle)
      //     return list.style == selectStyle
      //   })
      // }
    }
  },
  methods: {
    // getDesignerList() {},
    // getStyleList() {},
    // getHairList(){},
    //   filterList: function() {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/global.scss';

.section-img {
  background: url('../../public/img/img_Work.jpg') center no-repeat;
  height: 410px;
  margin-bottom: 64px;
  //平板
  @include pad-width {
    margin-bottom: 18px;
  }
  //平板以下
  @include pad-and-phone-width {
    background: url('../../public/img/img_Work_pad.jpg') center no-repeat;
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

    .designer-active {
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

.hair-style-list.active {
  border-bottom: 1px solid #ababaa;
  a {
    color: #ababaa;
  }
}
</style>
