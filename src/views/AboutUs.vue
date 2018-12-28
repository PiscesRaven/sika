<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
      </b-row>
    </b-container fluid>
    <b-container>
      <b-row class="aboutus_row">
        <b-col cols="12">
          <h1 class="page_title">
            <p>
              AboutUs
            </p>
            關於我們
          </h1>
        </b-col>
        <b-col
          cols="12"
          sm="12"
          md="6"
        >
          <img
            src="https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.0-9/41682291_222913548582908_2714771694483931136_n.jpg?_nc_cat=104&_nc_ht=scontent.ftpe7-2.fna&oh=d01369dd4eb065293a98c209bb21334e&oe=5CD01263"
            alt=""
            class="aboutus_img"
          ></b-col>
        <b-col
          cols="12"
          sm="12"
          md="6"
        >
          <div class="aboutus_block">
            <h1 class="aboutus_title">希卡。Sika。</h1>
            <p>
              全店風格以純白色為主
              主要強調清新 自然的質感
              本店作品風格為自然 好整理為主軸
              採用日本哥德式產品 藥水 染膏
              依東方人髮性做客製化設計</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  components: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
$pg-T: #4a90e2;
.section-img {
  background: url("../../public/img/Img_Aboutus.jpg") center right no-repeat;
  background-size: cover;
  height: 410px;
  margin-bottom: 125px;
  //平板以下
  @include pad-and-phone-width {
    background: url("../../public/img/Img_Aboutus_pad.jpg") center right
      no-repeat;
    height: 288px;
    margin-bottom: 10%;
  }
}

.page_title {
  text-align: left;
  font-size: 0.9rem;
  margin-bottom: 4rem;
  //平板以下
  @include pad-and-phone-width {
    text-align: center;
  }
  p {
    color: $pg-T;
    margin-bottom: 0;
  }

  &::after {
    content: "";
    width: calc(100% - 85px);
    height: 1px;
    background: #979797;
    position: absolute;
    left: 70px;
    //平板以下
    @include pad-and-phone-width {
      content: none;
    }
  }
}
.aboutus_row {
  margin-top: 3rem;
  margin-bottom: 3.5rem;
  .aboutus_img {
    margin: auto;
    border-radius: 50%;
    //平板以下
    @include pad-and-phone-width {
      margin-bottom: 1.4rem;
      content: none;
    }
  }
  .aboutus_block {
    .aboutus_title {
      margin-bottom: 1.2rem;
      font-size: 1.625rem;
    }
    p {
      font-size: 0.7rem;
      line-height: 1.5rem;
    }
  }
}
</style>
