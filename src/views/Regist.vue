<template>
  <div class="regist">
    <table>
      <tr>
        <th></th>
        <th>ID</th>
        <th>タイトル</th>
        <th>Tags</th>
        <th>説明</th>
        <th>作成日</th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="(value, key) in contents" :key="key">
        <td class="regist-trash">
          <ion-icon @click="trash(value.id)" name="trash-outline"></ion-icon>
        </td>
        <td class="regist-id">
          <input :class="'data_' + value.id" type="text" :id="'id_' + key" :value="value.id" disabled>
        </td>
        <td class="regist-title">
          <input :class="'data_' + value.id" type="text" @change="changeTitle" :data-index="key" :data-id="value.id" :value="value.title">
        </td>
        <td class="regist-tags">
          <input :class="'data_' + value.id" type="text" @change="changeTags" :data-index="key" :data-id="value.id" :value="value.tags">
        </td>
        <td class="regist-summary">
          <input :class="'data_' + value.id" type="text" @change="changeSummary" :data-index="key" :data-id="value.id" :value="value.summary">
        </td>
        <td class="regist-createdate">
          <input :class="'data_' + value.id" type="date" @change="changeCreatedate" :data-index="key" :data-id="value.id" :value="value.createdate">
        </td>
        <td class="regist-img-btn">
          <div class="regist-img-area">
            <ion-icon @click="registImgDialogOpen" :data-id="value.id" name="images-outline"></ion-icon>
          </div>
        </td>
        <td class="regist-imgs">
          <span v-for="(imgval, imgkey) in value.images" :key="imgkey">
            <img class="regist-img-images" :src="imgval" alt="">
          </span>
        </td>
      </tr>
    </table>
    <div class="add-btn">
      <ion-icon @click="addRow" name="add-circle-sharp"></ion-icon>
    </div>
    <div id="regist-img-dialog">
      <input type="text" id="regist-img-dialog-id" disabled>
      <ion-icon @click="registImgDialogClose" class="regist-img-dialog-close" name="close-circle-outline"></ion-icon>
      <div id="regist-img-dialog-dd" @dragenter="dragEnter" @dragleave="dragLeave" @dragover.prevent @drop.prevent="dropFile" :class="{enter: isEnter}">
        <ion-icon name="images-outline"></ion-icon>
      </div>
      <div class="columns regist-img-dialog-images is-multiline ">
        <div class="column is-half" v-for="(value, key) in dialogImages" :key="key">
          <img :src="value" alt="">
        </div>
      </div>
      <ion-icon @click="saveImages" class="regist-img-dialog-save" name="save-outline"></ion-icon>
    </div>
  </div>
</template>

<script>
import firebase from "../main.js"
import { collection, getDocs, updateDoc, addDoc, doc, orderBy, query, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  name: 'Regist',
  data() {
    return {
      defaultCount: 10,
      addCount: 3,
      contents: [],
      template: {
        id: null,
        title: "",
        tags: "",
        summary: "",
        createdate: "",
        images: [],
      },
      files: [],
      isEnter: false,
      dialogFullPathImages: [],
      dialogImages: [],
    }
  },
  mounted() {
    this.onloadFunc();
    document.getElementById("regist-img-dialog").style.display = "none";
    let eles = document.getElementsByClassName("home-menu");
    for (let i = 0; i < eles.length; i++) {
      eles[i].classList.remove("link-text-choice");
    }
    document.getElementById("to-regist").classList.add("link-text-choice");
    document.getElementsByClassName("menu-div")[0].classList.remove("show-menu-div");
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
    async changeTitle(event) {
      const target = event.target;
      if (target.dataset.id) {
        await updateDoc(doc(firebase.db, "Portfolio", target.dataset.id), { title : target.value, index : target.dataset.index });
      } else {
        let newDoc = Object.create(this.template);
        newDoc.title = target.value;
        const addData = await addDoc(collection(firebase.db, "Portfolio"), {
          title : target.value,
          tags : "",
          summary : "",
          createdate : null,
          index : target.dataset.index,
        });
        event.target.dataset.id = addData.id;
        document.getElementById("id_" + target.dataset.index).value = addData.id;
        document.getElementsByClassName("")
      }
    },
    async changeTags(event) {
      const target = event.target;
      if (target.dataset.id) {
        await updateDoc(doc(firebase.db, "Portfolio", target.dataset.id), { tags : target.value });
      }
    },
    async changeSummary(event) {
      const target = event.target;
      if (target.dataset.id) {
        await updateDoc(doc(firebase.db, "Portfolio", target.dataset.id), { summary : target.value });
      }
    },
    async changeCreatedate(event) {
      const target = event.target;
      let cd = new Date(target.value);
      if (target.dataset.id) {
        await updateDoc(doc(firebase.db, "Portfolio", target.dataset.id), { createdate : cd });
      }
    },
    async trash(id) {
      await deleteDoc(doc(firebase.db, "Portfolio", id));
      this.contents = this.contents.filter(x => x.id != id);
      
    },
    async addRow() {
      const addData = await addDoc(collection(firebase.db, "Portfolio"), {
        title : "",
        tags : "",
        summary : "",
        createdate : null,
        index : this.contents.length,
      });
      this.contents.push(addData);
    },
    dragEnter() {
      this.isEnter = true;
    },
    dragLeave() {
      this.isEnter = false;
    },
    dropFile(event) {
      let file = event.dataTransfer.files[0];

      const storage = getStorage();
      const filename = "galleries/" + file.name;
      const storageRef = ref(storage, filename);
      this.dialogFullPathImages.push(filename);
      var th = this;
      uploadBytes(storageRef, file)
      .then((snapshot) => {
        getDownloadURL(ref(storage, snapshot.metadata.fullPath))
        .then(function(url) {
          th.dialogImages.push(url);
        })
        .catch((error) => {
          console.log(error);
        });
      });
      this.isEnter = false;
    },
    async saveImages() {
      const targetid = document.getElementById("regist-img-dialog-id").value;
      const dis = this.contents.find(x => x.id == targetid);
      dis.images = Object.create(this.dialogImages);
      await updateDoc(doc(firebase.db, "Portfolio", targetid), { fullpathimages : this.dialogFullPathImages });
      this.registImgDialogClose();
    },
    registImgDialogOpen(event) {
      const target = event.target;
      if (target.dataset.id) {
        document.getElementById("regist-img-dialog").style.display = "grid";
        document.getElementById("regist-img-dialog-id").value = target.dataset.id;
        const dis = this.contents.find(x => x.id == target.dataset.id);
        this.dialogImages = JSON.parse(JSON.stringify(dis.images));
        this.dialogFullPathImages = JSON.parse(JSON.stringify(dis.fullpathimages));
      }
    },
    registImgDialogClose() {
      document.getElementById("regist-img-dialog").style.display = "none";
      document.getElementById("regist-img-dialog-id").value = null;
      this.dialogImages = [];
      this.dialogFullPathImages = [];
    },
  }
}
</script>

