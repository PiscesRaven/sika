<template>
  <div>
    <b-container fluid>
      <b-row class="booking-sec">
        <b-container>
          <b-col cols="12">
            <h1 class="book-title">線上預約 Booking
            </h1>
          </b-col>
          <b-col cols="12">
            <BookingFrom />
          </b-col>
        </b-container>

      </b-row>
    </b-container fluid>

  </div>
</template>
<script>
import BookingFrom from "@/components/From.vue";
export default {
  name: "Booking",
  components: {
    BookingFrom
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.booking-sec {
  background: url("../../public/img/img_Booking.jpg") center no-repeat;
  height: 1240px;
  justify-content: center;
  align-items: center;
  background-size: cover;
  //平板以下
  @include pad-and-phone-width {
    align-items: flex-start;
    height: 1000px;
  }
  .book-title {
    margin-top: 120px;
    font-size: 32px;
    line-height: 1.47;
    color: $main-T-Color;
    margin-bottom: 45px;

    //平板以下
    @include pad-and-phone-width {
      margin-top: 12 0px;
    }
  }
}
</style>
