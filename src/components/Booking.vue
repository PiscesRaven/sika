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
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="booking-from">
              <b-form-group id="exampleInputGroup1" label-for="yourName">
                <b-form-input id="yourName" type="text" v-model="form.email" required placeholder="輸入您的名字">
                </b-form-input>
              </b-form-group>
              <b-form-group id="exampleInputGroup2" label-for=yourPhone>
                <b-form-input id=yourPhone type="email" v-model="form.name" required placeholder="Enter name">
                </b-form-input>
              </b-form-group>
              <b-form-group id="exampleInputGroup3" label-for="designers">
                <b-form-select id="designers" :options="designers" required v-model="form.designers">
                </b-form-select>
              </b-form-group>
              <b-form-group id="exampleInputGroup4" label-for="youTime">
                <b-form-select id="youTime" :options="Time" required v-model="form.time">
                </b-form-select>
              </b-form-group>
              <b-form-group id="exampleInputGroup5" label-for="service">
                <b-form-select id="service" :options="Service" required v-model="form.service">
                </b-form-select>
              </b-form-group>

              <b-button type="submit" class="submit-btn">送出</b-button>
              <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
            </b-form>
          </b-col>
        </b-container>

      </b-row>
    </b-container fluid>

  </div>
</template>

<script>
export default {
  name: 'Booking',
  data() {
    return {
      form: {
        email: '',
        name: '',
        designers: null,
        time: null,
        service: null
      },
      des: [
        { text: '請選擇設計師', value: null },
        { name: 'Lili' },
        { name: 'Erica' },
        { name: 'Raven' },
        { name: 'Keven' }
      ],
      designers: [
        { text: '請選擇設計師', value: null },
        'Erica',
        'Raven',
        'Lili',
        'Keven'
      ],
      Time: [
        { text: '請選擇時間', value: null },
        '10:00~10:30',
        '10:30~11:00',
        '11:00~11:30',
        '11:30~12:00'
      ],
      Service: [
        { text: '請選擇服務內容', value: null },
        '剪髮',
        '洗髮',
        '按摩',
        '燙髮'
      ],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
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

  .submit-btn {
    font-size: 27px;
    width: 481px;
    height: 56.9px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #52504d;
    //平板
    @include pad-width {
      width: 100%;
    }
    //小平板
    @include small-pad-width {
      width: 100%;
    }
    //手機
    @include phone-width {
      width: 100%;
    }
  }

  .sel {
    margin-top: 50px;
    width: 150px;
    background: red;
    border: 5px blue solid;
    .opt {
      display: none;
    }
    &:hover {
      .opt {
        display: block;
      }
    }
  }
}
.select {
  position: relative;
  display: block;
  list-style: none;
  padding: 0;
  height: 34px;
  overflow: hidden;
  background: #313131;
  color: white;
  cursor: pointer;
}
.select.open {
  overflow: visible;
}
.select:before {
  content: attr(selectData);
  display: block;
  padding: 6px 10px;
}
.select:after {
  content: 'keyboard_arrow_down';
  position: absolute;
  right: 1vw;
  top: 8px;
  display: block;
  font-family: 'Material Icons';
  font-size: 20px;
  height: 20px;
  transition: 0.2s;
}
.select.open:after {
  transform: rotate(180deg);
}
.select li {
  display: block;
  padding: 6px 10px;
  position: relative;
  z-index: 1;
  background: #313131;
}
.select li:hover {
  background: yellow;
  color: #272727;
}
</style>
