<template>
  <div class="works">
    <div class="works-header">
      <img class="page-header" src="../assets/images/parts/page_header.png" alt="">
      <span class="title">Works</span>
    </div>
    <div class="backward">
      <ion-icon @click="backward" name="chevron-back-sharp"></ion-icon>
    </div>
    <div class="forward">
      <ion-icon @click="forward" name="chevron-forward-sharp"></ion-icon>
    </div>
    <div class="works-contents">
      <div class="works-contents-list">
        <div class="works-contents-list-content" v-for="value in contents" :key="value">
          <img class="works-content-img" @click="changeContent" :data-id="value.id" :src="value.requireImage" alt="">
        </div>
      </div>
      <div>
        <span>{{ dispTitle }}</span>
        <img class="img-view" :src="dispImage" alt="">
        <span>{{ dispSummary }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import worksjson from "../assets/works.json";

export default {
  name: 'Works',
  data() {
    return {
      contents: [],
      dispId: null,
      dispImage: null,
      dispImages: [],
      dispTitle: null,
      dispSummary: null,
    }
  },
  mounted() {
    this.onloadFunc();

    let eles = document.getElementsByClassName("home-menu");
    for (let i = 0; i < eles.length; i++) {
      eles[i].classList.remove("link-text-choice");
    }
    document.getElementById("to-works").classList.add("link-text-choice");
    document.getElementsByClassName("menu-div")[0].classList.remove("show-menu-div");
  },
  
  methods: {
    async onloadFunc() {
      let setDisp = false;
      for (let doc of worksjson) {
        let docData = doc;
        docData.disp = true;
        if (docData.createdate) {
          const d = new Date(docData.createdate.seconds * 1000);
          docData.createdate = d.getFullYear() + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + ("0" + d.getDate()).slice(-2);
        }
        docData.requireImage = require("../assets/images/works/" + docData.image);
        docData.requireImages = [];
        docData.images.forEach(x => {
          docData.requireImages.push(require("../assets/images/works/" + x));
        });
        this.contents.push(docData);

        if (!setDisp) {
          this.dispId = docData.id;
          this.dispTitle = docData.title;
          this.dispSummary = docData.summary;
          this.dispImage = docData.requireImage;
          this.dispImages = docData.requireImages;
          setDisp = true;
        }
      }
    },
    changeContent(event) {
      let target = event.target;
      Array.from(document.getElementsByClassName("works-content-img")).forEach(x => x.classList.remove("select"));
      target.classList.add("select");

      const docData = this.contents.find(x => x.id == target.dataset.id);
      this.dispId = docData.id;
      this.dispTitle = docData.title;
      this.dispSummary = docData.summary;
      this.dispImage = docData.requireImage;
      this.dispImages = docData.requireImages;
    },
    forward() {
      const target =  Array.from(document.getElementsByClassName("select"))[0];
      const targetId = target.dataset.id;
      if (targetId == 1) {
        return;
      }
      Array.from(document.getElementsByClassName("works-content-img")).forEach(x => x.classList.remove("select"));
      target.classList.add("select");
      const docData = this.contents.find(x => x.id == (targetId + 1));
      this.dispId = docData.id;
      this.dispTitle = docData.title;
      this.dispSummary = docData.summary;
      this.dispImage = docData.requireImage;
      this.dispImages = docData.requireImages;
    },
    backward() {
      const target =  Array.from(document.getElementsByClassName("select"))[0];
      const targetId = target.dataset.id;
      if (targetId == 1) {
        return;
      }
      Array.from(document.getElementsByClassName("works-content-img")).forEach(x => x.classList.remove("select"));
      target.classList.add("select");
      const docData = this.contents.find(x => x.id == (targetId - 1));
      this.dispId = docData.id;
      this.dispTitle = docData.title;
      this.dispSummary = docData.summary;
      this.dispImage = docData.requireImage;
      this.dispImages = docData.requireImages;
    }
  }
}
</script>

<style scoped>
.works-header {
  width: 100%;
  height: 12vw;
  background-color: black;
  position: relative;
}
.title {
  font-family: 'Great Vibes', cursive;
  color: white;
  font-weight: unset;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
}
.backward {
  position: absolute;
  width: 6vw;
  height: 6vw;
  top: 50%;
}
.forward {
  position: absolute;
  width: 6vw;
  height: 6vw;
  top: 50%;
  right: 0;
}
.backward ion-icon,
.forward ion-icon {
  width: 6vw;
  height: 6vw;
}
.page-header {
  opacity: 0.3;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.works-contents {
  width: 80%;
  margin: 2vw auto;
}
.works-contents-list {
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  position: relative;
  display: -webkit-inline-box;
  height: 18vw;
}
.works-contents-list-content {
  display: flex;
  margin-right: 2vw;
  width: 20vw;
  height: 15vw;
}
.works-contents-list-content img {
  object-fit: cover;
  width: 20vw;
  height: 15vw;
}
.img-view {
  margin-top: 2vw;
  width: 100%;
  height: 45vw;
  object-fit: cover;
}
.select {
  border: 4px solid red;
}
@media screen and (max-width:640px) {
}
</style>
