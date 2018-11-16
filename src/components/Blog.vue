<template>
  <div>
    <h1 class="post-title">
    </h1>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Blog',
  data() {
    return {
      post: [],
      selectStatus: false,
      selectData: '請選擇一個選項'
    }
  },
  methods: {
    getList() {
      // axios
      //   .get('https://sika.idea-infinite.com/api/v1/news/list', {
      //     params: {
      //       limit: 6,
      //       offset: (pageNum - 1) * 6
      //     }
      //   })
      //   .then(res => {
      //     console.log(res.data.data)
      //     this.NewsList = res.data.data
      //   })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  height: 1000px;
  padding-top: 350px;
}
</style>
