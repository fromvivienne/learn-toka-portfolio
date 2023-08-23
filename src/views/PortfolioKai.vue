<template>
  <div class="portfolio">
    <div class="portfolio-header" style="display: none;">
      <img class="page-header" src="../assets/images/parts/page_header.png" alt="">
      <span class="title">Portfolio</span>
    </div>
    {{ $route.params.abc }}
    <div class="tabs is-centered">
      <ul>
        <li class="li-tag li-meta is-active"><a @click="changeDisplay('meta', this)">MetaVerse</a></li>
        <li class="li-tag li-work"><a @click="changeDisplay('work')">Work</a></li>
        <li class="li-tag li-nft"><a @click="changeDisplay('nft')">NFT</a></li>
        <li class="li-tag li-personal"><a @click="changeDisplay('personal')">Personal</a></li>
      </ul>
    </div>
    <div class="portfolio-contents">
      <div class="portfolio-images columns is-mobile is-multiline">
        <div class="swiper-div">
          <swiper class="meta-swiper" style="">
            <swiper-slide v-for="value in metaContents" :key="value">
              <div v-if="value.disp == true" class="portfolio-title">{{ value.title }}</div>
              <div class="info">
                <div class="sub-info">
                  <div class="discription">制作年 : {{ value.createyear }}</div>
                  <div class="tool" v-for="tool in value.tools" :key="tool">
                    <div><img :src="tool.requiredIcon" alt="">{{ tool.name }}</div>
                  </div>
                </div>
                <div class="summary">{{ value.summary }}</div>
              </div>
              <img v-if="value.disp == true && value.ratio == 'tate'" class="img-tate" :src="value.requireImage">
              <img v-if="value.disp == true && value.ratio == 'yoko'" class="img-yoko" :src="value.requireImage">
            </swiper-slide>
          </swiper>
          <swiper class="work-swiper" style="display: none;">
            <swiper-slide v-for="value in workContents" :key="value">
              <div v-if="value.disp == true" class="portfolio-title">{{ value.title }}</div>
              <div class="info">
                <div class="sub-info">
                  <div class="discription">制作年 : {{ value.createyear }}</div>
                  <div class="tool" v-for="tool in value.tools" :key="tool">
                    <div><img :src="tool.requiredIcon" alt="">{{ tool.name }}</div>
                  </div>
                </div>
                <div class="summary">{{ value.summary }}</div>
              </div>
              <img v-if="value.disp == true && value.ratio == 'tate'" class="img-tate" :src="value.requireImage">
              <img v-if="value.disp == true && value.ratio == 'yoko'" class="img-yoko" :src="value.requireImage">
            </swiper-slide>
          </swiper>
          <swiper class="nft-swiper" style="display: none;">
            <swiper-slide v-for="value in nftContents" :key="value">
              <div v-if="value.disp == true" class="portfolio-title">{{ value.title }}</div>
              <div class="info">
                <div class="sub-info">
                  <div class="discription">制作年 : {{ value.createyear }}</div>
                  <div class="tool" v-for="tool in value.tools" :key="tool">
                    <div><img :src="tool.requiredIcon" alt="">{{ tool.name }}</div>
                  </div>
                </div>
                <div class="summary">{{ value.summary }}</div>
              </div>
              <img v-if="value.disp == true && value.ratio == 'tate'" class="img-tate" :src="value.requireImage">
              <img v-if="value.disp == true && value.ratio == 'yoko'" class="img-yoko" :src="value.requireImage">
            </swiper-slide>
          </swiper>
          <swiper class="personal-swiper" style="display: none;">
            <swiper-slide v-for="value in personalContents" :key="value">
              <div v-if="value.disp == true" class="portfolio-title">{{ value.title }}</div>
              <div class="info">
                <div class="sub-info">
                  <div class="discription">制作年 : {{ value.createyear }}</div>
                  <div class="tool" v-for="tool in value.tools" :key="tool">
                    <div><img :src="tool.requiredIcon" alt="">{{ tool.name }}</div>
                  </div>
                </div>
                <div class="summary">{{ value.summary }}</div>
              </div>
              <img v-if="value.disp == true && value.ratio == 'tate'" class="img-tate" :src="value.requireImage">
              <img v-if="value.disp == true && value.ratio == 'yoko'" class="img-yoko" :src="value.requireImage">
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import portfoliojson from "../assets/juken.json";

