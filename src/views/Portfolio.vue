<template>
  <div class="portfolio">
    <div class="portfolio-header">
      <span class="title">Portfolio</span>
    </div>
    <div class="portfolio-contents">
      <div class="portfolio-images columns is-multiline">
        <div class="column is-half" v-for="value in contents" :key="value">
          <div class="portfolio-tag">
            <ion-icon name="bookmark-outline"></ion-icon>
            {{ value.tags }}
          </div>
          <img :src="value.image">
          <span class="portfolio-title">{{ value.title }}</span>
        </div>
      </div>
      <div class="portfolio-navi">
        <span class="portfolio-navi-title">カテゴリー</span>
        <div class="portfolio-navi-tag" v-for="value in contents" :key="value">
          <ion-icon name="bookmark-outline"></ion-icon>
          {{ value.tags }}
        </div>
      </div>
    </div>
    <div id="modal-bis" class="modal">
      <div class="modal-background" @click="hide"></div>
      <div class="modal-content">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img class="modal-image" v-bind:src="imgPath" alt="">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">創作</p>
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
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import firebase from "../main.js"
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default {
  name: 'Portfolio',
  data() {
    return {
      imgPath: null,
      imgList: [],
      contents: [],
    }
  },
  beforeMount() {
    // galleryフォルダからファイル一覧を取得する
    let lig = [];
    // 取得した一覧をぐるぐる回す
    require.context('../assets/gallery-public', true, /\.jpg$/).keys().forEach((key) => {
      lig.push({
        key: key.replace(/(\.\/|\.jpg)/g, ''),
        val: require("../assets/gallery-public/" + key.replace(/(\.\/)/g, '')),
        cls: 'column-ptn-gallery'
      });
    });
    require.context('../assets/work', true, /\.jpg$/).keys().forEach((key) => {
      lig.push({
        key: key.replace(/(\.\/|\.jpg)/g, ''),
        val: require("../assets/work/" + key.replace(/(\.\/)/g, '')),
        cls: 'column-ptn-work'
      });
    });
    require.context('../assets/hobby', true, /\.jpg$/).keys().forEach((key) => {
      lig.push({
        key: key.replace(/(\.\/|\.jpg)/g, ''),
        val: require("../assets/hobby/" + key.replace(/(\.\/)/g, '')),
        cls: 'column-ptn-hobby'
      });
    });
    this.imgList = lig;
  },
  mounted() {
    this.onloadFunc();

    let eles = document.getElementsByClassName("home-menu");
    for (let i = 0; i < eles.length; i++) {
      eles[i].classList.remove("link-text-choice");
    }
    document.getElementById("to-portfolio").classList.add("link-text-choice");
  },
  methods: {
    async onloadFunc() {
      const q = query(collection(firebase.db, "Portfolio"), orderBy("index"));
      const querySnapshot = await getDocs(q);
      const storage = getStorage();
      for (let doc of querySnapshot.docs) {
        let docData = doc.data();
        docData.id = doc.id;
        if (docData.createdate) {
          const d = new Date(docData.createdate.seconds * 1000);
          docData.createdate = d.getFullYear() + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + ("0" + d.getDate()).slice(-2);
        }
        docData.images = [];
        if (docData.fullpathimages && docData.fullpathimages.length > 0) {
          for (let path of docData.fullpathimages) {
            docData.images.push(await this.downloadUrl(storage, path));
          }
          docData.image = docData.images[0];
        }
        this.contents.push(docData);
      }
    },
    async downloadUrl(storage, path) {
      let res = null;
      await getDownloadURL(ref(storage, path))
      .then(function(url) {
        res = url;
      })
      .catch((error) => {
        console.log(error);
      });
      return res;
    },
    isActiveNum(number) {
      this.imgPath = require("../assets/gallery/" + number + ".jpg");
      document.getElementById("modal-bis").classList.add("is-active");
    },
    isActivePath(path) {
      this.imgPath = path;
      document.getElementById("modal-bis").classList.add("is-active");
    },
    hide() {
      document.getElementById("modal-bis").classList.remove("is-active");
    }
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
.column-ptn-gallery {
  background-color: rgba(175, 195, 0, 1.0);
  color: white;
}
.column-ptn-work {
  background-color: #ffe08a;
  color: white;
}
.column-ptn-hobby {
  background-color: #7a7a7a;
  color: white;
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
.portfolio-navi-tag {
  font-size: 1.2rem;
  border-bottom: 1px solid #b3b3b3;
  padding: 1vw 0 0.4vw 0.6vw;
  line-height: 1.6rem;
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

  @media screen and (max-width:640px) {
  }
</style>
