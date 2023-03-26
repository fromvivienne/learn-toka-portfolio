<template>
  <div id="header" class="header">
    <div class="link home-menu">
      <router-link class="link-text" to="/">Home</router-link>
    </div>
    <div class="link home-menu">
      <router-link class="link-text" to="/interviewer">Interviewer</router-link>
    </div>
    <div class="link home-menu">
      <router-link class="link-text" to="/work">Work</router-link>
    </div>
    <div class="link home-menu">
      <router-link class="link-text" to="/about">About</router-link>
    </div>

    <ion-icon class="icon" name="logo-twitter"></ion-icon>
    <ion-icon class="icon" name="logo-instagram"></ion-icon>
  </div>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style scoped>
.icon {
  width: 2vw;
  height: 2vw;
}

  @media screen and (max-width:640px) {
  }
</style>