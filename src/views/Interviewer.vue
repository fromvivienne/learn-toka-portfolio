<template>
  <div class="interviewer">
    <span class="title">
      創作物一覧
    </span>
    <div class="columns is-multiline">
      <div class="column is-2">
        <div class="inner-column column-ptn-gallery">
          <img src="../assets/gallery/1.jpg">
          <a class="button is-primary is-small modal-button" @click="isActiveNum(1)">detail...</a>
        </div>
      </div>
      <div class="column is-2">
        <div class="inner-column column-ptn-work">
          <img src="../assets/gallery/2.jpg">
          <a class="button is-primary is-small modal-button" @click="isActiveNum(2)">detail...</a>
        </div>
      </div>
      <div class="column is-2">
        <div class="inner-column column-ptn-hobby">
          <img src="../assets/gallery/3.jpg">
          <a class="button is-primary is-small modal-button" @click="isActiveNum(3)">detail...</a>
        </div>
      </div>
      <div class="column is-2">
        <div class="inner-column column-ptn-gallery">
          <img src="../assets/gallery/4.jpg">
          <a class="button is-primary is-small modal-button" @click="isActiveNum(4)">detail...</a>
        </div>
      </div>
      <div class="column is-2">
        <div class="inner-column column-ptn-work">
          <img src="../assets/gallery/5.jpg">
          <a class="button is-primary is-small modal-button" @click="isActiveNum(5)">detail...</a>
        </div>
      </div>
      <div class="column is-2">
        <div class="inner-column column-ptn-hobby">
          <img src="../assets/gallery/6.jpg">
          <a class="button is-primary is-small modal-button" @click="isActiveNum(6)">detail...</a>
        </div>
      </div>
      <div class="column is-2">
        <div class="inner-column column-ptn-gallery">
          <img src="../assets/gallery/7.jpg">
          <a class="button is-primary is-small modal-button" @click="isActiveNum(7)">detail...</a>
        </div>
      </div>
      <div class="column is-2">
        <div class="inner-column column-ptn-work">
          <img src="../assets/gallery/8.jpg">
          <a class="button is-primary is-small modal-button" @click="isActiveNum(8)">detail...</a>
        </div>
      </div>
      <div class="column is-2">
        <div class="inner-column column-ptn-hobby">
          <img src="../assets/gallery/9.jpg">
          <a class="button is-primary is-small modal-button" @click="isActiveNum(9)">detail...</a>
        </div>
      </div>
      <div class="column is-2">
        <div class="inner-column column-ptn-gallery">
          <img src="../assets/gallery/10.jpg">
          <a class="button is-primary is-small modal-button" @click="isActiveNum(10)">detail...</a>
        </div>
      </div>
      <div class="column is-2">
        <div class="inner-column column-ptn-work">
          <img src="../assets/gallery/11.jpg">
          <a class="button is-primary is-small modal-button" @click="isActiveNum(11)">detail...</a>
        </div>
      </div>
      <div class="column is-2">
        <div class="inner-column column-ptn-hobby">
          <img src="../assets/gallery/12.jpg">
          <a class="button is-primary is-small modal-button" @click="isActiveNum(12)">detail...</a>
        </div>
      </div>
      <!-- 上記のひとつづつ記載しているレイヤーを以下だけで表現 -->
      <!-- <div class="column is-2" v-for="imge in imgList" :key="imge">
        <div class="inner-column" :class="imge.cls">
          <img :src="imge.val">
          <a class="button is-primary is-small modal-button" @click="isActivePath(imge.val)">detail...</a>
        </div>
      </div> -->
    </div>
    <br>
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
              過去に創った創作の一人です。
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
export default {
  name: 'Interviewer',
  data() {
    return {
      imgPath: null,
      imgList: []
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
  methods: {
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
.interviewer {
  width: 60%;
  margin: 1vw auto 0;
}
.title {
  font-family: 'Kosugi Maru', cursive;
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

  @media screen and (max-width:640px) {
  }
</style>
