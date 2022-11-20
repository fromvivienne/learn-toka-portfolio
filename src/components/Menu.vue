<template>
  <div id="menu" class="menu">
    <img class="logo-img" src="../assets/sign_small.png" alt="sign">
    <div class="title">
      <span class="site-title">TOKA PORTFOLIO SITE (sample)</span>
    </div>
    <div id="links" class="links">
      <div class="link home-menu">
        <img src="../assets/icons/home.svg" alt="home">
        <router-link class="link-text" to="/">Home</router-link>
      </div>
      <div class="link profile-menu">
        <img src="../assets/icons/profile.svg" alt="profile">
        <router-link class="link-text" to="/profile">Profile</router-link>
      </div>
      <div class="link gallery-menu">
        <img src="../assets/icons/gallery.svg" alt="gallery">
        <router-link class="link-text" to="/gallery">Gallery</router-link>
      </div>
      <div class="link contact-menu">
        <img src="../assets/icons/contact.svg" alt="contact">
        <router-link class="link-text" to="/contact">Contact</router-link>
      </div>
      <div class="link signout-menu">
        <img src="../assets/icons/signout.svg" alt="signout">
        <router-link class="link-text" @click="signout" to="/signin">Signout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: 'Menu',
  props: {
  },
  methods: {
    signout() {
      const auth = getAuth();
      signOut(auth)
      .then(() => {
        alert("ログアウトしました");
      })
      .catch((error) => {
        console.log(error);
      });
    },
  }
}
</script>

<style scoped>
  .menu {
    display: inline-flex;
    width: 100%;
    height: 30%;
    background-color: aliceblue;
  }
  .logo-img {
    position: relative;
    height: 100%;
    width: 10%;
  }
  .title {
    display: flex;
    align-items: center;
    width: 20%;
  }
  .site-title { 
    font-weight: bold;
    font-size: 1vw;
  }
  .links {
    position: relative;
    display: flex;
    width: 70%;
    align-items: end;
    justify-content: flex-end;
  }
  .link  {
    padding: 1vw 0.5vw 0.2vw 0.5vw;
    margin: 0 1vw 0.1vw 1vw;
    display: inline-grid;
    border-radius: 12%;
  }
  .link-text {
    font-size: 1vw;
    font-weight: bold;
    text-decoration: none;
    color: black;
  }
  .link img {
    width: 1.5vw;
    height: 1.5vw;
    margin: 0 auto;
  }
  #signout {
    position: absolute;
    right: 0;
    margin: 0 0.1vw 0 0;
  }
  button {
    border: none;
    background-color: darkgray;
    color: aliceblue;
  }
  @media screen and (max-width:640px) {
    .menu {
      background-color: aliceblue;
      height: 16vw;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
    .links {
      display: flex;
      width: auto;
      align-items: center;
      margin: 0 auto;
    }
    .link {
      padding: 1vw 0.5vw 0.2vw 0.5vw;
      margin: 0 4vw;
      display: inline-grid;
      border-radius: 12%;
    }
    .link img {
      width: 5vw;
      height: 5vw;
      margin: 0 auto;
    }
    #signout {
      position: fixed;
      right: 0;
      bottom: 0;
      margin: 0 0.1vw 0 0;
    }
    .logo-img,
    .title {
      display: none;
    }
  }
</style>