<template>
  <div>
    <div id="toolbar-chat" v-model="scrollTop" v-if="isScrollTop" @click="scrollToTop()"></div>
  </div>
</template>

<script>
export default {
  name: 'ScrollTop',
  data() {
    return {
      // scrollTop默認位置
      scrollTop: null,
      // 按鈕狀態
      isScrollTop: false
    }
  },
  props: {
    el: String
  },
  mounted() {
    // 監聽事件
    window.addEventListener(
      'scroll',
      () => {
        this.scrollTop =
          document.documentElement.scrollTop ||
          window.pageYOffset ||
          document.body.scrollTop ||
          document.querySelector(this.el).scrollTop

        // 控制滾動按鈕顯示或隱藏
        if (this.scrollTop > 150) {
          this.isScrollTop = true
        } else {
          this.isScrollTop = false
        }
      },
      true
    )
  },
  methods: {
    /**
     * 滚动到顶部
     */
    scrollToTop() {
      let $this = this

      // 返回顶部动画特效
      setTimeout(function animation() {
        if ($this.scrollTop > 0) {
          setTimeout(() => {
            // 步进速度
            $this.scrollTop = $this.scrollTop - 20
            // 返回顶部
            if (document.documentElement.scrollTop > 0) {
              document.documentElement.scrollTop = $this.scrollTop - 30
            } else if (window.pageYOffset > 0) {
              window.pageYOffset = $this.scrollTop - 30
            } else if (document.body.scrollTop > 0) {
              document.body.scrollTop = $this.scrollTop - 30
            } else if (document.querySelector($this.el).scrollTop) {
              document.querySelector($this.el).scrollTop = $this.scrollTop - 30
            }

            animation()
          }, 1)
        }
      }, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#toolbar-chat {
  background: url('../assets/icon/btn_top.svg') center no-repeat;
  width: 42px;
  height: 42px;
  position: fixed;
  right: 10%;
  bottom: 10%;
  z-index: 15;
}
</style>
