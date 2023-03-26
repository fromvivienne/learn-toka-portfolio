<template>
  <div class="learn">
    <div>
      <span class="warn">※ ここからのページはPCのWebBrowser用のみ用意しますので、スマホのレイアウト崩れは無視しますー</span>
    </div>
    <div class="category-div it-table">
        <span>
          IT Learn
          <a href="/it-learn">
            <img src="../assets/icons/forward.svg" alt="forward">
          </a>
        </span>
    </div>
    <div class="category-div nft-table">
      <span>
        NFT Learn
        <a href="/nft-learn">
          <img src="../assets/icons/forward.svg" alt="forward">
        </a>
      </span>
    </div>
    <div class="category-div music-table">
      <span>
        (Comming Soon...) Music Learn
        <a href="/music-learn">
          <img src="../assets/icons/forward.svg" alt="forward">
        </a>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Learn',
  props: {
  },
  data() {
    return {
    }
  },
  mounted() {
    let content = document.getElementById("content");
    content.style.backgroundImage = 'none';
    content.style.backgroundColor = 'aliceblue';
  },
  methods: {
  }
}
</script>
<style scoped>
  .warn {
    margin-left: 1vw;
  }
  table {
    width: 16vw;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1vw;
  }
  img {
    width: 1vw;
    vertical-align: middle;
  }
  .category-div {
    width: 16vw;
    margin-left: auto;
    margin-right: auto;
    padding: 0.5vw 0 0.5vw 0.5vw;
    font-weight: bold;
  }
  .it-table {
    background-color: antiquewhite;
  }
  .nft-table {
    background-color: cornsilk;
  }
  .music-table {
    background-color: mistyrose;
  }
</style>
