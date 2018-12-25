<template>
  <div id="app">
    <NavBar />
    <scrollTop />
    <transition
      name="fade"
      mode="out-in"
      appear
    >
      <router-view />
    </transition>
    <transition
      name="show"
      mode="out-in"
      appear
    >
      <Footer />
    </transition>
    <!--Loading -->
    <div
      class="el-loading-mask is-fullscreen"
      style="z-index: 2000;"
      v-show="timer"
    >
      <div class="el-loading-spinner">
        <img
          src="../public/img/navbar_logo.svg"
          alt=""
        >
        <p class="el-loading-text">loading</p>
      </div>
    </div>

  </div>
</template>

<script async src="./assets/embed"></script>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import scrollTop from "@/components/scrollTop.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
export default {
  name: "home",
  components: {
    NavBar,
    scrollTop,
    Footer
  },
  data() {
    return {
      timer: true
    };
  },
  created() {
    setTimeout(() => {
      this.timer = false;
    }, 2500);
  },
  watch: {
    $route(to, from) {
      this.timer = true;

      if (to.path !== from.path) {
        setTimeout(() => {
          this.timer = false;
        }, 2500);
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/scss/restscss.scss"; // reset
@import "@/assets/scss/global.scss";

// RWD 響應式尺寸
.fz-tw {
  font-family: "NotoSansCJKtc";
}
body.modal-open {
  overflow: hidden;
}

@font-face {
  font-family: "NotoSansCJKtc";
  src: url("assets/font/NotoSansCJKtc-Regular.otf") format("woff2");
}
#app {
  font-family: "Georgia", "NotoSansCJKtc", "Avenir", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  cursor: pointer;
}

img {
  height: auto;
  max-width: 100%;
}

.container-body {
  min-height: 500px;
}

.carousel-item {
  > img {
    height: 100vh !important;
  }
}
.page-title {
  font-size: 52px;
  line-height: 1.48;
  color: $submain-T-Color;
  margin: auto;
}
.btn-primary {
  border: none !important;
  background-color: $main-Bg-Color !important;
  &:active {
    border: none !important;
    background-color: $main-Bg-Color !important;
  }
}

.page-link {
  font-family: NotoSansCJKtc;
  height: 43px;
  width: 43px;
  padding: 10px;
  color: $main-T-Color;
  cursor: auto;
  background-color: $submain-Bg-Color;
  border: none;
  margin: auto 1px;
  &:hover {
    padding: 10px;
    color: $submain-T-Color;
    cursor: auto;
    background-color: $main-Bg-Color;
    border-radius: 50%;
  }
  @include phone-width {
    height: 40px;
    width: 40px;
  }
}
.page-item {
  &:last-child .page-link {
    border-radius: 50%;
  }
  &:first-child .page-link {
    border-radius: 50%;
  }
  &.active .page-link {
    height: 43px;
    width: 43px;
    padding: 10px;
    color: $submain-T-Color;
    background: $main-Bg-Color;
    border-radius: 50%;
    border: none;
  }
}

.booking-from {
  max-width: 770px;
  margin: auto;
  .form-group {
    margin-bottom: 22px;
    .form-control {
      height: 57px;
    }
  }
  .custom-select {
    // background: gold;
    option {
      &:hover {
        background: red;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.show-enter-active,
.show-leave-active {
  transition: opacity 4s;
}

.show-enter,
.show-leave-active {
  opacity: 0;
}

.el-loading-spinner {
  img {
    width: 20%;
    //電腦版
    @include pc-width {
      width: 50%;
    }
    //平板
    @include pad-width {
      width: 50%;
    }
    //小平板
    @include small-pad-width {
      width: 50%;
    }
    //手機
    @include phone-width {
      width: 80%;
    }
  }
}

.el-loading-parent--relative {
  position: relative !important;
}
.el-loading-parent--hidden {
  overflow: hidden !important;
}
.el-loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: rgb(87, 87, 87);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.el-loading-mask.is-fullscreen {
  position: fixed;
}
.el-loading-mask.is-fullscreen .el-loading-spinner {
  margin-top: -25px;
}
.el-loading-mask.is-fullscreen .el-loading-spinner .circular {
  height: 50px;
  width: 50px;
}
.el-loading-spinner {
  top: 25%;
  margin-top: -21px;
  width: 100%;
  text-align: center;
  position: absolute;
}
.el-loading-spinner .el-loading-text {
  color: #ffffff;
  margin: 3px 0;
  font-size: 14px;
}
.el-loading-spinner .circular {
  height: 42px;
  width: 42px;
  -webkit-animation: loading-rotate 2s linear infinite;
  animation: loading-rotate 2s linear infinite;
}
.el-loading-spinner .path {
  -webkit-animation: loading-dash 1.5s ease-in-out infinite;
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409eff;
  stroke-linecap: round;
}
.el-loading-spinner i {
  color: #409eff;
}
.el-loading-fade-enter,
.el-loading-fade-leave-active {
  opacity: 0;
}
@-webkit-keyframes loading-rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading-rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>
