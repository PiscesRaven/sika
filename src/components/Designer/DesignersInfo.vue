<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
        <h1 class="page-title">設計師 Stylist</h1>
      </b-row>
    </b-container fluid>
    <b-row>
      -回到上一頁
    </b-row>
    <b-container>
      <b-row>
        <!-- <b-col></b-col>
        <b-col></b-col> -->
        <div class="designer-info">

        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/scss/global.scss';
.section-img {
  background: url('../../../public/img/img_Stylist.jpg') center no-repeat;
  height: 410px;
  margin-bottom: 125px;
}
</style>
