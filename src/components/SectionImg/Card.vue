<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
        <h1 class="page-title">{{title}}</h1>
      </b-row>
    </b-container fluid>
  </div>
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
@import "../../assets/scss/global.scss";
.section-img {
  background: url("../../../public/img/Image.jpg") right no-repeat;
  height: 410px;
  margin-bottom: 125px;
  //平板以下
  @include pad-and-phone-width {
    background: url("../../../public/img/Image_pad.jpg") right no-repeat;
  }
}
</style>
