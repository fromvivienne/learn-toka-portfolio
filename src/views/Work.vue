<template>
  <div class="work">
    ここは、仕事で携わった成果物を載せるページです。
  </div>
</template>

<script>
export default {
  name: 'Work',
  mounted() {
    let eles = document.getElementsByClassName("home-menu");
    for (let i = 0; i < eles.length; i++) {
      eles[i].classList.remove("link-text-choice");
    }
    document.getElementById("to-work").classList.add("link-text-choice");
  }
}
</script>

<style scoped>

  @media screen and (max-width:640px) {
  }
</style>
