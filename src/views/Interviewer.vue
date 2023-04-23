<template>
  <div class="interviewer">
    <div class="columns">
      <div class="column">
        First column
      </div>
      <div class="column">
        Second column
      </div>
      <div class="column">
        Third column
      </div>
      <div class="column">
        Fourth column
        <!-- <img src="../assets/gallery/vanet.jpg" alt=""> -->
      </div>
    </div>
    <br>
    数を一つ追加してみましょう！
    箱の角を丸くしてみましょう！
    箱の中に画像を入れてみましょう！
  </div>
</template>

<script>
export default {
  name: 'Interviewer',
}
</script>

<style scoped>
.interviewer {
  width: 60%;
  margin: 1vw auto 0;
}
.column {
  background-color: beige;
  margin: 0 10px;
  height: 10vw;
  /* border-radius: 20px; */
}

  @media screen and (max-width:640px) {
  }
</style>
