<template>
  <div class="illust">
    <div class="title">
      <span>{{ item.title }}</span>
    </div>
    <div>
      <img v-bind:src="item.downloadUrl" alt="">
    </div>
    <div class="description">
      <span>{{ item.description }}</span>
    </div>
  </div>
</template>

<script>
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default {
  data() {
    return {
      item: {}
    }
  },
  props: {
    value: String
  },
  mounted() {
    this.item = JSON.parse(this.value);
    this.downloadUrl();
  },
  methods: {
    async downloadUrl() {
      if (this.item.imageName) {
        const storage = getStorage();
        let targetIllust = this;
        await getDownloadURL(ref(storage, "galleries/" + this.item.imageName))
        .then(function(url) {
          targetIllust.item.downloadUrl = url;
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
  }
}
</script>
<style scoped>
  .illust {
    display: inline-block;
    width: 17vw;
    border: none;
    background-color: rgba(240, 248, 255, 0.7);
    margin: 2vw 0 2vw 2vw;
    border-radius: 10px;
  }
  .title {
    height: 2vw;
  }
  .title span {
    font-weight: bold;
    font-size: 1.2vw;
    position: relative;
    line-height: 1.6vw;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow-wrap: anywhere;
    overflow: hidden;
    text-align: left;
    padding-left: 6px;
  }
  img {
    width: 16vw;
    height: 9vw;
    object-fit: cover;
    margin: 0 0.5vw;
    object-position: 0 0;
  }
  .description {
    height: 6vw;
    padding: 0.5vw;
  }
  .description span {
    overflow-wrap: break-word;
  }
  @media screen and (max-width:640px) {
    .illust {
      display: block;
      width: 63%;
      border: none;
      background-color: rgba(240, 248, 255, 0.7);
      margin: 2vw auto;
      position: relative;
      border-radius: 10px;
    }
    .event_content {
      width: 100%;
    }
    img {
      width: 50vw;
      height: 50vw;
      object-fit: cover;
      margin: 0 0 0 6vw;
    }
    .event {
      display: inline-flex;
      width: 70%;
      border: 1px solid black;
    }
    .fin_event {
      position: absolute;
      color: white;
      font-weight: bold;
      font-size: 4vw;
      width: 80%;
      top: 20vw;
      right: 6vw;
      background-color: rgba(0,0,0,0.6);
    }
    .title {
      height: 8vw;
    }
    .title span {
      color: #af9453;
      font-size: 5vw;
      position: relative;
      line-height: 8.2vw;
      text-align: left;
      padding-left: 6px;
      padding-right: 6px;
      height: unset;
      max-height: unset;
    }
    table td {
      text-align: left;
      padding-left: 10px;
      vertical-align: top;
      font-size: 3vw;
    }
    .description {
      height: 6vw;
      padding-left: 2vw;
    }
  }
</style>