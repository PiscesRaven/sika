<template>
  <b-container fluid>
    <b-row class="section-img">
      <h1 class="page-title">{{title}}</h1>
    </b-row>
  </b-container fluid>
</template>

<script>
export default {
  name: "titleSec",
  data() {
    return {
      title: "優惠資訊 News"
    };
  },
  created() {
    if (this.$route.name !== "news") {
      this.title = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section-img {
  background: url("../../../public/img/Image.jpg") right no-repeat;
  background-size: cover;
  height: 410px;
  margin-bottom: 125px;
  //平板以下
  @include pad-and-phone-width {
    background: url("../../../public/img/Image_pad.jpg") top right no-repeat;
    height: 288px;
    margin-bottom: 10%;
  }
  .page-title {
    //平板以下
    @include pad-and-phone-width {
      font-size: 25px;
    }
  }
}
</style>
