<template>
  <div class="home">
    <div class="container">
      <img class="image" src="../assets/images/home/home1.jpg" alt="">
      <img class="image" src="../assets/images/home/home2.jpg" alt="">
    </div>
    <img class="kugiri-line" src="../assets/images/parts/line.png" alt="">
    <div class="home-msg">
      <span class="home-msg-title">
        好きなもの、好きなこと、そんなあやふやなイメージを具現化していく
      </span>
      <span class="home-msg-msg">
        自分らしさを表現する<br>
        また、貰ったイメージからその人らしさを表現する<br>
        そんな仕事を目指しています。
      </span>
    </div> 
    <img class="kugiri-line" src="../assets/images/parts/line.png" alt="">
    <div class="for-work">
      <div class="for-work-inner">
        <img class="for-work-img" src="../assets/images/home/guitar.jpg" alt="guitar">
        <div class="for-work-msg">
          <span class="for-work-msg-title">
            良い感じの殺し文句
          </span>
          <hr class="for-work-hr">
          <span class="for-work-msg-msg">
            女性デザイナーが作るデザインだからこそ、 女性が好むデザインをご提案できます。<br>
          「Toka designってどんなイメージが作れるの？」「どんな実績があるの？」と気になった方は、ぜひご覧ください。
          </span>
          <button class="for-work-msg-btn">
            <router-link class="for-work-msg-btn-link-text" to="/work">Read More</router-link>
          </button>
        </div>
      </div>
    </div>
    <div class="work-tip">
      <span class="work-tip-title">Works</span>
      <div class="work-tip-hr"></div>
      <div class="work-tip-back"></div>
      <div class="work-tip-sample">
        <img class="work-tip-sample-img" src="../assets/images/works/87469.jpg" alt="">
        <img class="work-tip-sample-img" src="../assets/images/works/87466.jpg" alt="">
        <img class="work-tip-sample-img" src="../assets/images/works/87472.jpg" alt="">
      </div>
      <div class="work-tip-sample">
        <img class="work-tip-sample-img" src="../assets/images/works/87475.jpg" alt="">
        <img class="work-tip-sample-img" src="../assets/images/works/87462.jpg" alt="">
        <img class="work-tip-sample-img" src="../assets/images/works/guitar.jpg" alt="">
      </div>
      <div class="work-tip-msg">"今まで請け負った仕事のサンプル"</div>
      <router-link class="work-tip-btn" to="/work">作業実績一覧はこちら</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    let eles = document.getElementsByClassName("home-menu");
    for (let i = 0; i < eles.length; i++) {
      eles[i].classList.remove("link-text-choice");
    }
    document.getElementById("to-home").classList.add("link-text-choice");
    document.getElementsByClassName("menu-div")[0].classList.remove("show-menu-div");
  },
}
</script>

<style scoped>
.home {
  margin-top: 2em;
  width: 100%;
  font-family: "Noto Serif JP", Sans-serif;
}
.container {
  position: relative;
  width: 80%;
  height: 30vw;
  margin: 0 auto;
  border: unset;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}

.image {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;
  animation: change-img-anim 30s infinite;
}

.image:nth-of-type(1) {
  animation-delay: 0s;
}
.image:nth-of-type(2) {
  animation-delay: 15s;
}
@keyframes change-img-anim {
  0%{ opacity: 0;}
  10%{ opacity: 1;}
  50%{ opacity: 1;}
  60%{ opacity: 0;}
}
.home-msg {
  display: table;
  margin: 0 auto;
  position: relative;
  text-align: center;
}

.home-msg-title {
  display: grid;
  margin: 1vw 0 3vw;
  font-size: 1.6em;
  font-weight: bold;
}
.home-msg-msg {
}
.for-work {
  display: block;
  margin: 2vw auto 0;
  width: 40%;
  background-color: #E7E2D9;
  padding: 2vw;
}
.for-work-inner {
  display: inline-flex;
  width: 100%;
}
.for-work-img {
  width: 14em;
  height: 14em;
  object-fit: cover;
  margin-right: 2vw;
}
.for-work-msg {
  width: 60%;
  position: relative;
}
.for-work-msg-title {
  font-size: 1.6em;
  font-weight: bold;
}
.for-work-hr {
  position: relative;
  width: 40%;
  height: 0.2px;
  margin: 0.8rem 0;
  background-color: #4a4a4a;
}
.for-work-msg-msg {
  font-size: 0.8em;
}
.for-work-msg-btn {
  position: absolute;
  background-color: unset;
  border-style: solid;
  border-width: 0px 1px 1px 0px;
  border-color: #595048D4;
  bottom: 0;
  right: 0;
  box-shadow: 4px 4px 2px #d3c6b0;
  font-size: 1rem;
  width: 7rem;
  height: 2rem;
}
.for-work-msg-btn-link-text {
  text-decoration: none;
  color: #4a4a4a;
}
.work-tip {
  display: block;
  margin: 2em auto 5em;
  width: 100%;
  position: relative;
  padding-bottom: 5vw;
}
.work-tip-hr {
  position: absolute;
  width: 2.5em;
  height: 0.6em;
  background-color: #d9d9d9;
  top: 1.2rem;
  left: 23rem;
  z-index: -1;
}
.work-tip-title {
  font-size: 2rem;
  margin-left: 20vw;
}
.work-tip-back {
  background-color: #CFCBC6;
  width: 100%;
  height: 28vw;
  bottom: 0;
  position: absolute;
  z-index: -1;
}
.work-tip-sample {
  margin: 0 auto;
  display: table;
}
.work-tip-sample-img {
  width: 14vw;
  height: 14vw;
  object-fit: cover;
  margin: 1.2vw 2.6vw 0;
  border: 1px solid #4a4a4a;
}
.work-tip-msg {
  position: absolute;
  font-size: 1rem;
  bottom: 1vw;
  left: 25vw;
}
.work-tip-btn {
  position: absolute;
  text-decoration: none;
  color: white;
  background-color: #595048D4;
  padding: 0.6vw 1vw;
  bottom: 1vw;
  right: 25vw;
  transition: .3s;
}
.work-tip-btn:hover {
  transform: scale(1.05);
  opacity: 0.6;
}
@media screen and (max-width:960px) {
  .container {
    width: 97%;
    height: 45vw;
  }
  .kugiri-line {
    width: 60%;
  }
  .home-msg-title {
    margin: 1vw 0 3vw;
    font-size: 1.4em;
    font-weight: bold;
  }
  .for-work {
    width: 80%;
  }
  .work-tip {
    margin: 2em auto;
  }
  .work-tip-title {
    margin-left: 10vw;
  }
  .work-tip-hr {
    left: 4rem;
  }
  .work-tip-sample-img {
    width: 20vw;
    height: 20vw;
  }
  .work-tip-back {
    height: 40vw;
  }
  .work-tip-msg {
    left: 15vw;
  }
  .work-tip-btn {
    right: 15vw;
  }
}
</style>
