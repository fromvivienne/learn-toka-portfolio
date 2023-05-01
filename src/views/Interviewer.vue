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
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img class="image" src="../assets/gallery/ree-fen.jpg" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">創作</p>
              </div>
            </div>

            <div class="content">
              過去に創った創作の一人です。
              <br>
              <a>@toka</a>.
              <a href="#">#art</a> <a href="#">#tag</a>
              <br>
              <time datetime="2016-1-1">2023/4/30</time>
            </div>
          </div>
        </div>
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
  display: flex !important;
}
.modal {
  display: none;
}

  @media screen and (max-width:640px) {
  }
</style>
