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
        <img src="../assets/gallery/vanet.jpg">
      </div>
      <div class="column">
        fifth column
      </div>

    </div>
    <br>
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
  background-color: rgba(175, 195, 0, 1.0);
  color: white;
  margin: 0 10px;
  height: 10vw;
  /* border-radius: 20px; */
  border-radius: 10px;
}
.is-active {
  display: flex;
}

  @media screen and (max-width:640px) {
  }
</style>
