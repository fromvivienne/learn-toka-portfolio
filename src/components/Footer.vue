<template>
  <div id="footer" class="footer">
    <div class="footer-menu">
      <div class="link footer-menu-part">
        <router-link class="link-text" to="/">Home</router-link>
      </div>
      <div class="link footer-menu-part">
        <router-link class="link-text" to="/portfolio">Portfolio</router-link>
      </div>
      <div class="link footer-menu-part">
        <router-link class="link-text" to="/portfoliokai">Portfolio改</router-link>
      </div>
      <div class="link footer-menu-part">
        <router-link class="link-text" to="/works">Works</router-link>
      </div>
      <div class="link footer-menu-part">
        <router-link class="link-text" to="/about">About</router-link>
      </div>
      <div class="link footer-menu-part">
        <router-link class="link-text" to="/iroiro">Iroiro</router-link>
      </div>
    </div>
    <div class="footer-corp">
      Toka&nbsp;design&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;透夏デザイン.
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
}
</script>

<style scoped>
.footer {
  width: 100%;
  text-align: center;
  padding: 0.8vw 0;
  background-color: unset;
}
.footer-menu {
  display: table;
  margin: 0 auto 1.6vw;
}
.footer-menu-part {
  display: contents;
}
.footer-menu-part a {
  margin: 0 1em;
  text-decoration: none;
  color: unset;
}
.footer-corp {
  font-size: 0.7em;
}

  @media screen and (max-width:640px) {
  }
</style>