<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" class="article-title">
          Title
        </b-col>
        <b-col cols="6" class="article-title">
          day
        </b-col>
        <b-col cols="6" class="article-title">
          day
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      selectStatus: false,
      selectData: '請選擇一個選項',
      form: {
        email: '',
        name: '',
        designers: null,
        time: null,
        service: null
      },
      des: [
        { text: '請選擇設計師', value: null },
        { name: 'Lili' },
        { name: 'Erica' },
        { name: 'Raven' },
        { name: 'Keven' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: #272727;
}
.select {
  position: relative;
  display: block;
  list-style: none;
  padding: 0;
  height: 34px;
  overflow: hidden;
  background: #313131;
  color: white;
  cursor: pointer;
}
.select.open {
  overflow: visible;
}
.select:before {
  content: attr(selectData);
  display: block;
  padding: 6px 10px;
}
.select:after {
  content: 'keyboard_arrow_down';
  position: absolute;
  right: 1vw;
  top: 8px;
  display: block;
  font-family: 'Material Icons';
  font-size: 20px;
  height: 20px;
  transition: 0.2s;
}
.select.open:after {
  transform: rotate(180deg);
}
.select li {
  display: block;
  padding: 6px 10px;
  position: relative;
  z-index: 1;
  background: #313131;
}
.select li:hover {
  background: yellow;
  color: #272727;
}

.refresh-button {
  background: #2d97ff;
  border: none;
  font-size: 16px;
  padding: 5px 12px;
  color: white;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  letter-spacing: 0.2pt;
  outline: none;
}
.refresh-button:hover {
  background: #2570b9;
}
.refresh-button span {
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -1px;
}
</style>
