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
      <ul class="nav-bar">
        <li class="nav-items"><span class="navbar-brand">
            <router-link to="/"><img src="../../public/img/navbar_logo.svg"></router-link>
          </span></li>
        <li class="nav-items">
          <router-link to="/news">
            優惠資訊<span>News</span>
          </router-link>
        </li>
        <li class="nav-items">
          <router-link to="/hairstyle">
            髮型專區 <span>Hair</span>
          </router-link>
        </li>
        <li class="nav-items">
          <router-link to="/designer">
            設計師 <span>Stylist</span>
          </router-link>
        </li>
        <li class="nav-items">
          <router-link to="/bloglist">
            流行趨勢 <span>Blog</span>
          </router-link>
        </li>
        <li class="nav-items">
          <router-link to="/video">
            影片專區 <span>Video</span>
          </router-link>
        </li>
        <li class="nav-items">
          <router-link to="/products">
            產品資訊 <span>Products</span>
          </router-link>
        </li>
        <li class="nav-items">
          <router-link to="/booking">
            線上預約<span> Booking </span>
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
      openerText: "Open",
      isOpen: false,
      menu: ["Home", "Work", "Contact"],
      smallMenu: ["Tips", "Resources", "Shenanigans"]
    };
  },
  methods: {
    select() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/global.scss";
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
    //電腦版
    @include pc-width {
      padding-right: 20px;
    }
    //平板
    @include pad-width {
      padding-right: 0px;
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
    border-bottom: 1px solid #fff;
  }
  .rwd-home {
    display: none;
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
      width: 50%;
    }
    //手機
    @include phone-width {
      width: 100%;
    }

    .nav-items {
      &:nth-child(n + 2) {
        margin: 37px 15px;
        //平板
        @include pad-width {
          margin: 37px 10px;
        }
        //平板以下
        @include pad-and-phone-width {
          margin: 11px 15px;
        }
        span {
          //電腦版
          @include pc-width {
            display: none;
          }
          //平板
          @include pad-width {
            display: none;
          }
        }
      }
      > a {
        display: inline-block;
        line-height: 30px;
        color: $submain-T-Color;
        text-decoration: none;
        &:hover {
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
  @include pad-and-phone-width {
    .navbar-brand {
      display: none;
    }
    .nav-bar {
      display: inline-block;
      padding-left: 13px;
      height: 600px;
      padding-top: 114px;
      opacity: 0.9;
      background: $Menu-Bg-Color;
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
      transition: all 0.3s ease-out;
      backface-visibility: visible;
      display: block;
      opacity: 1;
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

