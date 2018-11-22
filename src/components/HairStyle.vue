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
          <ul class="hair-style-list">
            <li v-for="item in stylelist" :class="{active:HairActive}">{{item.style}}</li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="2" class="designer-list">
          <h3>設計師</h3>
          <ul>
            <li v-for="item in designer" :key=" index" :class="{active : DesignerActive}">{{item.designer}}</li>
          </ul>
        </b-col>
        <b-col lg="10">
          <b-row>
            <b-col v-for="item in DesigneStyle" :key="index" xl="3" lg="4" md="6" sm="6" cols="12">
              <div class="hair-style-sec">
                <div class="fz-tw">
                  <img :src="item.imgurl" alt="">
                  <span>{{item.designer}}</span>
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
export default {
  name: 'HairStyle',
  props: {},
  data() {
    return {
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
        { designer: 'all' },
        { designer: 'lily' },
        { designer: 'raven' },
        { designer: 'erica' },
        { designer: 'kevin' },
        { designer: '邦晉' }
        // { designer: '阿哲' }
      ],
      DesigneStyle: [
        {
          id: '1',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'lily',
          style: '長髮'
        },
        {
          id: '2',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'raven',
          style: '短髮'
        },
        {
          id: '3',
          imgurl: 'https://fakeimg.pl/270x250/000/',
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
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: '阿哲',
          style: 'Mans'
        },
        {
          id: '6',
          imgurl: 'https://fakeimg.pl/270x250/000/',
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
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'raven',
          style: '直髮'
        },
        {
          id: '9',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'erica',
          style: '捲髮'
        },
        {
          id: '10',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'kevin',
          style: 'Mans'
        },
        {
          id: '11',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: '阿哲',
          style: '長髮'
        },
        {
          id: '12',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: '邦晉',
          style: '短髮'
        },
        {
          id: '13',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'lily',
          style: '直髮'
        },
        {
          id: '14',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'raven',
          style: '捲髮'
        },
        {
          id: '15',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'erica',
          style: 'Mans'
        },
        {
          id: '16',
          imgurl: 'https://fakeimg.pl/270x250/000/',
          designer: 'kevin',
          style: '長髮'
        }
        // {
        //   id: '17',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '阿哲',
        //   style: '短髮'
        // },
        // {
        //   id: '18',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '邦晉',
        //   style: '直髮'
        // },
        // {
        //   id: '19',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'lily',
        //   style: '捲髮'
        // },
        // {
        //   id: '20',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'raven',
        //   style: 'Mans'
        // },
        // {
        //   id: '21',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'erica',
        //   style: '長髮'
        // },
        // {
        //   id: '22',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'kevin',
        //   style: '短髮'
        // },
        // {
        //   id: '23',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '阿哲',
        //   style: '直髮'
        // },
        // {
        //   id: '24',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '邦晉',
        //   style: '捲髮'
        // },
        // {
        //   id: '25',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'lily',
        //   style: 'Mans'
        // },
        // {
        //   id: '26',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'raven',
        //   style: '長髮'
        // },
        // {
        //   id: '27',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'erica',
        //   style: '短髮'
        // },
        // {
        //   id: '28',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'kevin',
        //   style: '直髮'
        // },
        // {
        //   id: '29',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '阿哲',
        //   style: '捲髮'
        // },
        // {
        //   id: '30',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '邦晉',
        //   style: 'Mans'
        // },
        // {
        //   id: '31',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'lily',
        //   style: '長髮'
        // },
        // {
        //   id: '32',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'raven',
        //   style: '短髮'
        // },
        // {
        //   id: '33',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'erica',
        //   style: '直髮'
        // },
        // {
        //   id: '34',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'kevin',
        //   style: '捲髮'
        // },
        // {
        //   id: '35',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '阿哲',
        //   style: 'Mans'
        // },
        // {
        //   id: '36',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '邦晉',
        //   style: '長髮'
        // },
        // {
        //   id: '37',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'lily',
        //   style: '短髮'
        // },
        // {
        //   id: '38',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'raven',
        //   style: '直髮'
        // },
        // {
        //   id: '39',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'erica',
        //   style: '捲髮'
        // },
        // {
        //   id: '40',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'kevin',
        //   style: 'Mans'
        // },
        // {
        //   id: '41',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '阿哲',
        //   style: '長髮'
        // },
        // {
        //   id: '42',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '邦晉',
        //   style: '短髮'
        // },
        // {
        //   id: '43',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'lily',
        //   style: '直髮'
        // },
        // {
        //   id: '44',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'raven',
        //   style: '捲髮'
        // },
        // {
        //   id: '45',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'erica',
        //   style: 'Mans'
        // },
        // {
        //   id: '46',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'kevin',
        //   style: '長髮'
        // },
        // {
        //   id: '47',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '阿哲',
        //   style: '短髮'
        // },
        // {
        //   id: '48',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: '邦晉',
        //   style: '直髮'
        // },
        // {
        //   id: '49',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'lily',
        //   style: '捲髮'
        // },
        // {
        //   id: '50',
        //   imgurl: 'https://fakeimg.pl/270x250/000/',
        //   designer: 'raven',
        //   style: 'Mans'
        // }
      ]
    }
  },
  methods: {
    DesignerActive() {
      this.desActive = !this.desActive
    },
    HairActive() {
      this.hairActive = !this.hairActive
    }
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
    margin-bottom: 18px;
  }
}
.container-body {
  max-width: 1440px;
}

.hair-style-list {
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
  li {
    margin: auto 53px;
    //平板
    @include pad-width {
      margin: 0 auto 2.4% auto;
    }
    //平板以下
    @include pad-and-phone-width {
      margin: 0 auto 2.4% auto;
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
