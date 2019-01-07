<template>
  <div>
    <b-container fluid>
      <b-row class="section-img">
      </b-row>
    </b-container fluid>
    <b-container>
      <b-row class="aboutus_row">
        <b-col
          cols="12"
          sm="12"
          md="6"
        >
          <img
            src="../../public/img/sila-about.jpg"
            alt=""
            class="aboutus_img"
          ></b-col>
        <b-col
          cols="12"
          sm="12"
          md="6"
        >
          <div class="aboutus_block">
            <h1 class="aboutus_title">希卡。Sika。</h1>
            <p>
              【希卡】全店走純白的簡潔風格，清新自然又有質感，讓來到店內的朋友都能感到輕鬆無壓力。對於美髮，【希卡】以自然、好整理為主軸，並針對東方人頭髮的特質做客製化的設計，就是要讓你超有型。<br>
              <br>
              位於彰化民生南路上的【希卡】，於2018年10月重新開幕，強力的團隊擁有5年以上的經驗，目前為4位設計師，建議大家提前預約喔！<br><br>
              【希卡】除了擁有絕對的技術，髮品選擇也不馬虎，以日本哥德式美髮產品為主，染髮、燙髮、護髮都給您至高的享受。<br><br>
              客製化的造型剪髮，
              【希卡】專業依照客人髮質、髮性、臉型、頭型，以及整理習慣、穿衣風格等等，提供最適合的意見，讓您的美麗不會只維持短短的時間，回家後依然可以自己打理，輕鬆維持最佳狀態。<br><br>
              染髮不僅是顏色的變化，更是提升質感的關鍵，【希卡】以日本哥德式染膏，由高質感髮色帶來舒服又有格調的魅力，讓頭髮妝點上嶄新的視覺，且染後髮質不粗糙，維持好質感。<br><br>
              長髮、短髮、直髮、捲髮，無論想要什麼髮，【希卡】都有辦法，不僅是為了美髮，更是創造質感，邀請所愛美的你／妳，為自己踏出改變的第一步，歡迎【希卡Sika Hair Salon】！<br></p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  components: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
$pg-T: #4a90e2;
.section-img {
  background: url("../../public/img/Img_Aboutus.jpg") center right no-repeat;
  background-size: cover;
  height: 410px;
  margin-bottom: 125px;
  //平板以下
  @include pad-and-phone-width {
    background: url("../../public/img/Img_Aboutus_pad.jpg") center right
      no-repeat;
    height: 288px;
    margin-bottom: 10%;
  }
}

.aboutus_row {
  margin-bottom: 125px;
  @include pad-and-phone-width {
    margin-bottom: 10%;
  }
  .aboutus_img {
    margin: auto;
    //平板以下
    @include pad-and-phone-width {
      margin-bottom: 1.4rem;
      content: none;
    }
  }
  .aboutus_block {
    .aboutus_title {
      margin-bottom: 1.2rem;
      font-size: 1.625rem;
    }
    p {
      text-align: left;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
}
</style>
