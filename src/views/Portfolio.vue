<template>
  <div class="portfolio">
    <div class="portfolio-header">
      <span class="title">Portfolio</span>
    </div>
    <div class="portfolio-contents">
      <div class="portfolio-images columns is-mobile is-multiline">
        <div class="column is-half" v-for="value in dispContents" :key="value">
          <div v-if="value.disp == true" class="portfolio-tag">
            <ion-icon name="bookmark-outline"></ion-icon>
            {{ value.tags }}
          </div>
          <img v-if="value.disp == true" @click="modalOpen(value.id)" :src="value.requireImage">
          <span v-if="value.disp == true" class="portfolio-title">{{ value.title }}</span>
        </div>
      </div>
      <div class="portfolio-navi">
        <span class="portfolio-navi-title">カテゴリー</span>
        <div class="portfolio-navi-tag" v-for="value in tags" :key="value">
          <button class="filter-tags-btn" :data-tags="value" @click="filterTags">
            <ion-icon name="bookmark-outline"></ion-icon>
            {{ value }}
          </button>
        </div>
      </div>
    </div>
    <div id="modal" class="modal">
      <div class="modal-background" @click="hide"></div>
      <div class="modal-content">
        <div @click="modalClose" class="modal-close">
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img class="modal-image" v-bind:src="modalImageUrl" alt="">
            </figure>
          </div>
          <div class="modal-images">
            <span v-for="(value, key) in modalImagesUrl" :key="key">
              <img @click="modalSelectImg" class="modal-images-img" :src="value" alt="">
            </span>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="modal-title is-4">{{ modalTitle }}</p>
              </div>
            </div>
            <div class="content">
              shasin_no_hensu
              <br>
              <a>@toka</a>.
              <a href="#">#art</a>
              <a href="#">#tag</a>
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
import portfoliojson from "../assets/portfolio.json";

export default {
  name: 'Portfolio',
  data() {
    return {
      dispContents: [],
      contents: [],
      tags: [],
      modalTitle: null,
      modalImageUrl: null,
      modalImagesUrl: [],
    }
  },
  beforeMount() {
  },
  mounted() {
    this.onloadFunc();

    let eles = document.getElementsByClassName("home-menu");
    for (let i = 0; i < eles.length; i++) {
      eles[i].classList.remove("link-text-choice");
    }
    document.getElementById("to-portfolio").classList.add("link-text-choice");
    document.getElementsByClassName("menu-div")[0].classList.remove("show-menu-div");
  },
  methods: {
    async onloadFunc() {
      let innerTags = [];
      for (let doc of portfoliojson) {
        let docData = doc;
        docData.disp = true;
        if (docData.createdate) {
          const d = new Date(docData.createdate.seconds * 1000);
          docData.createdate = d.getFullYear() + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + ("0" + d.getDate()).slice(-2);
        }
        docData.requireImage = require("../assets/images/portfolio/" + docData.image);
        docData.requireImages = [];
        docData.images.forEach(x => {
          docData.requireImages.push(require("../assets/images/portfolio/" + x));
        });
        
        this.contents.push(docData);
        this.dispContents.push(docData);
        innerTags.push(docData.tags);
      }
      this.tags = [...new Set(JSON.parse(JSON.stringify(innerTags)))];
    },
    modalOpen(id) {
      const modalData = JSON.parse(JSON.stringify(this.contents.find(x => x.id == id)));
      this.modalTitle = modalData.title;
      this.modalImageUrl = modalData.requireImage;
      this.modalImagesUrl = modalData.requireImages;
      document.getElementById("modal").classList.add("is-active");
    },
    modalClose() {
      document.getElementById("modal").classList.remove("is-active");
    },
    modalSelectImg(event) {
      let target = event.target;
      Array.from(document.getElementsByClassName("modal-images-img")).forEach(x => x.classList.remove("modal-images-img-select"));
      this.modalImageUrl = target.src;
      target.classList.add("modal-images-img-select");
    },
    filterTags(event) {
      console.log(event.target.dataset.tags);
      this.contents.forEach(x => {
        if (x.tags == event.target.dataset.tags) {
          x.disp = true;
        } else {
          x.disp = false;
        }
      });
    },
  }
}
</script>

<style scoped>
.portfolio {
  width: 100%;
  margin: 0.3vw auto 0;
  font-family: "Noto Serif JP", Sans-serif;
}
.portfolio-header {
  width: 100%;
  height: 10vw;
  background-color: #7a7a7a;
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
.column {
  margin: 1vw 10px 0.5vw;
  height: 10vw;
  padding: unset;
}
.inner-column {
  height: 100%;
  border-radius: 10px;
}
.column img {
  height: 7vw;
  display: block;
  margin: 0 auto;
  object-fit: cover;
}

.column a {
  width: 50%;
  margin: 0.5vw auto 0;
  display: table;
  background-color: #485fc7;
}
.is-active {
  display: flex !important;
}
.modal {
  display: none;
}
.modal-image {
  object-fit: cover;
}
.portfolio-contents {
  width: 70%;
  margin: 2vw auto;
  display: flex;
}
.portfolio-images{
  position: relative;
  width: 70%;
}
.portfolio-navi {
  width: 30%;
  height: 20vw;
}
.portfolio-navi-title {
  font-size: 1.2vw;
  background-color: #BCA68B;
  color: white;
  width: 100%;
  display: grid;
  padding: 4px 20px;
}
.columns {
  margin: unset;
}
.column {
  margin-top: unset;
  margin-left: unset;
  margin-right: unset;
  margin-bottom: 3vw;
  position: relative;
}
.column img {
  width: 70%;
  height: 10vw;
  display: block;
  margin: 0 auto;
  object-fit: cover;
  border: 2px solid #d6d6d6;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}
.portfolio-tag {
  position: absolute;
  right: 72px;
  width: 4vw;
  background-color: #b1b1b1;
  top: 2px;
  text-align: center;
}
.portfolio-tag ion-icon {
  vertical-align: middle;
}
.portfolio-title {
  font-weight: bold;
  left: 4vw;
  position: relative;
  top: 0.5vw;
}
.card {
  background-color: #edecec;
}
.card-image {
  padding-top: 2vw;
}
.card-image img {
  background-color: white;
}
.modal-images {
  display: inline-flex;
  margin-top: 3vw;
}
.modal-images-img {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  margin: 0 2vw;
  border: 1px solid black;
  background-color: white;
}
.modal-images-img-select {
  border-color: red;
}
.modal-title {
  color: black;
  font-weight: bold;
  font-size: 3vw;
}
.filter-tags-btn {
  font-size: 1.2rem;
  border-bottom: 1px solid #b3b3b3;
  padding: 1vw 0 0.4vw 0.6vw;
  line-height: 1.6rem;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  text-align: left;
  background-color: unset;
}


@media screen and (max-width:960px) {
  .portfolio-contents {
    width: 100%;
    margin: 2vw auto;
    display: inline-block;
  }
  .portfolio-images {
    width: 98%;
  }
  .column {
    height: 20vw;
    margin-bottom: 6vw;
  }
  .column img {
    height: 20vw;
    width: 80%;
  }
  .portfolio-title {
    left: 8vw;
    top: 1vw;
  }
  .portfolio-navi {
    width: 80%;
    margin: 0 auto;
  }
  .portfolio-tag {
    position: absolute;
    right: 5vw;
    width: 40%;
    background-color: #b1b1b1;
    top: 2px;
    text-align: center;
  }
}
</style>
