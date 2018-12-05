<template>
  <div>
    <form
      method="post"
      class="booking-form"
    >
      <div class="input-row">
        <input
          @keyup="check()"
          type="text"
          name="name"
          id=""
          placeholder="請輸入您的名字"
          v-model="form.user_name"
        >
        <p
          class="error-text-none"
          :class="{'error-text-show':error.erN ? true : false}"
          v-model="error.erN"
        >*請輸入您的姓名</p>
      </div>
      <div class="input-row">
        <input
          @keyup="check()"
          type="text"
          name=""
          id=""
          placeholder="請輸入您的電話號碼"
          v-model="form.phone"
        >
        <p
          class="error-text-none"
          :class="{'error-text-show':error.erP ? true : false}"
          v-model="error.erP"
        >*請輸入您連絡電話</p>
      </div>
      <div
        class="input-row"
        @click.prevent="selectStatus = false"
      >
        <ul
          @click.stop.prevent="selectStatusD = !selectStatusD,selectStatusT= false ,selectStatusS = false"
          :class="'select' + (selectStatusD ? ' open' : '')"
          :selectData="selectData"
        >
          <li
            @click.prevent="selectData = list.name,check()"
            v-for="list in designers"
            :value="list.name"
            v-model="form.designer =selectData"
          >
            {{list.name}}
          </li>
        </ul>
        <p
          class="error-text-none"
          :class="{'error-text-show':error.erD ? true : false}"
          v-model="error.erD"
        >*請選擇您要預約的設計師</p>
      </div>
      <div
        class="input-row"
        @click.prevent="selectStatuD = false"
      >
        <ul
          @click.stop.prevent="selectStatusT = !selectStatusT ,selectStatusS = false"
          :class="'select' + (selectStatusT ? ' open' : '')"
          :selectData="selectDataT"
        >
          <li
            @click.prevent="selectDataT= list.name,check()"
            v-for="list in time"
            v-model="form.time = selectDataT"
          > {{list.name}} </li>
        </ul>
        <p
          class="error-text-none"
          :class="{'error-text-show':error.erT ? true : false}"
          v-model="error.erT"
        >*請選擇您要預約的時間</p>
      </div>
      <div
        class="input-row"
        @click.prevent="selectStatusS = false"
      >
        <ul
          @click.stop.prevent="selectStatusS = !selectStatusS,selectStatusD = false"
          :class="'select' + (selectStatusS ? ' open' : '')"
          :selectData="selectDataS"
        >
          <li
            @click.prevent="selectDataS = list.name,check()"
            v-for="list in service"
            v-model="form.service =selectDataS"
          >
            {{list.name}}
          </li>
        </ul>
        <p
          class="error-text-none"
          :class="{'error-text-show':error.erS ? true : false}"
          v-model="error.erS"
        >*請選擇您要預約的時間</p>
      </div>
      <p
        class="submit-success-none"
        :class="{'submit-success-show':messageshow ? true : false}"
        v-model="messageshow"
      >{{message}}</p>

      <button
        type="button"
        class="submit-btn"
        @click="onSubmit()"
      >送出</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Booking",
  data() {
    return {
      error: {
        erN: false,
        erP: false,
        erD: false,
        erT: false,
        erS: false
      },
      selectStatusD: false,
      selectData: "請選擇設計師",
      selectDataT: "請選擇時間",
      selectDataS: "請選擇服務",
      selectStatusT: false,
      selectStatusS: false,
      form: {
        user_name: "",
        phone: "",
        designer: null,
        time: null,
        service: null
      },
      resData: [],
      designers: [],
      time: [],
      service: [],
      show: true,
      messageshow: false,
      message: "已收到預約表單!我們會盡速跟您確認!"
    };
  },
  created() {
    this.getFromData();
  },
  watch: {
    selectData: function() {
      this.check();
    },
    selectDataT: function() {
      this.check();
    },
    selectDataS: function() {
      this.check();
    }
  },
  methods: {
    getFromData() {
      axios.post("https://sika.idea-infinite.com/api/v1/service").then(res => {
        this.designers = res.data.data.designers;
        this.time = res.data.data.time;
        this.service = res.data.data.service;
      });
    },
    onSubmit(evt) {
      // evt.preventDefault();
      let vm = this;
      if (vm.form.user_name == "") {
        vm.error.erN = true;
      }
      if (vm.form.phone == "") {
        vm.error.erP = true;
      }
      if (vm.form.designer == "請選擇設計師") {
        vm.error.erD = true;
      }
      if (vm.form.time == "請選擇時間") {
        vm.error.erT = true;
      }
      if (vm.form.service == "請選擇服務") {
        vm.error.erS = true;
      }
      // if (is_send)
      axios
        .post("https://sika.idea-infinite.com/api/v1/booking", vm.form)

        .then(function(res) {
          vm.resData = res.data;
          console.log(vm.resData);
          // vm.error = vm.resData.error;
          if (vm.resData.status == false) {
          } else {
            vm.form.user_name = "";
            vm.form.phone = "";
            vm.selectData = "請選擇設計師";
            vm.selectDataT = "請選擇時間";
            vm.selectDataS = "請選擇服務";
            vm.messageshow = true;
            // evt.preventDefault();
          }
        });
    },
    check() {
      if (this.form.user_name != "") {
        this.error.erN = false;
      }
      if (this.form.phone != "") {
        this.error.erP = false;
      }
      if (this.form.designer !== this.selectData) {
        this.error.erD = false;
      }
      if (this.form.time !== this.selectDataT) {
        this.error.erT = false;
      }
      if (this.form.service !== this.selectDataS) {
        this.error.erS = false;
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/global.scss";

.error-text-none {
  opacity: 0;
  padding: 5px 0;
}
.error-text-show {
  opacity: 1;
  text-align: left;
  font-size: 14px;
  color: #fc8b85;
  transition: 0.2s all ease-in;
}
.submit-success-none {
  opacity: 0;
  padding: 5px 0;
}
.submit-success-show {
  opacity: 1;
  text-align: center;
}
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
    margin: 20px auto;
    position: relative;

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
      position: relative;
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
      margin-top: 0;
    }
    //小平板
    @include small-pad-width {
      width: 100%;
      margin-top: 0;
    }
    //手機
    @include phone-width {
      width: 100%;
      margin-top: 0;
    }
  }
}

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
  &.open {
    overflow: visible;
  }
  &:before {
    content: attr(selectData);
    display: block;
    padding: 20px 10px;
  }
  &:after {
    content: "";
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
    font-family: "Material Icons";
    font-size: 20px;
    transition: 0.2s;
  }
  &.open:after {
    transform: rotate(180deg);
  }
  li {
    display: block;
    padding: 10px 10px;
    position: relative;
    z-index: 1;
    transition: 0.5s;
    background: $submain-Bg-Color;
    &:hover {
      background: #52504d;
      color: $submain-T-Color;
      transition: 0.3s;
    }
  }
}
</style>
