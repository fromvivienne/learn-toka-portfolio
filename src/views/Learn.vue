<template>
  <div class="learn">
    <div class="comment">
      <ol>
        <li>Git Hubを開きます</li>
        <li>「Fetch origin」ってボタンを押下します。</li>
        <li>推しは生きてる</li>
        <li>変更がある場合、同ボタンが「Pull ...」みたいなボタンになるので、それも押下します。</li>
      </ol>
    </div>
    <img class="img-view" src="../assets/learn/github.gif" alt="">
    <div class="comment">
      <ol>
        <li>VSCodeを開きます。</li>
        <li>メニューのファイルから、「フォルダーを選択」を押下。</li>
        <li>ダイアログが開くので、ドキュメントフォルダの「learn-toka-portfolio」を選択</li>
        <li>メニューのターミナルから、「新しいターミナル」を押下。</li>
        <li>画面下にターミナルが表示されるので、「npm run serve」を記述してEnterキーを押下</li>
        <li>起動（色々表示されるのが落ち着いたら）したら、GoogleChromeで、URLに、「http://localhost:8080」を記述して表示</li>
        <li>画面が起動したらOK！</li>
      </ol>
    </div>
    <img class="img-view" src="../assets/learn/vscode.gif" alt="">
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
  },
  methods: {
  }
}
</script>
<style scoped>
.learn {
  width: 40%;
  background-color: white;
  margin: 1vw auto;
}
.comment {
  margin-top: 1vw;
  margin-bottom: 1vw;
  display: table;
}
.img-view {
  width: 35vw;
  display: table;
  margin: 0 auto;
}
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
