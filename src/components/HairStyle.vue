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
            <li v-for="item in stylelist" :class="status.selectStyle === item.style ? 'active' : ''" class="hair-style-list" @click.prevent="status.selectStyle =item.style">
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
            <li v-for="item in designer" :class="status.selectDesigner === item.designer ? 'active' : ''" @click.prevent="status={
selectDesigner:item.designer,
selectStyle:'All'}">
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
                  <p>{{item.style}} 之後要拿掉只是暫時的</p>
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
      status: {
        selectDesigner: 'All',
        selectStyle: 'All'
      },
      desActive: false,
      hairActive: false,
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
          imgurl: 'https://wiki.komica.org/images/a/ae/Img2191.jpg',
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
          imgurl: 'https://wiki.komica.org/images/c/c1/Img6610.jpg',
          designer: '阿哲',
          style: '短髮'
        },
        {
          id: '18',
          imgurl: 'http://i.imgur.com/4fTgqvG.jpg',
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
          imgurl:
            'http://photo.ccoo.cn/webdiy/news/2011924/201192420542627.jpg',
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
          imgurl:
            'https://taiwandl.files.wordpress.com/2016/04/a4fd7f7254c362c97ee7523bb2edbb64.jpg?w=700&h=430&crop=1',
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
      let designer = vm.status.selectDesigner //data的設計師
      let style = vm.status.selectStyle //data的髮型
      console.log('現在是 ' + designer + ' 和 ' + style + ' 風格')
      if (designer === 'All' && style === 'All') {
        // console.log('全部設計師與風格')
        return vm.HairData
      }
      if (designer !== 'All' && style !== 'All') {
        return vm.HairData.filter(function(list) {
          return list.designer == designer && list.style == style
        })
      }
      if (style !== 'All') {
        // console.log('只篩選風格')
        return vm.HairData.filter(function(list) {
          return list.style == style
        })
      }
      if (designer !== 'All') {
        // console.log('現在設計師' + designer + ',風格是' + style)
        return vm.HairData.filter(function(list) {
          return list.designer == designer
        })
      }
    }
  },
  methods: {
    // getDesignerList() {},
    // getStyleList() {},
    // getHairList(){},
    // filterList: function() {}
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
