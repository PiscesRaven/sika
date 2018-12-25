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
  name: "Video title",
  data() {
    return {
      title: "影片專區 Video"
    };
  },
  created() {
    if (this.$route.name == "videopost") {
      this.title = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/global.scss";

.section-img {
  background: url("../../../public/img/img_Video.jpg") center no-repeat;
  height: 410px;
  margin-bottom: 125px;
  background-size: cover;
  //平板
  @include pad-width {
    margin-bottom: 10%;
  }
  //平板以下
  @include pad-and-phone-width {
    background: url("../../../public/img/img_Video_pad.jpg") center no-repeat;
    margin-bottom: 10%;
    height: 288px;
  }
}
.page-title {
  //平板以下
  @include pad-and-phone-width {
    font-size: 25px;
  }
}
</style>
