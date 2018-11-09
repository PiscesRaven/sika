<template>
  <div class="footer">
    <b-container>
      <b-row class="footer-info">
        <b-col md="4" sm="12" cols="12">
          <div class="sikainfo">
            <h2>
              希卡 Hair Salon
            </h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </p>
            <div id="footer-input">
              <input type="text" name="" id="" placeholder="Search">
              <img src="../assets/icon/btn_search.svg">
            </div>
          </div>
        </b-col>
        <b-col md="4" sm="12" cols="12">
          <div class="sika-contact">
            <h2>CONTACT US</h2>
            <p> +44 345 678 903<br>
              adobexd@mail.com<br>
              Find a Store </p>
          </div>
        </b-col>
        <b-col md="4" sm="12" cols="12">
          <div class="sika-menulist">
            <h2>INFORMATION</h2>
            <p>熱門訊息 News</p>
            <p>髮型專區 hair</p>
            <p>設計師 Stylist</p>
            <p>流行趨勢 Blog</p>
            <p>影片專區 Video</p>
          </div>
        </b-col>
      </b-row>
      <b-row class="builder">
        <b-col md="6" sm="12">
          <p>© Copyright © 2018 Idea-Infinite Information Marketing Co.Ltd.. All rights reserved</p>
        </b-col>
        <b-col md="6" sm="12">
          <p>Design by idea infinite 網頁設計</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/global.scss';

.footer {
  background: #000;
  color: #fff;
  width: 100%;
  padding-top: 57px;
  font-size: 16px;
  .footer-info {
    margin: 0 auto;
    display: flex;
    line-height: 25px;
    .sikainfo {
      margin-bottom: 58px;
      > h2 {
        width: 167px;
        height: 33px;
        font-family: NotoSansCJKtc;
        font-size: 22px;
        font-weight: bold;
        line-height: 1.5;
        text-align: left;
        color: #ffffff;
      }
      > p {
        margin-top: 21px;
        text-align: left;
        margin-bottom: 21px;
      }
      #footer-input {
        text-align: left;
        position: relative;
        width: 100%;
        input[type='text'] {
          height: 46px;
          border-radius: 4px;
          border: solid 1px #7fc4fd;
          background: #000;
          color: #fff;
          padding-left: 22px;
          font-size: 16px;
          //電腦版
          text-align: left;
          @include pc-width {
            width: 286px;
          }
          //平板
          @include pad-width {
          }
          @include small-pad-width {
            width: 100%;
          }

          @include phone-width {
            width: 100%;
          }
        }
        img {
          width: 20px;
          height: 20px;
          position: absolute;
          top: 15px;
          left: 251px;
          width: 20px;
          height: 20px;
          @include pad-width {
            left: 80%;
          }
          @include small-pad-width {
            left: 88%;
          }
          @include phone-width {
            left: 88%;
          }
        }
      }
    }

    .sika-contact {
      text-align: left;
      margin-left: 146px;
      margin-right: 60px;
      //電腦版
      @include pc-width {
        margin-left: 73px;
        margin-right: 30px;
      }
      //平板
      @include pad-width {
        margin: 0;
      }
      //小平板
      @include small-pad-width {
        text-align: center;
        margin: 0;
      }
      //手機
      @include phone-width {
        text-align: center;
        margin: 0;
      }
      > h2 {
        height: 33px;
        padding-top: 14px;
        @include pc-width {
          width: 101px;
        }
        //小平板
        @include small-pad-width {
          text-align: center;
        }
        //手機
        @include phone-width {
          text-align: center;
        }
      }
      > p {
        display: block;
        margin-top: 23px;
      }
    }
    .sika-menulist {
      text-align: left;

      //電腦版
      @include pc-width {
        margin-left: 73px;
        margin-right: 30px;
      }

      //小平板
      @include small-pad-width {
        text-align: center;
        margin-bottom: 15px;
      }
      //手機
      @include phone-width {
        text-align: center;
        margin-bottom: 15px;
      }
      > h2 {
        height: 33px;
        padding-top: 14px;
        margin-bottom: 23px;
      }
      > p {
        // width: 109px;
        color: #ffffff;
      }
    }
  }
  .builder {
    width: 100%;
    margin-bottom: 19px;
    display: inline-flex;
    justify-content: space-between;
    :nth-child(1) {
      text-align: left;
    }
    :nth-child(2) {
      text-align: right;
    }
    > p {
      height: 18px;
      font-size: 12px;
      line-height: 1.5;
    }
  }
}
</style>
