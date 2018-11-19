<template>
  <div>
    <form method="post" class="booking-form">
      <div class="input-row">
        <input type="text" name="" id="">
        <p>請輸入您的名字</p>
      </div>
      <div class="input-row">
        <input type="email" name="" id="" placeholder="請輸入您的電話號碼">
      </div>
      <div class="input-row" @click.prevent="selectStatusD = false">
        <ul @click.stop.prevent="selectStatusD = !selectStatusD" :class="'select' + (selectStatusD ? ' open' : '')" :selectData="selectData">
          <li @click.prevent="selectData = list" v-for="list in designers">
            {{list}}
          </li>
        </ul>
      </div>
      <div class="input-row" @click.prevent="selectStatusT = false">
        <ul @click.stop.prevent="selectStatusT = !selectStatusT" :class="'select' + (selectStatusT ? ' open' : '')" :selectData="'請選擇時間'">
          <li @click.prevent="selectData = list" v-for="list in time">
            {{list}}
          </li>
        </ul>
      </div>
      <div class="input-row" @click.prevent="selectStatusS = false">
        <ul @click.stop.prevent="selectStatusS = !selectStatusS" :class="'select' + (selectStatusS ? ' open' : '')" :selectData="'請選擇服務'">
          <li @click.prevent="selectData = list" v-for="list in service">
            {{list}}
          </li>
        </ul>
      </div>
      <button type="button" class="submit-btn">送出</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Booking',
  data() {
    return {
      selectStatusD: false,
      selectData: '請選擇設計師',
      selectStatusT: false,
      selectStatusS: false,

      form: {
        email: '',
        name: '',
        designers: null,
        time: null,
        service: null
      },

      designers: ['Erica', 'Raven', 'Lili', 'Keven'],
      time: ['10:00~10:30', '10:30~11:00', '11:00~11:30', '11:30~12:00'],
      service: ['剪髮', '洗髮', '按摩', '燙髮'],
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

.booking-form {
  display: inline-block;
  max-width: 770px;
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
  .input-row {
    position: relative;
    margin: 11px auto;
    input {
      &:focus + p {
        background: $submain-Bg-Color;
        transition: 0.5s;
        position: absolute;
        top: -10%;
        left: 10px;
      }
    }
    p {
      position: absolute;
      top: 22px;
      left: 10px;
    }

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

    input {
      padding: 10px;
      &::-webkit-input-placeholder {
        color: $main-T-Color !important;
      }
    }
    input,
    .select {
      width: 770px;
      height: 56px;
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
  }
  .submit-btn {
    font-size: 27px;
    color: $submain-T-Color;
    border: none;
    width: 481px;
    height: 57px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #52504d;
    margin-top: 100px;
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
}

// .app {
//   padding: 10px;
//   height: 100vh;
//   width: 100;
//   overflow: hidden;
//   box-sizing: border-box;
//   background: #fdfdfd;
// }
.select {
  text-align: left;
  position: relative;
  display: block;
  list-style: none;
  padding: 0;
  height: 34px;
  overflow: hidden;
  background: $submain-Bg-Color;
  color: $main-T-Color;
  cursor: pointer;
}
.select.open {
  overflow: visible;
}
.select:before {
  content: attr(selectData);
  display: block;
  padding: 20px 10px;
}
.select:after {
  content: '';
  height: 10px;
  width: 10px;
  display: block;
  position: absolute;
  top: 23px;
  right: 1vw;
  border: 12px dashed #666;
  border-radius: 2px;
  border-top-color: #000;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-right-color: transparent;
  transform-origin: 50% 25%;
  font-family: 'Material Icons';
  font-size: 20px;
  transition: 0.2s;
}
.select.open:after {
  transform: rotate(-180deg);
}
.select li {
  display: block;
  padding: 7px 10px;
  position: relative;
  z-index: 1;
  transition: 0.5s;
  background: $submain-Bg-Color;
}
.select li:hover {
  background: #52504d;
  color: $submain-T-Color;
  transition: 0.3s;
}
</style>
