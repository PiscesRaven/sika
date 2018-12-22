<template>
  <div class="footer">
    <b-container>
      <b-row class="footer-info">
        <b-col
          xl="6"
          lg="6"
          md="4"
          sm="12"
          cols="12"
        >
          <div class="sikainfo">
            <h2>
              希卡 Hair Salon
            </h2>
            <p>
              Don’t wait for the perfect moment. Take the moment and make it perfect.
            </p>
            <div id="footer-input">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
              >
              <img src="../assets/icon/btn_search.svg">
              <button class="ft-booking-btn">
                <router-link to="/booking">
                  線上預約 Booking
                </router-link>
              </button>

            </div>
          </div>
        </b-col>
        <b-col
          lg="2"
          md="4"
          sm="12"
          cols="12"
        >
          <div class="sika-contact">
            <h2>CONTACT</h2>
            <p> 04 723 3405<br>
              彰化縣彰化市民生南路23號
              <font-awesome-icon
                :icon="['fas','map-marker-alt']"
                size="2x"
              />
            </p>

          </div>
        </b-col>
        <b-col
          xl="3"
          lg="4"
          md="4"
          sm="12"
          cols="12"
        >
          <div class="sika-menulist">
            <h2>INFORMATION</h2>
            <p>
              <router-link to="/news#/1">
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
              <router-link to="/article#/1">
                流行趨勢 Blog
              </router-link>
            </p>
            <p>
              <router-link to="/video#/1">
                影片專區 Video
              </router-link>
            </p>
            <p>
              <router-link to="/products#/1">
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
        <b-col
          xl="1"
          class="footer-social-icon"
        >
          <a href="https://www.instagram.com/sika_hairsalon/">
            <font-awesome-icon :icon="['fab','instagram']" />
          </a>
          <a href="https://www.facebook.com/sikahairsalon/">
            <font-awesome-icon :icon="['fab','facebook-f']" />
          </a>
        </b-col>
      </b-row>
      <b-row class="builder">
        <b-col
          md="8"
          sm="12"
        >
          <p>© Copyright © 2018 Idea-Infinite Information Marketing Co.Ltd.. All rights reserved

          </p>
        </b-col>
        <b-col
          md="4"
          sm="12"
        >
          <p>
            <a href="https://idea-infinite.com/">
              Design by idea infinite 網頁設計
            </a>
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-container
      fluid
      class="builder-pad"
    >
      <b-row>
        <b-col cols="12">
          <div>© Copyright © 2018 Idea-Infinite Information Marketing Co.Ltd.. All rights reserved
          </div>
          <p>
            <a href="https://idea-infinite.com/">
              Design by idea infinite 網頁設計
            </a>
          </p>
        </b-col>

      </b-row>
    </b-container fluid>

  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/global.scss";

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
    margin-bottom: 70px;
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
        input[type="text"] {
          width: 270px;
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
          left: 239px;
          width: 20px;
          height: 20px;
          @include pc-width {
            left: 164px;
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
          a {
            color: #fff;
            text-decoration: none;
            &:hover {
              color: #fff;
            }
          }

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
        margin: 0;
      }
      //手機
      @include phone-width {
        margin: 0;
      }
      > h2 {
        font-size: 24px;
        height: 33px;
        padding-top: 14px;
        @include pc-width {
          width: 101px;
        }
      }
      > p {
        display: block;
        margin-top: 23px;
        svg {
          display: none;
          color: #2699fb;
          //平板
          @include pad-width {
            display: inline-block;
          }

          //平板以下
          @include pad-and-phone-width {
            display: inline-block;
          }
        }
      }
    }
    .sika-menulist {
      text-align: left;
      //電腦版
      @include pc-width {
        margin-left: 73px;
        margin-right: 30px;
      }
      //平板
      @include pad-width {
      }
      //平板以下
      @include pad-and-phone-width {
        display: none;
      }
      > h2 {
        height: 33px;
        padding-top: 14px;
        margin-bottom: 23px;
        font-size: 24px;
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
    .footer-social-icon {
      margin-top: 62px;
      text-align: left;
      //電腦版
      @include pc-width {
        display: none;
      }
      //平板
      @include pad-width {
        display: none;
      }
      svg {
        width: 24px;
        height: 24px;
      }
      a {
        color: #fff;
      }
    }
  }
  .builder {
    width: 100%;
    margin-bottom: 19px;
    display: inline-flex;
    justify-content: space-between;
    //平板
    @include pad-width {
      display: none;
    }
    //平板以下
    @include pad-and-phone-width {
      display: none;
    }
    :nth-child(1) {
      text-align: left;
    }
    :nth-child(2) p {
      text-align: right;
      a {
        color: #00e1ff;
      }
    }
    > p {
      height: 18px;
      font-size: 12px;
      line-height: 1.5;
    }
  }
  .builder-pad {
    width: 100%;
    padding: 14px 13px;
    text-align: left;
    display: none;
    background: #707070;
    font-size: 12px;

    //平板
    @include pad-width {
      display: inline-flex;
    }
    //平板以下
    @include pad-and-phone-width {
      display: inline-flex;
      overflow-x: hidden;
    }
    p {
      font-size: 12px;
      line-height: 25px;
      a {
        color: #00e1ff;
      }
    }
  }
}
</style>