export default {
  name: 'PortfolioKai',
  props: ['abc'],
  data() {
    return {
      metaContents: [],
      workContents: [],
      nftContents: [],
      personalContents: [],
      contents: [],
      tags: ["meta", "work", "nft", "personal"],
      modalTitle: null,
      modalImageUrl: null,
      modalImagesUrl: [],
      displayTag: "meta",
    }
  },
  beforeMount() {
  },
  mounted() {
    console.log(this.$route.params)

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
        docData.requireImage = require("../assets/images/juken/" + docData.image);
        docData.requireImages = [];

        for (let i = 0; i < docData.tools.length; i++) {
          docData.tools[i].requiredIcon = require("../assets/icons/" + docData.tools[i].icon);
        }
        
        this.contents.push(docData);
        if (docData.tags == "meta") {
          this.metaContents.push(docData);
        } else if (docData.tags == "work") {
          this.workContents.push(docData);
        } else if (docData.tags == "nft") {
          this.nftContents.push(docData);
        } else if (docData.tags == "personal") {
          this.personalContents.push(docData);
        }
        innerTags = innerTags.concat(docData.tags);
      }
      this.tags = ["all"].concat([...new Set(JSON.parse(JSON.stringify(innerTags)))]);
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
      const tag = event.target.dataset.tag;
      this.dispContents = [];
      if (tag == "all") {
        this.dispContents = [].concat(this.contents);
      } else {
        this.contents.forEach(x => {
          if (x.tags.includes(tag)) {
            this.dispContents.push(x);
          }
        });
      }
    },
    changeDisplay(tag) {
      let litags = document.getElementsByClassName("li-tag");
      for (let litag of litags) {
        litag.classList.remove("is-active");
      }
      document.getElementsByClassName("li-" + tag)[0].classList.add("is-active");
      if (tag == "meta") {
        document.getElementsByClassName("meta-swiper")[0].style.display = "";
        document.getElementsByClassName("work-swiper")[0].style.display = "none";
        document.getElementsByClassName("nft-swiper")[0].style.display = "none";
        document.getElementsByClassName("personal-swiper")[0].style.display = "none";
      } else if (tag == "work") {
        document.getElementsByClassName("meta-swiper")[0].style.display = "none";
        document.getElementsByClassName("work-swiper")[0].style.display = "";
        document.getElementsByClassName("nft-swiper")[0].style.display = "none";
        document.getElementsByClassName("personal-swiper")[0].style.display = "none";
      } else if (tag == "nft") {
        document.getElementsByClassName("meta-swiper")[0].style.display = "none";
        document.getElementsByClassName("work-swiper")[0].style.display = "none";
        document.getElementsByClassName("nft-swiper")[0].style.display = "";
        document.getElementsByClassName("personal-swiper")[0].style.display = "none";
      } else if (tag == "personal") {
        document.getElementsByClassName("meta-swiper")[0].style.display = "none";
        document.getElementsByClassName("work-swiper")[0].style.display = "none";
        document.getElementsByClassName("nft-swiper")[0].style.display = "none";
        document.getElementsByClassName("personal-swiper")[0].style.display = "";
      } 
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
  height: 12vw;
  background-color: black; 
  position: relative;
}
.page-header {
  opacity: 0.3;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  position: relative;
  font-size: 4vw;
  text-align: center;
  letter-spacing: 7px;
}
.portfolio-summary {
  font-size: 2vw;
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
    width: 100%;
  }
  .column {
    height: 20vw;
    margin-bottom: 6vw;
  }
  .column img {
    height: 20vw;
    width: 80%;
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
  .swiper { 
    width: 100%;
  }
  .swiper-div {
    width: 95%;
    margin: 0 auto;
    height: 112vw;
  }
  .img-yoko {
    display: grid;
    width: 100%;
    object-fit: cover;
    margin: 0 auto;
  }
  .img-tate {
    display: grid;
    height: 105vw;
    object-fit: cover;
    margin: 0 auto;
  }
  .tabs {
    margin-bottom: 0;
  }
  .is-active {
    background-color: #70b3ed;
    border-radius: 5px 5px 0 0;
    font-weight: bolder;
  }
  .info {
    margin-left: 3vw;
  }
  .sub-info {
    display: inline-flex;
  }
  .tool {
    margin-left: 2vw;
  }
  .tool img {
    width: 3vw;
    vertical-align: bottom;
    margin-right: 0.3vw;
  }
}
</style>
