<template>
  <div class="gallery">
    <button id="regist-btn" @click="toggleRegister"><img src="../assets/icons/add.svg" alt="add"></button>
    <div id="regist-panel" style="visibility: hidden;">
      <button id="close-btn" @click="toggleRegister">
        <img src="../assets/icons/close.svg" alt="close">
      </button>

      <table class="regist-table">
        <tr>
          <th>TITLE</th>
          <td><input id="regist-title" type="text" /></td>
        </tr>
        <tr>
          <th>TAG</th>
          <td><input id="regist-tag" type="text" /></td>
        </tr>
        <tr>
          <th>IMAGE</th>
          <td><input id="regist-image" type="file" @change="fileUpload" /></td>
        </tr>
        <tr>
          <th></th>
          <td id="registed-image">
            <img v-if="uploadImageUrl" v-bind:src="uploadImageUrl" alt="uploadImageUrl" style="height: 100%;">
          </td>
        </tr>
        <tr>
          <th>DESCRIPTION</th>
          <td><textarea name="description" id="regist-description"></textarea></td>
        </tr>
        <tr>
          <td colspan="2" style="text-align: center;">
            <button @click="registExec" id="regist-exec">
              登録
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div v-for="(value, key) in galleries" :key="key">
      <Illust :value='value'></Illust>
    </div>

  </div>
</template>

<script>
import firebase from "../main.js"
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Illust from '../components/Illust.vue';

export default {
  name: 'Gallery',
  components:  {
   Illust 
  },
  props: {
  },
  data() {
    return {
      galleries: [],
      uploadImageName: null,
      uploadImageUrl: null
    }
  },
  beforeCreate() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "/signin";
      }
    });
  },
  mounted() {
    let menus = document.getElementsByClassName("link");
    for (let i = 0; i < menus.length; i++) {
      menus[i].classList.remove("selected-menu");
    }
    document.getElementsByClassName("gallery-menu")[0].classList.add("selected-menu");

    this.awaitFunc();
  },
  methods: {
    toggleRegister() {
      let panel = document.getElementById("regist-panel");
      if (panel.style.visibility == "visible") {
        panel.style.visibility = "hidden";
      } else {
        panel.style.visibility = "visible";
      }
    },
    clearRegistInputs() {
      document.getElementById("regist-title").value = "";
      document.getElementById("regist-tag").value = "";
      this.uploadImageName = null;
      this.uploadImageUrl = null;
      document.getElementById("regist-image").value = "";
      document.getElementById("regist-description").value = "";
    },
    async awaitFunc() {
      this.galleries = [];
      this.clearRegistInputs();

      const querySnapshot = await getDocs(collection(firebase.db, "Galleries"));
      let temGalleries = [];
      querySnapshot.forEach((doc) => {
        let docData = doc.data();
        docData.id = doc.id;
        docData.downloadImageUrl = this.getDownloadImageUrl(docData.imageName);
        temGalleries.push(docData);
      });
      // temGalleries.sort((a, b) => b.startDatetime.seconds - a.startDatetime.seconds);
      temGalleries.forEach((gallery) => {
        this.galleries.push(JSON.stringify(gallery));
      });
    },
    async getDownloadImageUrl(imageName) {
      const storage = getStorage();
      let downloadImageUrl = null;
      await getDownloadURL(ref(storage, "galleries/" + imageName))
      .then(function(url) {
        downloadImageUrl = url;
      })
      .catch((error) => {
        console.log(error);
      });
      return downloadImageUrl;
    },
    fileUpload(event) {
      let file = event.target.files[0];

      const storage = getStorage();
      const storageRef = ref(storage, "galleries/" + file.name);
      uploadBytes(storageRef, file)
      .then((snapshot) => {
        this.uploadImageName = snapshot.metadata.name;

        const storage = getStorage();
        var admin = this;
        getDownloadURL(ref(storage, "galleries/" + this.uploadImageName))
        .then(function(url) {
          admin.uploadImageUrl = url;
        })
        .catch((error) => {
          console.log(error);
        });
      });
    },
    async registExec() {
      const data = {
        title: document.getElementById("regist-title").value,
        tag: document.getElementById("regist-tag").value,
        imageName: this.uploadImageName,
        description: document.getElementById("regist-description").value,
        datetime: new Date(),
        updateDate: new Date()
      };
      // if (this.news_data_id) {
      //   await setDoc(doc(firebase.db, "News", this.news_data_id), data);
      //   alert("ニュースデータが更新されました");

      // } else {
        data.createDate = new Date();
        const db = collection(firebase.db, "Galleries");
        await addDoc(db, data);
        alert("データが登録されました");
      // }
      this.awaitFunc();
      this.toggleRegister();
    }
  }
}
</script>

