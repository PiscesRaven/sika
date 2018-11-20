<template>
  <div class="footer">
    <b-container>
      <b-row class="footer-info">
        <b-col lg="6" md="4" sm="12" cols="12">
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
              <button class="ft-booking-btn">線上預約</button>
            </div>
          </div>
        </b-col>
        <b-col lg="2" md="4" sm="12" cols="12">
          <div class="sika-contact">
            <h2>CONTACT US</h2>
            <p> +44 345 678 903<br>
              adobexd@mail.com<br>
              Find a Store </p>
          </div>
        </b-col>
        <b-col lg="4" md="4" sm="12" cols="12">
          <div class="sika-menulist">
            <h2>INFORMATION</h2>
            <p>
              <router-link to="/news">
                優惠訊息 News
              </router-link>
            </p>
            <p>
              <router-link to="/hairstyle">
                髮型專區 hair
              </router-link>
            </p>
            <p>
              <router-link to="/designer">
                設計師 Stylist
              </router-link>
            </p>
            <p>
              <router-link to="/bloglist">
                流行趨勢 Blog
              </router-link>
            </p>
            <p>
              <router-link to="/video">
                影片專區 Video
              </router-link>
            </p>
            <p>
              <router-link to="/products">
                產品資訊 Products
              </router-link>
            </p>
            <p>
              <router-link to="/booking">
                線上預約 Booking
              </router-link>
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row class="builder">
        <b-col md="8" sm="12">
          <p>© Copyright © 2018 Idea-Infinite Information Marketing Co.Ltd.. All rights reserved

          </p>
        </b-col>
        <b-col md="4" sm="12">
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
  background: $main-Bg-Color;
  color: $submain-T-Color;
  width: 100%;
  padding-top: 57px;
  font-size: 16px;
  .footer-info {
    margin: 0 auto;
    display: flex;
    line-height: 25px;
    margin-bottom: 35px;
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
        color: $submain-T-Color;
      }
      > p {
        width: 80%;
        margin-top: 21px;
        text-align: left;
        margin-bottom: 21px;
      }
      #footer-input {
        text-align: left;
        position: relative;
        input[type='text'] {
          width: 286px;
          height: 46px;
          padding-left: 22px;
          font-size: 16px;
          color: $submain-T-Color;
          border-radius: 4px;
          border: solid 1px #ababaa;
          background: $main-Bg-Color;
          //電腦版
          text-align: left;
          @include pc-width {
            width: 200px;
          }
          //平板
          @include pad-width {
            width: 100%;
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
          @include pc-width {
            left: 165px;
          }
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
        .ft-booking-btn {
          width: 170px;
          height: 46px;
          margin-left: 30px;
          font-size: 16px;
          color: $submain-T-Color;
          border-radius: 4px;
          border: solid 1px #ababaa;
          background: $main-Bg-Color;

          @include pad-width {
            margin-left: 0;
            margin-top: 12px;
            width: 50%;
          }
          @include small-pad-width {
            margin-left: 0;
            margin-top: 12px;
            width: 50%;
          }
          @include phone-width {
            margin-left: 0;
            margin-top: 12px;
            width: 50%;
          }
        }
      }
    }

    .sika-contact {
      text-align: left;
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
        a {
          color: $submain-T-Color;
          text-decoration: none;
          &:hover {
            border-bottom: 1px solid #fff;
          }
        }
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
    :nth-child(2) p {
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
