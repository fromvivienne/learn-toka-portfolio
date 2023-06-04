<template>
  <div class="about">
    <div class="profile">Profile</div>
    <div class="profile-content">
      <div class="profile-content-inner">
        <img class="profile-content-img" src="../assets/images/profile/profile1.jpg" alt="">
        <div class="profile-content-msg">
          <span class="profile-content-name">Toka</span>
          <span class="profile-content-sub">designer</span>
          <span class="profile-content-text">
            ****年生まれ/高知出身<br>
            <br>
            （例えば）<br>
            幼少時代から人物画を好み、そういう関係の高校に進学<br>
            自身のコネクションからの仕事を受けながら、さらなる技術の向上を求め芸術大学進学を目指す。<br>
            <br>
            20**.**&nbsp;&nbsp;〇〇〇〇〇<br>
            20**.**&nbsp;&nbsp;開業<br>
            20**.**&nbsp;&nbsp;〇〇〇〇〇<br>
            <br>
            自分の強みとかを一言で掛けたら良い締めになる。
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
  }
}
</script>

<style scoped>
.about {
  margin-bottom: 6vw;
}
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
  @media screen and (max-width:640px) {
  }
</style>
