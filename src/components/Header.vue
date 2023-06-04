<template>
  <div id="header" class="header">
    <div class="logo">
      <img src="../assets/sign_small.png" alt="">
    </div>
    <div class="menu">
      <div id="to-home" class="link home-menu">
        <router-link class="link-text" to="/">Home</router-link>
      </div>
      <div id="to-portfolio" class="link home-menu">
        <router-link class="link-text" to="/portfolio">Portfolio</router-link>
      </div>
      <div id="to-work" class="link home-menu">
        <router-link class="link-text" to="/work">Work</router-link>
      </div>
      <div id="to-about" class="link home-menu">
        <router-link class="link-text" to="/about">About</router-link>
      </div>
      <!-- <div class="link home-menu">
        <router-link class="link-text" to="/learn">Learn</router-link>
      </div> -->
    </div>

    <div class="sns-div">
      <div class="sns-icon">
        <ion-icon class="icon" name="logo-twitter"></ion-icon>
      </div>
      <div class="sns-icon">
        <ion-icon class="icon" name="logo-instagram"></ion-icon>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  box-shadow: 5px 2px 9px 0 rgba(0, 0, 0, .5);
}
.logo {
  width: 100%;
}
.logo img {
  display: block;
  margin: 0 auto;
  width: 10vw;
  height: auto;
}
.menu {
  display: table;
  margin: 0 auto;
}
.home-menu {
  display: inline-block;
  margin: 0 1.8vw;
}
.link-text {
  color: black;
  text-decoration: none;
  font-family: 'Great Vibes', cursive;
  font-size: 1.4em;
  transition: .3s;
  padding: 0.2rem 1rem 0;
  border-radius: 5px;
}
.link-text-choice {
  border-bottom: 3px solid rgb(221, 215, 205);
}
.link-text:hover {
  background-color: rgb(231, 226, 217);
  color: white;
}
.icon {
  width: 2rem;
  height: 2rem;
}
.sns-div {
  position: absolute;
  display: inline-flex;
  top: 10px;
  right: 20px;
}
.sns-icon {
  width: 0.6rem;
  height: 0.6rem;
  display: block;
  color: black;
  margin: 0 1vw;
}

  @media screen and (max-width:640px) {
  }
</style>