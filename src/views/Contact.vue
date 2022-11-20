<template>
  <div class="contact">
    <div class="sns">
      <div class="sns-inline">
        <img src="../assets/contact/twitter.svg" alt="twitter">
      </div>
      <div class="sns-inline">
        <img src="../assets/contact/instagram.svg" alt="instagram">
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'Contact',
  props: {
  },
  beforeCreate() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "/signin";
      }
    });
  },
  mounted() {
    let menus = document.getElementsByClassName("link");
    for (let i = 0; i < menus.length; i++) {
      menus[i].classList.remove("selected-menu");
    }
    document.getElementsByClassName("contact-menu")[0].classList.add("selected-menu");
  }
}
</script>

<style scoped>
  .contact {
    display: inline-flex;
    width: 100%;
    height: 100%;
    background-color:rgba(255, 255, 255, 0.4);
    background-blend-mode: lighten;
  }
  .sns {
    display: inline-flex;
    background-color: aliceblue;
    width: 60%;
    height: 25%;
    border: solid 2px black;
    border-radius: 30px 0 30px 0;
    margin: 2vw auto;
  }
  .sns-inline {
    position: relative;
    width: 50%;
    height: 100%;
  }
  .sns img {
    position: absolute;
    width: 2vw;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  @media screen and (max-width:640px) {
    .sns {
      display: inline-table;
      background-color: aliceblue;
      width: 60%;
      height: 50%;
      border: solid 2px black;
      border-radius: 30px 0 30px 0;
      margin: 40vw auto;
    }
    .sns-inline {
      position: relative;
      width: 100%;
      height: 50%;
    }
    .sns img {
      position: absolute;
      width: 10vw;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
</style>