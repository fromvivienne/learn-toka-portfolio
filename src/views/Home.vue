<template>
  <div class="home">
    <div class="container">
      <img class="image" src="../assets/gallery/1.jpg" alt="">
      <img class="image" src="../assets/gallery/2.jpg" alt="">
    </div>
     
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
  },
}
</script>

<style scoped>
.home {
  margin-top: 10px;
  width: 100%;
}
.container {
  position: relative;
  width: 60%;
  height: 30vw;
  margin: 0 auto;
  border: 1px solid black;
}

.image {
  position: absolute;
  height: 100%;
  opacity: 0;
  animation: change-img-anim 30s infinite;
}

.image:nth-of-type(1) {
  animation-delay: 0s;
}
.image:nth-of-type(2) {
  animation-delay: 15s;
}
@keyframes change-img-anim {
  0%{ opacity: 0;}
  10%{ opacity: 1;}
  50%{ opacity: 1;}
  60%{ opacity: 0;}
}

@media screen and (max-width:640px) {
}
</style>
