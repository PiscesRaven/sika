<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    NavBar,
    Footer
  }
  // watch: {
  //   $route(to, from) {
  //     console.log(to.path)
  //   }
  // }
}
</script>
<style lang="scss">
@import '@/assets/scss/restscss.scss'; // reset
@import '@/assets/scss/global.scss';

// RWD 響應式尺寸
.fz-tw {
  font-family: 'NotoSansCJKtc';
}

@font-face {
  font-family: 'NotoSansCJKtc';
  src: url('assets/font/NotoSansCJKtc-Regular.otf') format('woff2');
}
#app {
  font-family: 'Georgia', 'NotoSansCJKtc', 'Avenir', Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
}

img {
  height: auto;
  max-width: 100%;
}

.container-body {
  min-height: 500px;
}

.d-flex {
  display: flex;
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
</style>
