<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
      </b-row>
    </b-container fluid>
    <b-container>
      <b-row>
        <div class="return-row">
          <span class="page-left"></span> 回到上一頁
        </div>
      </b-row>
      <div class="designer-card">
        <b-row v-for="item in designer">
          <b-col lg="6" md="12" sm="12" cols="12"><img src="https://fakeimg.pl/670x660/fff/000"></b-col>
          <b-col lg="6" md="12" sm="12" cols="12">
            <div class="designer-info">
              <div class="info-block">
                <h1>Name {{item.name}}</h1>
                <h4>資料簡介:{{item.info}}</h4>
              </div>

              <div class="info-block">
                <div class="contact-icons">
                  <font-awesome-icon :icon="['fab','instagram']" size="2x" />
                  <font-awesome-icon :icon="['fab','facebook-f']" size="2x" />
                  <font-awesome-icon :icon="['fab','line']" size="2x" />
                </div>
                <div class="designer-contact">
                  <h5>T: {{item.tel}}</h5>
                  <h5>E: {{item.mail}}</h5>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <h3>
          精選作品 Feature
        </h3>
      </div>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col md="3" sm="6" cols="12" class="work-row" v-for="pic in works">
          <b-img :src="pic.img" alt="" />
        </b-col>
      </b-row>
    </b-container fluid>
    <b-container>
      <b-row>
        <b-col cols="12" class="return-work">
          <router-link to="/hairstyle">
            <span class="page-left"></span> 作品集觀看更多
          </router-link>
        </b-col>
        <b-col>
          <h2>簡介</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat commodi doloribus porro non ducimus necessitatibus voluptate illum eaque.
            Doloremque eligendi, iusto aperiam quasi quibusdam tenetur dolores minus temporibus quidem,
            voluptates numquam est laudantium quisquam culpa,
            similique nostrum? Maxime iure doloribus, beatae natus, accusamus
            dolore magni perspiciatis odio quia eum nulla esse illo? Consequatur p
            ariatur aspernatur ipsam odio ut perferendis doloribus ea eius. Culpa
            doloribus totam nihil impedit minus ipsa delectus, nemo vitae labore,
            dolorem quis optio consequuntur quod, eligendi animi distinctio tempora nisi dicta magnam quae a maxime.
            Alias impedit amet quis, quaerat deserunt ullam aliquid corrupti commodi? Ut, eveniet.</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      designer: [
        {
          name: 'Raven',
          info: '我是誰?我是程序猿!Who am I? I am F2E',
          tel: '+886 0123 456 789',
          mail: 'zxczxc@gamil.cmo'
        }
      ],
      works: [
        { img: 'https://fakeimg.pl/480x500/000/fff' },
        { img: 'https://fakeimg.pl/480x500/c3c3c3/fff' },
        { img: 'https://fakeimg.pl/480x500/000/fff' },
        { img: 'https://fakeimg.pl/480x500/000/fff' },
        { img: 'https://fakeimg.pl/480x500/000/fff' },
        { img: 'https://fakeimg.pl/480x500/000/fff' },
        { img: 'https://fakeimg.pl/480x500/000/fff' },
        { img: 'https://fakeimg.pl/480x500/000/fff' }
        // { img: 'https://fakeimg.pl/480x500/fff/000' },
        // { img: 'https://fakeimg.pl/480x500/000/fff' },
        // { img: 'https://fakeimg.pl/480x500/fff/000' },
        // { img: 'https://fakeimg.pl/480x500/fff/000' },
        // { img: 'https://fakeimg.pl/480x500/000/fff' },
        // { img: 'https://fakeimg.pl/480x500/fff/000' },
        // { img: 'https://fakeimg.pl/480x500/000/fff' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/scss/global.scss';
.section-img {
  background: url('../../../public/img/img_Stylist.jpg') center center no-repeat;
  background-size: cover;
  height: 410px;
  margin-bottom: 125px;
}

h3 {
  font-size: 32px;
  text-align: center;
  line-height: 1.47;
  margin-top: 172px;
  margin-bottom: 60px;
}

h2 {
  font-size: 32px;
  text-align: left;
}
p {
  text-align: left;
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
    content: '';
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
}

.designer-card {
  .designer-info {
    background: $main-Bg-Color;
    color: $submain-T-Color;
    height: 100%;
    padding: 100px;
    text-align: left;
    //平板
    @include pad-width {
      padding: 20px;
    }
    //小平板
    @include small-pad-width {
      padding: 15px;
      margin: -15px;
    }
    //手機
    @include phone-width {
      padding: 10px;
      margin: -15px;
    }
    .info-block {
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