<style scoped>
  .gallery {
    width: 100%;
    height: 100%;
    background-color:rgba(255, 255, 255, 0.4);
    background-blend-mode: lighten;
    display: inline-flex;
    position: relative;
  }
  #close-btn {
    background-color: aliceblue;
    border: none;
    width: 2vw;
    height: 2vw;
    position: absolute;
    right: 0;
    margin: 0.2vw 0.2vw 0 0;
  }
  #regist-btn {
    background-color: gray;
    border: none;
    padding: 0.5vw 1.6vw;
    border-radius: 5px;
    color: aliceblue;
    font-size: 0.8vw;
    font-weight: bold;
    width: 5vw;
    height: 2vw;
    position: absolute;
    right: 0;
    margin: 0.2vw 0.2vw 0 0;
  }
  #regist-panel {
    margin: 0 auto;
    width: 30vw;
    height: 28vw;
    background-color: aliceblue;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -15vw 0 0 -15vw;
    border-radius: 20px;
  }
  .regist-table {
    width: 100%;
  }
  .regist-table th {
    width: 30%;
    text-align: right;
    padding-right: 1vw;
  }
  #regist-title,
  #regist-tag {
    width: 80%;
    height: 1.2vw;
    margin-top: 0.5vw;
    margin-bottom: 0.5vw;
  }
  #regist-description {
    width: 80%;
    height: 10vw;
  }
  #regist-image,
  #regist-description {
    margin-top: 0.5vw;
    margin-bottom: 0.5vw;
  }
  #registed-image {
    height: 5vw;
  }
  #regist-exec {
    background-color: gray;
    border: none;
    padding: 0.5vw 1.6vw;
    border-radius: 5px;
    color: aliceblue;
    font-size: 0.8vw;
    font-weight: bold;
    width: 5vw;
    height: 2vw;
  }
  @media screen and (max-width:640px) {
    #regist-panel {
      margin: unset;
      width: 90%;
      height: 50%;
      background-color: white;
      position: absolute;
      top: unset;
      left: unset;
      margin: unset;
      border-radius: 20px;
      z-index: 999;
    }
    .gallery {
      position: relative;
      display: inline-table;
    }
    .regist-table {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
    #regist-btn {
      padding: unset;
      border-radius: 50%;
      color: unset;
      font-size: unset;
      font-weight: unset;
      width: 10vw;
      height: 10vw;
      position: fixed;
      right: 0;
      bottom: 16vw;
      margin: 0 2vw 2vw 0;
    }
    #regist-title,
    #regist-tag {
      width: 80%;
      height: 5vw;
      margin-top: 0.5vw;
      margin-bottom: 0.5vw;
    }
    #regist-description {
      width: 80%;
      height: 80%;
    }
    #regist-exec {
      background-color: gray;
      border: none;
      padding: 0.5vw 1.6vw;
      border-radius: 5px;
      color: aliceblue;
      font-size: 3vw;
      font-weight: bold;
      width: 16vw;
      height: 8vw;
    }
  }
</style>