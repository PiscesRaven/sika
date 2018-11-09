<template>
  <div id="app">
    <NavBar></NavBar>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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
}
</script>
<style lang="scss">
@import '@/assets/scss/restscss.scss'; // reset
@import '@/assets/scss/global.scss';


// RWD 響應式尺寸

@font-face {
  font-family: 'NotoSansCJKtc';
  src: url('assets/font/NotoSansCJKtc-Regular.otf') format('woff2');
}

.tw_font {
  font-family: NotoSansCJKtc;
}

.en_font {
  font-family: Georgia;
}
#app {
  font-family: 'Georgia', 'NotoSansCJKtc', 'Avenir', Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a {
  text-decoration: none;
}

img {
  height: auto;
  max-width: 100%;
}

.d-flex {
  display: flex;
}
</style>
