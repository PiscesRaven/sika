<template>
  <div>
    <button
      id="toggle"
      @click="select()"
    >
      <div
        class="span"
        id="top"
      ></div>
      <div
        class="span"
        id="middle"
      ></div>
      <div
        class="span"
        id="bottom"
      ></div>
    </button>
    <div
      id="navbar"
      class="navbar"
      :class="{active: isActive}"
    >
      <router-link
        to="/"
        class="rwd-home"
      ><img src="../../public/img/navbar_logo.svg"></router-link>
      <ul
        class="nav-bar"
        @click="select()"
      >
        <li class="nav-items"><span class="navbar-brand">
            <router-link to="/"><img src="../../public/img/navbar_logo.svg"></router-link>
          </span></li>
        <li class="nav-items">
          <router-link to="/news">
            優惠資訊<p>News</p>
          </router-link>
        </li>
        <li class="nav-items">
          <router-link to="/hairstyle">
            髮型專區 <p>Hair</p>
          </router-link>
        </li>
        <li class="nav-items">
          <router-link to="/designer">
            設計師 <p>Stylist</p>
          </router-link>
        </li>
        <li class="nav-items">
          <router-link to="/article">
            流行趨勢 <p>Blog</p>
          </router-link>
        </li>
        <li class="nav-items">
          <router-link to="/video">
            影片專區 <p>Video</p>
          </router-link>
        </li>
        <li class="nav-items">
          <router-link to="/service">
            服務項目 <p>Service</p>
          </router-link>
        </li>
        <li class="nav-items">
          <router-link to="/booking">
            線上預約<p> Booking </p>
          </router-link>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isActive: false,
      window_w: 0
    };
  },
  mounted() {
    this.window_w = window.innerWidth;
    window.addEventListener("resize", () => {
      this.window_w = window.innerWidth;
    });
  },
  methods: {
    select() {
      this.isActive = !this.isActive;
      if (this.window_w <= 768 && this.isActive == true) {
        document.body.classList.add("modal-open");
      }
      if (this.window_w <= 768 && this.isActive == false) {
        document.body.classList.remove("modal-open");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 998;
  height: 110px;
  font-size: 16px;
  padding: 0;
  background: linear-gradient(
    to top,
    rgba(112, 112, 112, 0),
    rgba(112, 112, 112, 0) 9%,
    rgba(106, 106, 106, 0.51) 40%,
    rgba(106, 106, 106, 0.88) 71%,
    #626262
  );
  .navbar-brand {
    padding-right: 130px;
    margin-right: 0px;
    //電腦版
    @include pc-width {
      padding-right: 20px;
    }
    //平板
    @include pad-width {
      padding-right: 60px;
    }
    .router-link-active {
      border: none;
      img {
        padding-top: 10px;
        width: 80px;
        height: 75px;
        border: none;
      }
    }
  }
  .router-link-active {
    border: none;
    img {
      padding-top: 10px;
      width: 80px;
      height: 75px;
      border: none;
    }
  }
  .router-link-active {
    border-bottom: 3px solid #fff;
    line-height: 30px;
    transform: translateY(-50%);
    //平板以下
    @include pad-and-phone-width {
      transform: translateY(0%);
    }
  }
  .rwd-home {
    display: none;
    &.router-link-active {
      transform: none;
    }
    //平板
    @include pad-width {
      img {
        padding-top: 10px;
        width: 100px;
      }
    }
    //平板以下
    @include pad-and-phone-width {
      display: block;
      border-bottom: none;
      img {
        padding-top: 10px;
        width: 100px;
      }
    }
  }

  .nav-bar {
    display: inline-flex;
    //小平板
    @include small-pad-width {
      width: 100%;
    }
    //手機
    @include phone-width {
      width: 100%;
    }

    .nav-items {
      &:nth-child(n + 2) {
        margin: 37px 15px;
        height: 30px;
        overflow: hidden;
        //平板
        @include pad-width {
          margin: 37px 10px;
        }
        //平板以下
        @include pad-and-phone-width {
          margin: 11px 15px;
          width: 30%;
        }
      }
      > a {
        color: $submain-T-Color;
        display: block;
        text-decoration: none;
        transition: 0.3s;
        line-height: 30px;

        &:hover {
          transform: translateY(-50%);
          //平板以下
          @include pad-and-phone-width {
            transform: translateY(0%);
          }
          p {
            box-sizing: border-box;
            border-bottom: 3px solid #fff;
            transform: translateY(0%);
          }
        }
      }
      p {
        //平板以下
        @include pad-and-phone-width {
          display: none;
        }
      }
    }
  }

  @include small-pad-width {
    .navbar-brand {
      display: none;
    }
    .nav-bar {
      display: inline-block;
      padding-left: 13px;
      height: 100vh;
      padding-top: 114px;
      opacity: 0.9;
      background: linear-gradient(
        to right,
        rgba(41, 40, 39, 1) 0%,
        rgba(41, 40, 39, 1) 50%,
        rgba(255, 255, 255, 0) 50%
      );
      position: fixed;
      top: 0;
      left: -100%;
      transition: 1s;
    }
  }
  @include phone-width {
    .navbar-brand {
      display: none;
    }
    .nav-bar {
      display: inline-block;
      padding-left: 13px;
      height: 100vh;
      padding-top: 114px;
      opacity: 0.9;
      background: linear-gradient(
        to right,
        rgba(41, 40, 39, 1) 0%,
        rgba(41, 40, 39, 1) 75%,
        rgba(255, 255, 255, 0) 75%
      );
      position: fixed;
      top: 0;
      left: -100%;
      transition: 1s;
    }
  }
}

//按鈕
#toggle {
  position: fixed;
  left: 20px;
  top: 14px;
  z-index: 999;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: #3b3a39;
  transition: all 0.3s ease-out;
  display: none;
  opacity: 0;
  border: 1px solid #707070;
  border-radius: 7px;
  @include pad-and-phone-width {
    display: block;
    opacity: 1;
    margin-top: 6px;
  }
  .span {
    border-radius: 10px;
    background: $submain-Bg-Color;
    backface-visibility: hidden;
    @include pad-and-phone-width {
      height: 2px;
      margin: 7px 0;
      width: 26px;
      transition: all 0.3s ease-out;
      backface-visibility: visible;
      display: block;
      opacity: 1;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
// Navbar 選擇時
.navbar.active {
  > .nav-bar {
    @include small-pad-width {
      left: 0;
    }
    @include phone-width {
      left: 0;
    }
  }
}
</style>

