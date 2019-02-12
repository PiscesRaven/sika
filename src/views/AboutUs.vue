<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
      </b-row>
    </b-container fluid>
    <b-container>
      <b-row class="aboutus_row">
        <b-col
          cols="12"
          sm="12"
          md="6"
        >
          <img
            src="../../public/img/sila-about.jpg"
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
            <p v-html="aboutus.content">
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AboutUs",
  components: {},
  data() {
    return {
      aboutus: []
    };
  },
  created() {
    let vm = this;
    axios.get("https://sika.idea-infinite.com/api/v1/about_us").then(res => {
      vm.aboutus = res.data.data;
    });
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

.aboutus_row {
  margin-bottom: 125px;
  @include pad-and-phone-width {
    margin-bottom: 10%;
  }
  .aboutus_img {
    margin: auto;
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
      text-align: left;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
}
</style>