<style scoped>
table {
  width: 80%;
  margin: 2vw auto;
}
table th {
  text-align: center !important;
}
table th, table td {
  border: unset;
  padding: 0.5em 0.3em;
}
.regist-img-area,
.regist-trash {
  width: 2vw;
  padding-left: unset;
  padding-right: unset;
}
.regist-img-area ion-icon,
.regist-trash ion-icon {
  width: 2vw;
  height: 1.2vw;
  vertical-align: middle;
}
.regist-id {
  width: 12vw;
}
.regist-id input {
  width: 11vw;
  font-size: 1rem;
  height: 1.6vw;
}
.regist-title {
  width: 12vw;
}
.regist-title input {
  width: 11vw;
  font-size: 1rem;
  height: 1.6vw;
}
.regist-tags {
  width: 12vw;
}
.regist-tags input {
  width: 11vw;
  font-size: 1rem;
  height: 1.6vw;
}
.regist-summary {
  width: 20vw;
}
.regist-summary input {
  width: 19vw;
  font-size: 1rem;
  height: 1.6vw;
}
.regist-createdate {
  width: 8vw;
}
.regist-createdate input {
  width: 7vw;
  font-size: 1rem;
  height: 1.6vw;
}
.regist-imgs {
  width: 8vw;
}
.regist-img-btn {
  width: 2vw;
  padding-left: unset;
  padding-right: unset;
}
.regist-img-images {
  width: 1.6vw;
  height: 1.6vw;
  padding: unset;
  object-fit: cover;
}
.add-btn {
  text-align: center;
}
.add-btn ion-icon {
  width: 1.8vw;
  height: 1.8vw;
}
#regist-img-dialog {
  position: absolute;
  width: 50%;
  height: 62%;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #4a4a4a;
  border-radius: 15px;
  padding: 2vw;
}
.regist-img-dialog-close {
  position: absolute;
  width: 1.6vw;
  height: 1.6vw;
  right: 0;
  top: 0;
  color: white;
  background-color: #4a4a4a;
  border-top-right-radius: 10px;
}
.regist-img-dialog-save {
  position: absolute;
  width: 1.6vw;
  height: 1.6vw;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
#regist-img-dialog input {
  width: 11vw;
  font-size: 1rem;
  height: 1.6vw;
}
#regist-img-dialog-dd {
  position: absolute;
  border: 2px solid #4a4a4a;
  border-radius: 10px;
  width: 20em;
  height: 15em;
  top: 50%;
  left: 21%;
  transform: translate(-50%, -50%);
}
#regist-img-dialog-dd ion-icon {
  position: absolute;
  width: 1.8vw;
  height: 1.8vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.enter {
  border: 2px dotted #4a4a4a !important;
}
.regist-img-dialog-images {
  width: 54%;
  position: absolute;
  top: 50%;
  left: 43%;
  height: 24vw;
  transform: translate(0, -50%);
  overflow-y: auto;
}
</style>
