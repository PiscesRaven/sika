<template>
  <div>
    <button id="toggle" @click="select()">
      <div class="span" id="top"></div>
      <div class="span" id="middle"></div>
      <div class="span" id="bottom"></div>
    </button>
    <div id="navbar" class="navbar" :class="{active: isActive}">
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
  name: 'NavBar',
  data() {
    return {
      isActive: false,
      openerText: 'Open',
      isOpen: false,
      menu: ['Home', 'Work', 'Contact'],
      smallMenu: ['Tips', 'Resources', 'Shenanigans']
    }
  },
  methods: {
    select() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/global.scss';
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
  //小平板
  @include small-pad-width {
    position: fixed;
    left: -100%;
    background: $Menu-Bg-Color;
    transition: 1s;
    opacity: 0.9;
    width: 50%;
    height: 500px;
    padding-top: 53px;
  }
  //手機
  @include phone-width {
    position: fixed;
    top: 0;
    left: -100%;
    transition: 1s;
    opacity: 0.9;
    width: 100%;
    height: 500px;
    padding-top: 59px;
    background: $Menu-Bg-Color;
  }
  .router-link-active {
    border-bottom: 1px solid #fff;
  }
  .nav-bar {
    display: inline-flex;

    .nav-items {
      &:nth-child(n + 2) {
        margin: 37px 15px;
        //平板
        @include pad-width {
          margin: 37px 10px;
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

  @media screen and (max-width: $pads-media) {
    .navbar-brand {
      display: none;
    }
    .nav-bar {
      width: 100%;
      display: inline-block;
      background: $Menu-Bg-Color;
      padding: 53px;
      padding-left: 13px;
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

  .span {
    border-radius: 10px;
    background: $submain-Bg-Color;
    transition: all 0.3s ease-out;
    backface-visibility: hidden;
  }
}

@media screen and (max-width: $pads-media) {
  #toggle {
    display: block;
    opacity: 1;
    margin-top: 6px;
    &:active #navbar {
    }
    .span {
      height: 4px;
      margin: 5px 0;
      transition: all 0.3s ease-out;
      backface-visibility: visible;
      display: block;
      opacity: 1;
    }
  }
}

.navbar.active {
  position: fixed;
  left: 0;
}
</style>

