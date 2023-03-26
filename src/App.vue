<template>
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
html {
  height: 100%;
}
  @media screen and (max-width:640px) {
  }
</style>
