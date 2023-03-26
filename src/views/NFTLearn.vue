<template>
  <div class="nft-learn">
    <div class="content-div">
      <ul>
        <li>
          <span class="title">NFTに関して、今できる事はGoogle Chromeのアドオンを居れるのみです。</span>
          <details>
            <summary id="nft-sum">参考サイトMETAMASK</summary>
            <div>
              いや、このサイトには適わないわ…
              <a href="https://tokenknowledge.com/nft-how-to-sell/">NFT 参考サイト</a>
              一旦、これで満たされますｗ
            </div>
            <div class="description">
              <button @click="closeDetails('nft-sum')">このセクションを閉じる</button>
            </div>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NFTLearn',
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

    const cookies = document.cookie.split("; ");
    const vscodeCb = cookies.find(row => row.startsWith('vscode'));
    if (vscodeCb) {
      document.getElementById("vscode-cb").checked = JSON.parse(vscodeCb.split('=')[1]);
    }
    
    const nodeCb = cookies.find(row => row.startsWith('node'));
    if (nodeCb) {
      document.getElementById("node-cb").checked = JSON.parse(nodeCb.split('=')[1]);
    }

    const site3Cb = cookies.find(row => row.startsWith('site3'));
    if (site3Cb) {
      document.getElementById("site3-cb").checked = JSON.parse(site3Cb.split('=')[1]);
    }

    const site4Cb = cookies.find(row => row.startsWith('site4'));
    if (site4Cb) {
      document.getElementById("site4-cb").checked = JSON.parse(site4Cb.split('=')[1]);
    }

    const site5Cb = cookies.find(row => row.startsWith('site5'));
    if (site5Cb) {
      document.getElementById("site5-cb").checked = JSON.parse(site5Cb.split('=')[1]);
    }
  },
  methods: {
    closeDetails(id) {
      document.getElementById(id).click();
    },
    learnCheck(event) {
      document.cookie = event.target.id + '=' + event.target.checked;
    }
  }
}
</script>
<style scoped>
  summary {
    margin: 0.5vw 0 1vw 0;
  }
  .nft-learn {
    overflow-y: scroll;
    position: relative;
    height: 100%;
  }
  .content-div {
    padding-top: 2vw;
    padding-bottom: 4vw;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    font-weight: bold;
    font-size: 1vw;
  }
  .inner-title {
    font-weight: bold;
  }
  img {
    margin: 0.2vw 0;
    max-width: 30vw;
    border: 1px solid gray;
  }
  code {
    display: inline-block;
    padding: 0.1em 0.25em; /* 文字周りの余白 */
    color: #444; /* 文字色 */
    background-color: #e7edf3; /* 背景色 */
    border-radius: 3px; /* 角丸 */
    border: solid 1px #d6dde4; /* 枠線 */
  }
  .description {
    background-color: #efefef;
    padding: 1vw 0 1vw 1vw;
    border-radius: 15px;
  }
</style>
