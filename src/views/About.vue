<template>
  <div class="about">
    <div class="profile">Profile</div>
    <div class="profile-content">
      <div class="profile-content-inner">
        <img class="profile-content-img" src="../assets/images/about/profile.jpg" alt="">
        <div class="profile-content-msg">
          <span class="profile-content-name">Toka</span>
          <span class="profile-content-sub">designer</span>
          <span class="profile-content-text">
            <b>プロフィール：</b><br>
            2004年生まれ / 高知出身<br>
            <br>
            幼少時代から絵を書く事が好きで、<br>
            ペンタブでイラストを描くようになってからは、<br>
            デジタルコンテンツの制作に邁進<br>
            <br>
            工業高校総合デザイン科で、個人・チームでの制作を経て<br>
            自身のコネクションからの仕事を受けながら、<br>
            さらなる技術の向上を求め進学を目指す。<br>
            <br>
            <br>
            2020.&nbsp;&nbsp;高知県立高知工業高等学校&nbsp;入学<br>
            2021.&nbsp;&nbsp;開業（個人制作の仕事請負）<br>
            2023.&nbsp;&nbsp;オンラインコミュニティスタッフ開始<br>
            2023.&nbsp;&nbsp;高知県立高知工業高等学校&nbsp;卒業<br>
            <br>
            <br>
            <b>好きな絵師：</b><br>
            <p>ヤマコ（HoneyWorks）：<a href="https://twitter.com/yamako2626?s=20" target="_blank">twitter</a></p><br>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    let eles = document.getElementsByClassName("home-menu");
    for (let i = 0; i < eles.length; i++) {
      eles[i].classList.remove("link-text-choice");
    }
    document.getElementById("to-about").classList.add("link-text-choice");
    document.getElementsByClassName("menu-div")[0].classList.remove("show-menu-div");
  }
}
</script>

<style scoped>
.profile {
  color: black;
  text-decoration: none;
  font-family: 'Great Vibes', cursive;
  font-size: 2em;
  text-align: center;
  margin-top: 2vw;
}
.profile-content {
  width: 40%;
  margin: 2vw auto 0;
}
.profile-content-inner {
  display: inline-flex;
  width: 100%;
}
.profile-content-img {
  width: 16vw;
  height: 16vw;
  object-fit: cover;
}
.profile-content-msg {
  width: 60%;
  display: inline-grid;
  padding-left: 2vw;
  font-family: "Noto Serif JP", Sans-serif ;
}
.profile-content-name,
.profile-content-sub {
  color: #B69885;
}
.profile-content-name {
  font-size: 1.8vw;
  line-height: 1.2vw;
}
.profile-content-sub {
  line-height: 3vw;
}
.profile-content-text {
  color: rgb(108, 104, 104);
}
@media screen and (max-width:960px) {
  .profile-content {
    width: 80%;
    margin: 2vw auto 0;
  }
  .profile-content-inner {
    display: inline-grid;
    width: 100%;
    margin: 0 auto;
  }
  .profile-content-img {
    width: 30vw;
    height: 30vw;
    object-fit: cover;
    margin: 0 auto;
    border: 1px solid black;
  }
  .profile-content-msg {
    width: 100%;
  }
  .profile-content-name {
    font-size: 5vw;
    line-height: 10vw;
    width: 100%;
    text-align: center;
  }
  .profile-content-sub {
    font-size: 3vw;
    line-height: 5vw;
    width: 100%;
    text-align: center;
  }
  .profile-content-text {
    width: 80%;
    margin: 5vw auto 0;
    text-align: center;
  }
}
</style>
