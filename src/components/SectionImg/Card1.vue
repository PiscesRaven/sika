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
  name: "blog title",
  data() {
    return {
      title: "流行趨勢 Blog"
    };
  },
  created() {
    if (this.$route.name == "articlepost") {
      this.title = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/global.scss";

.section-img {
  background: url("../../../public/img/img_Blog.jpg") right no-repeat;
  height: 410px;
  margin-bottom: 125px;
  background-size: cover;
  //平板
  @include pad-width {
    margin-bottom: 10%;
  }
  //平板以下
  @include pad-and-phone-width {
    background: url("../../../public/img/img_Blog_pad.jpg") right no-repeat;
    margin-bottom: 10%;
    height: 288px;
  }
}
</style>
