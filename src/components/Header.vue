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
      <div id="to-regist" class="link home-menu">
        <router-link class="link-text" to="/regist">Regist</router-link>
      </div>
    </div>

    <div class="sns-div">
      <div class="sns-icon">
        <ion-icon class="icon" name="logo-twitter"></ion-icon>
      </div>
      <div class="sns-icon">
        <ion-icon class="icon" name="logo-instagram"></ion-icon>
      </div>
      <div @click="menuDivOpen" class="menu-outline sns-icon">
        <ion-icon class="icon" name="menu-outline"></ion-icon>
      </div>
    </div>
    <div id="menu-div" class="menu-div">
      <div @click="menuDivClose" class="menu-div-close">
        <ion-icon name="close-outline"></ion-icon>
      </div>
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
      <div id="to-regist" class="link home-menu">
        <router-link class="link-text" to="/regist">Regist</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  methods: {
    menuDivOpen() {
      document.getElementById("menu-div").classList.add("show-menu-div");
    },
    menuDivClose() {
      document.getElementById("menu-div").classList.remove("show-menu-div");
    }
  }
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
  display: block;
  color: black;
  margin: 0 1vw;
}
.menu-outline {
  display: none;
}
.menu-div {
  width: 40%;
  height: 100%;
  background-color: white;
  position: fixed;
  z-index: 999;
  right: 0;
  display: none;
}

@media screen and (max-width:960px) {
  .header {
    position: relative;
    display: inline-flex;
    width: 100%;
  }
  .menu {
    display: none;
  }
  .icon {
    width: 1.6rem;
    height: 1.6rem;
  }
  .logo {
    width: unset;
  }
  .sns-div {
    position: absolute;
    float: right;
  }
  .sns-icon {
    margin: 1vw;
  }
  .menu-outline {
    display: grid;
  }
  .home-menu {
    display: table;
    margin: 5vw auto;
  }
  .link-text {
    font-size: 2rem;
  }
  .logo img {
    display: block;
    margin: unset;
    width: 16vw;
    height: auto;
  }
  .menu-div-close {
    position: absolute;
    width: 3rem;
    height: 3rem;
    right: 15px;
  }
  .menu-div-close ion-icon {
    width: 3rem;
    height: 3rem;
  }
  .show-menu-div {
    display: table !important;
    animation: anim 0.8s;
  }
  @keyframes anim {
    0% {
      transform: translateX(300px);
    }
    100% {
      transform: translateX(0px);
    }
  }
}
</style>