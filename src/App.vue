<template>
  <Menu/>
  <div id="content" class="content">
    <router-view />
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  },
  data: function() {
    return {
      resizeFlg: false,
      loginUser: null
    }
  },
  methods: {
    calcHeight: function() {
      if (this.resizeFlg !== false) {
        clearTimeout(this.resizeFlg);
      }
      //300ms待機後にリサイズ処理を実施する
      this.resizeFlg = setTimeout(function() {
        const menu = document.getElementById("menu");
        let content = document.getElementById("content");
        content.style.height = (document.documentElement.clientHeight - menu.clientHeight) + 'px';
      }, 300);
    }
  },
  mounted() {
    window.addEventListener('resize', this.calcHeight);

    const menu = document.getElementById("menu");
    let content = document.getElementById("content");
    content.style.height = (document.documentElement.clientHeight - menu.clientHeight) + 'px';

    document.getElementsByClassName("home-menu")[0].classList.add("selected-menu");
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0;
  overflow-y: hidden;
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1 {
  margin: 0;
}
.content {
  background-image: url("./assets/app/bg.jpg");
  background-position: 0 36%;
  object-fit: none;
  background-size: cover;
}
.selected-menu {
  background-color: lightgray;
}

  @media screen and (max-width:640px) {
    .content {
      background-position: 50%;
      object-fit: none;
      background-size: cover;
      overflow-y: auto;
    }
  }
</style>
