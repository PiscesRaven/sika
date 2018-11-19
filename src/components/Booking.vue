<template>
  <div>
    <b-container fluid>
      <b-row class="booking-sec">
        <b-container>
          <b-col cols="12">
            <h1 class="book-title">線上預約 Booking
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
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
import BookingFrom from '@/components/From.vue'
export default {
  name: 'Booking',
  components: {
    BookingFrom
  }
  // data() {
  //   return {
  //     selectStatusD: false,
  //     selectData: '請選擇設計師',
  //     selectStatusT: false,
  //     selectStatusS: false,

  //     form: {
  //       email: '',
  //       name: '',
  //       designers: null,
  //       time: null,
  //       service: null
  //     },

  //     designers: ['Erica', 'Raven', 'Lili', 'Keven'],
  //     time: ['10:00~10:30', '10:30~11:00', '11:00~11:30', '11:30~12:00'],
  //     service: ['剪髮', '洗髮', '按摩', '燙髮'],
  //     show: true
  //   }
  // },
  // methods: {
  //   onSubmit(evt) {
  //     evt.preventDefault()
  //     alert(JSON.stringify(this.form))
  //   }
  // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/global.scss';
.booking-sec {
  background: url('../../public/img/img_Booking.jpg') center no-repeat;
  height: 1240px;
  justify-content: center;
  align-items: center;
  .book-title {
    margin-top: 120px;
    font-size: 32px;
    line-height: 1.47;
    color: $main-T-Color;
    margin-bottom: 45px;
  }
  p {
    font-size: 20px;
    line-height: 1.5;
    color: $main-T-Color;
  }
}
</style>
