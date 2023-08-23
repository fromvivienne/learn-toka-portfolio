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
    <div class="for-works">
      <div class="for-works-inner">
        <img class="for-works-img" src="../assets/images/home/guitar.jpg" alt="guitar">
        <div class="for-works-msg">
          <span class="for-works-msg-title">
            いつまでも愛せる作品を
          </span>
          <hr class="for-works-hr">
          <span class="for-works-msg-msg">
            好きなものにひたむきになってきたからこそ、ご提案に添える作品を制作できます。<br>
            「Toka designってどんなイメージが作れるの？」「どんな実績があるの？」と気になった方は、ぜひご覧ください。
          </span>
          <button class="for-works-msg-btn">
            <router-link class="for-works-msg-btn-link-text" :to="{ name: 'artworks' }">Read Mores</router-link>
          </button>
        </div>
      </div>
    </div>
    <div class="works-tip">
      <span class="works-tip-title">Works</span>
      <div class="works-tip-hr"></div>
      <div class="works-tip-back"></div>
      <div class="works-tip-sample">
        <img class="works-tip-sample-img" src="../assets/images/works/87469.jpg" alt="">
        <img class="works-tip-sample-img" src="../assets/images/works/87466.jpg" alt="">
        <img class="works-tip-sample-img" src="../assets/images/works/87472.jpg" alt="">
      </div>
      <div class="works-tip-sample">
        <img class="works-tip-sample-img" src="../assets/images/works/87475.jpg" alt="">
        <img class="works-tip-sample-img" src="../assets/images/works/87462.jpg" alt="">
        <img class="works-tip-sample-img" src="../assets/images/works/guitar.jpg" alt="">
      </div>
      <div class="works-tip-msg">"今まで請け負った仕事のサンプル"</div>
      <router-link class="works-tip-btn" to="/artworks">作業実績一覧はこちら</router-link>
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
.for-works {
  display: block;
  margin: 2vw auto 0;
  width: 40%;
  background-color: #E7E2D9;
  padding: 2vw;
}
.for-works-inner {
  display: inline-flex;
  width: 100%;
}
.for-works-img {
  width: 14em;
  height: 14em;
  object-fit: cover;
  margin-right: 2vw;
}
.for-works-msg {
  width: 60%;
  position: relative;
}
.for-works-msg-title {
  font-size: 1.6em;
  font-weight: bold;
}
.for-works-hr {
  position: relative;
  width: 40%;
  height: 0.2px;
  margin: 0.8rem 0;
  background-color: #4a4a4a;
}
.for-works-msg-msg {
  font-size: 0.8em;
}
.for-works-msg-btn {
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
.for-works-msg-btn-link-text {
  text-decoration: none;
  color: #4a4a4a;
}
.works-tip {
  display: block;
  margin: 2em auto 5em;
  width: 100%;
  position: relative;
  padding-bottom: 5vw;
}
.works-tip-hr {
  position: absolute;
  width: 2.5em;
  height: 0.6em;
  background-color: #d9d9d9;
  top: 1.2rem;
  left: 23rem;
  z-index: -1;
}
.works-tip-title {
  font-size: 2rem;
  margin-left: 20vw;
}
.works-tip-back {
  background-color: #CFCBC6;
  width: 100%;
  height: 28vw;
  bottom: 0;
  position: absolute;
  z-index: -1;
}
.works-tip-sample {
  margin: 0 auto;
  display: table;
}
.works-tip-sample-img {
  width: 14vw;
  height: 14vw;
  object-fit: cover;
  margin: 1.2vw 2.6vw 0;
  border: 1px solid #4a4a4a;
}
.works-tip-msg {
  position: absolute;
  font-size: 1rem;
  bottom: 1vw;
  left: 25vw;
}
.works-tip-btn {
  position: absolute;
  text-decoration: none;
  color: white;
  background-color: #595048D4;
  padding: 0.6vw 1vw;
  bottom: 1vw;
  right: 25vw;
  transition: .3s;
}
.works-tip-btn:hover {
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
  .for-works {
    width: 80%;
  }
  .works-tip {
    margin: 2em auto;
  }
  .works-tip-title {
    margin-left: 10vw;
  }
  .works-tip-hr {
    left: 4rem;
  }
  .works-tip-sample-img {
    width: 20vw;
    height: 20vw;
  }
  .works-tip-back {
    height: 40vw;
  }
  .works-tip-msg {
    left: 15vw;
  }
  .works-tip-btn {
    right: 15vw;
  }
}
</style>
