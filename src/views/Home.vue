<template>
  <div class="home">
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'Home',
  props: {
    msg: String
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
    document.getElementsByClassName("home-menu")[0].classList.add("selected-menu");
  }
}
</script>

<style scoped>
  @media screen and (max-width:640px) {
    
  }
</style>
