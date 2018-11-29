<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
        <h1 class="page-title">{{title}}</h1>
      </b-row>
    </b-container fluid>

    <!-- <b-container fluid>
      <b-row class="section-img">
        <h1 class="page-title">{{title}}</h1>
      </b-row>
    </b-container fluid> -->
  </div>
</template>

<script>
export default {
  name: "title",
  data() {
    return {
      title: "",
      data: [
        {
          title: "優惠資訊 News",
          listname: "news",
          articleName: "newspost"
        },
        {
          title: "流行趨勢 Blog",
          listName: "article",
          articleName: "articlepost"
        }
      ]
    };
  },
  created() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.$route.name == this.data[i].listname) {
        this.title = this.data[i].title;
        console.log("if");
      }
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
  //平板
  @include pad-width {
    margin-bottom: 10%;
  }
  //平板以下
  @include pad-and-phone-width {
    background: url("../../../public/img/Image_pad.jpg") right no-repeat;
    margin-bottom: 10%;
    height: 288px;
  }
}
</style>
