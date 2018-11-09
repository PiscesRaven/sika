<template>
  <div id="navbar">
    <b-navbar toggleable="md">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">Sika</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="/news">優惠資訊 News</b-nav-item>
          <b-nav-item href="#">髮型專區 Hair</b-nav-item>
          <b-nav-item href="#">設計師 Stylist</b-nav-item>
          <b-nav-item href="#">流行趨勢 Blog</b-nav-item>
          <b-nav-item href="#">線上預約 Booking</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/global.scss';
#navbar {
  height: 230px;
  background: linear-gradient(
    to top,
    rgba(167, 167, 167, 0),
    rgba(119, 118, 116, 0.54) 42%,
    #454444
  );
  //電腦版
  @include pc-width {
  }
  //平板
  @include pad-width {
    opacity: 0.9;
  }
  //小平板
  @include small-pad-width {
    opacity: 0.9;
    background: none;
  }
  //手機
  @include phone-width {
    position: fixed;
    z-index: 1030;
    opacity: 0.9;
    background: none;
  }
  .navbar {
    padding: 0;
    .navbar-toggler {
      border-radius: 7px;
      background: #707070;
    }
    .navbar-nav {
      text-align: left;
      .nav-item {
        padding: 10px 7px;
        .nav-link {
          line-height: 19px;
          font-size: 16px;
          color: $submain-T-Color;
          &:hover {
          }
        }
      }
    }
    .navbar-brand {
      margin-left: 402px;
      //電腦版
      @include pc-width {
        margin-left: 20px;
      }
      //平板
      @include pad-width {
        margin-left: 10px;
      }
      //小平板
      @include small-pad-width {
        margin-left: 5px;
      }
      //手機
      @include phone-width {
        margin-left: 0px;
      }
    }
  }
}
</style>
