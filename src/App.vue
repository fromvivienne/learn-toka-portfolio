<template>
  <div class="header-line"></div>
  <Header/>
  <div id="content" class="content">
    <router-view />
  </div>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer 
  },
  data: function() {
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";
html {
  height: 100%;
}
body {
  margin: unset;
}
.header-line {
  width: 100%;
  height: 4px;
  background-color: #BCA68B;
}
.kugiri-line {
  margin: 2vw auto 0;
  display: block;
  width: 30%;
}
  @media screen and (max-width:640px) {
  }
</style>
