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
        <a class="button is-primary is-large modal-button" @click="isActive">Third column</a>
        
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
    <div id="modal-bis" class="modal">
      <div class="modal-background" @click="hide"></div>
      <div class="modal-content">
        <p class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Interviewer',
  methods: {
    isActive() {
      document.getElementById("modal-bis").classList.add("is-active");
    },
    hide() {
      document.getElementById("modal-bis").classList.remove("is-active");
    }
  }
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
.is-active {
  display: flex;
}

  @media screen and (max-width:640px) {
  }
</style>
