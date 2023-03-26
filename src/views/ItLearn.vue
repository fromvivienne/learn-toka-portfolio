<template>
  <div class="it-learn">
    <div class="content-div">
      <ul>
        <li>
          <span class="title">まずは、学習していく上でアプリケーションのインストールをしていきます</span>
          <details>
            <summary id="vscode-sum">VS CODE <input type="checkbox" @change="learnCheck" name="vscode-cb" id="vscode-cb"> ←終わったらチェック </summary>
            <div class="description">
              バチクソ高性能な「メモ帳」です。<br>
              プログラムを書く事は後回しですが、読む際に色分け等見やすくしてくれるので、インストールしておきます。<br>
              <br>
              <a href="https://code.visualstudio.com/">code.visualstudio.com/</a><br>
              <br>
              上記、URLをクリックしてページに飛んでください（Ctrlを押しながらクリックすると、別タブで開けます）
              <img src="../assets/learn/vscode-btn.png" alt="vscode-btn"><br>
              下矢印ではなく、「Download for Windows」って所をクリック<br>
              （下矢印はOS別を選ぶので、Windowsで操作してると必要ない部分です）<br>
              <br>
              クリックすると、勝手にダウンロードが始まります。（画面下にダウンロードの進捗が表示されます）<br>
              <img src="../assets/learn/vscode-download.png" alt="vscode-download"><br>
              ダウンロードが完了したらそこをクリック（インストールが始まります）<br>
              <img src="../assets/learn/vscode-install1.png" alt="vscode-install1"><br>
              <img src="../assets/learn/vscode-install2.png" alt="vscode-install2"><br>
              なんやかんや出てきますが、同意するを操作する以外はひたすら次へを押して完了までいっちゃいましょう！<br>
              …で、インストール完了すると、こんなソフトがインストールされます！<br>
              <img src="../assets/learn/vscode.png" alt="vscode"><br>
              <br>
              お疲れ様でした！！！<br>
              <br>
              <br>
              <button @click="closeDetails('vscode-sum')">このセクションを閉じる</button>
            </div>
          </details>
          <details>
            <summary id="node-sum">NODE (JavaScript Library) <input type="checkbox" @change="learnCheck" name="node-cb" id="node-cb"> ←終わったらチェック </summary>
            <div class="description">
              JavaScriptってのは、超サックリ言うとブラウザ（ChromeとかSafariとか）で実行してくれるプログラムの事です。<br>
              まぁ、実際にJavaScriptに触れるのはもっと後になりますが、<br>
              動作させる上で必要になりますので、インストールしておきます。<br>
              <br>
              ここから急にプログラマっぽい事しますが、お気軽にどぞｗ<br>
              <br>
              まずは、インストーラをダウンロードしてきます。<br>
              <br>
              <a href="https://nodejs.org/en/">nodejs.org/en/</a>
              <br>
              <br>
              すると、こんな画面になります。<br>
              <img src="../assets/learn/node-page.png" alt="node-page"><br>
              この画面の、「18.12.1 LTS」の方をクリックしてください。<br>
              <img src="../assets/learn/node-download.png" alt="node-download"><br>
              VS Codeの時と同様に、画面下にダウンロードの進捗が始まるので、終わるのを待ちます。<br>
              終わったら、クリックしてインストーラを起動します。<br>
              <img src="../assets/learn/node-install1.png" alt="node-install1"><br>
              <img src="../assets/learn/node-install2.png" alt="node-install2"><br>
              また、なんやかんや出てきますが、がんがん「NEXT」押して行って、Finishまで行ってください。<br>
              <br>
              完了したら、インストールされたかを確認します。
              <ol>
                <li>Windowキー（キーボードの左下の方？）を押してください</li>
                <li>メニューが表示された状態で、「cmd」と入力し、Enterを押してください。<br>（コマンドプロンプトってソフトが起動します）</li>
                <li>その画面で、「node -v」と入力し、Enterを押してください。<br>⇒「v18.12.1」と表示されたら成功</li>
                <li>そのまま、「npm -v」を入力し、Enterを押してください。<br>⇒「v9.1.1」と表示されたら成功</li>
              </ol>
              ※ 小数点以下の数字が違う際は、気にしないでください。<br>
              <br>
              うまく、数字が表示されたら成功です！お疲れ様でした！！！<br>
              だめだった場合は、LINEか何かでお知らせください！<br>
              <br>
              <br>
              <button @click="closeDetails('node-sum')">このセクションを閉じる</button>
            </div>
          </details>
        </li>
        <li>
          <span class="title">ちょっと、透夏さん専用のサイトを作ってみますか(2022.11.21)</span>
          <details>
            <summary id="site1-sum">サイトを作るってなんだそれ？</summary>
            <div class="description">
              今見ているこのサイトもそうですが、Googleが提供している「Firebase」という技術を使って、ホームページを公開しています。
              そもそも「ホームページを公開」ってなにそれ美味しいの？状態とは思いますので、ほんの少しだけ<br>
              <br>
              <br>
              そもそも、PCに限らず、スマホでもインターネットの情報を見る時に、我々は「インターネットブラウザ」を使用します。
              代表格を並べると…<br>
              PC:
              <ul>
                <li>Chrome(Google)</li>
                <li>Edge(Microsoft)</li>
                <li>Safali(Apple)</li>
              </ul>
              スマホ
              <ul>
                <li>Chrome(Google)</li>
                <li>Safali(iOS)</li>
              </ul>
              等でしょうか…<br>
              <br>
              なぜ、インターネットブラウザが必要なのか？の一番大きな理由としては
              <b>多彩な表現が可能になるから</b>
              です。<br>
              意味不明だと思いますので、ごくごく簡単な例を下に記します。<br>
              例えば、文字を赤くしたい場合は、
              <code>&lt;span style="color: red;"&gt;赤くしたい文字&lt;/span&gt;</code>
              と記載します。<br>
              その文章を、インターネットブラウザが読み込むと、<br>
              「あぁ...、この部分を赤く表現したいんだな？」って読み取ってくれて<span style="color: red;">赤くしたい文字</span>と表現されます。<br>
              他にも…
              入力項目：<input type="text">
              や、ボタンの表現：<button>ボタン</button> 等…、<br>
              多岐に渡る表現方法によって世の中のサイトは皆に見てもらえるよう工夫しています。<br>
              <br>
              今回、透夏さんがITを勉強するにあたって、ご自身の活動にプラスになる様な勉強をして欲しいので、<br>
              この、見栄えの部分を重点的に学んでいきます。<br>
              <br>
              <br>
              <button @click="closeDetails('site1-sum')">このセクションを閉じる</button>
            </div>
          </details>
          <details>
            <summary id="site2-sum">ちょっとひな形作ってみようぜ</summary>
            <div class="description">
              今から行う作業は、これからITを学んでいくキャンパスみたいなモノを作ります。<br>
              覚えてほしい事、覚える必要ない事をごちゃ混ぜに説明するので、一旦、全部脳死で進めてください。<br>
              <br>
              どこかのタイミングで、「あれ…なんか見覚えあるな」を絶対体験するのでｗ<br>
              <br>
              <br>
              <button @click="closeDetails('site2-sum')">このセクションを閉じる</button>
            </div>
          </details>
          <details>
            <summary id="site3-sum">firebase <input type="checkbox" @change="learnCheck" name="site3-cb" id="site3-cb"> ←終わったらチェック </summary>
            <div class="description">
              Googleアカウントは持ってましたよね？<br>
              Chromeブラウザで、下記リンクをクリックしてください。<br>
              <a href="https://firebase.google.com/?hl=ja">firebase.google.com/?hl=ja</a><br>
              <br>
              <img src="../assets/learn/firebase_1.png" alt="firebase_1"><br>
              「使ってみる」ボタン押下です。<br>
              <br>
              <img src="../assets/learn/firebase_2.png" alt="firebase_2"><br>
              「＋プロジェクトを追加」をクリックしてください<br>
              <br>
              <img src="../assets/learn/firebase_3.png" alt="firebase_3"><br>
              プロジェクト名はなんでも良いですが…下の<br>
              <br>
              <img src="../assets/learn/firebase_4.png" alt="firebase_4"><br>
              この部分に数字が入っていると、誰かとプロジェクト名が被ってて任意の数字が入って来るので、<br>
              願わくば、<br>
              <br>
              <img src="../assets/learn/firebase_5.png" alt="firebase_5"><br>
              の様な感じにして、覚えやすいものが好ましいです。この辺はアカウントの考え方と同じですね。<br>
              <br>
              <img src="../assets/learn/firebase_6.png" alt="firebase_6"><br>
              チェックをONにして、続行を押しましょう！<br>
              <br>
              <img src="../assets/learn/firebase_7.png" alt="firebase_7"><br>
              これは、解析を有効にしますか？って質問です。OFF（無効）にして「プロジェクトを作成」ボタンを押してください。<br>
              後から有効に出来ますし、一旦シンプルな構成にしたいので、無効にしておきます。<br>
              アナリティクスってYoutubeでも使うので、はちねぇは親しみのある言葉かも知れませんね。<br>
              <br>
              <img src="../assets/learn/firebase_8.png" alt="firebase_8"><br>
              <img src="../assets/learn/firebase_9.png" alt="firebase_9"><br>
              ちょい待ち後、続行っす<br>
              <br>
              <img src="../assets/learn/firebase_10.png" alt="firebase_10"><br>
              はい、一旦お疲れ様でした！！
              <br>
              <br>
              <button @click="closeDetails('site3-sum')">このセクションを閉じる</button>
            </div>
          </details>
          <details>
            <summary id="site4-sum">プロジェクトの作成する為のなんやかんや<input type="checkbox" @change="learnCheck" name="site4-cb" id="site4-cb"> ←終わったらチェック </summary>
            <div class="description">
              <img src="../assets/learn/site_1.png" alt="site_1"><br>
              ドキュメントフォルダに新しいフォルダを作成しましょう。名前はなんでも良いですが、<br>
              develop（開発）ってフォルダを僕は作成しましたので、以後「develop」で説明していきます。<br>
              <br>
              <img src="../assets/learn/site_2.png" alt="site_2"><br>
              前述でインストールしたVSCodeを立ち上げます。<br>
              で、左上「ファイル」メニューから「フォルダーを開く」をクリック<br>
              ダイアログが開いて、選択できるようになるので、上で作った「develop」を選択して「フォルダを選択」ボタンを押してください。<br>
              <br>
              <img src="../assets/learn/site_3.png" alt="site_3"><br>
              画面が開きなおすと思います（その際、信頼しますか？ってダイアログが出た場合は、信頼しますを選択してください）<br>
              で、またまた左上「ターミナル」メニューから「新しいターミナル」を選択します。<br>
              <br>
              <img src="../assets/learn/site_4.png" alt="site_4"><br>
              画面下にこんなん出てきますｗ<br>
              訳わからんと思いますが、ここからもっと訳わからん事しますので…怖がらないでくださいｗ<br>
              <br>
              <img src="../assets/learn/site_5_1.png" alt="site_5_1"><br>
              新しく開いた、ターミナルって所のどこでも良いのでクリックして、ターミナルを選択状態にして何かキーボード打った際に、文字が入る様にしましょう<br>
              <br>
              <img src="../assets/learn/site_5.png" alt="site_5"><br>
              そこに、<code>npm install -g @vue/cli</code>と打ち込んでEnterを押してください。（コピペでOK）<br>
              <br>
              <img src="../assets/learn/site_6.png" alt="site_6"><br>
              なんや、がちゃがちゃと文字が出てきます。<br>
              なんかうごいちゅうなぐらいで眺めてください<br>
              <br>
              <img src="../assets/learn/site_7.png" alt="site_7"><br>
              終わると、また、入力待ちの行になります。<br>
              <br>
              <img src="../assets/learn/site_8.png" alt="site_8"><br>
              終わったら、<code>vue --version</code>と打って、Enterを押してください。<br>
              「@vue/cli 5.0.8」と出れば成功です！（小数点部分違っても気にしないでください）<br>
              <br>
              <img src="../assets/learn/site_9.png" alt="site_9"><br>
              どんどん行きます！続いて、そのままターミナルに、<code>npm install firebase</code>と打ってEnterを押してください。<br>
              <br>
              <img src="../assets/learn/site_10.png" alt="site_10"><br>
              また、がちゃがちゃと動いて終われば、入力待ちの行になります。<br>
              <br>
              <img src="../assets/learn/site_11.png" alt="site_11"><br>
              同じように、インストール完了しているか確認してみましょう。<br>
              <code>firebase --version</code>と打って、Enterを押してください。<br>
              画像のような感じになっていれば、インストールの諸々が完了です！
              <br>
              <br>
              <button @click="closeDetails('site4-sum')">このセクションを閉じる</button>
            </div>
          </details>
          <details>
            <summary id="site5-sum">プロジェクトの作成 <input type="checkbox" @change="learnCheck" name="site5-cb" id="site5-cb"> ←終わったらチェック </summary>
            <div class="description">
              では、プロジェクトを作成していきます。
              <br>
              <br>
              <img src="../assets/learn/site_12.png" alt="site_12"><br>
              そのままターミナルの所で、<code>vue create プロジェクト名</code>と打ち込んで、Enterを押してください。<br>
              プロジェクト名の所は…解りやすく、Firebaseの所で作ったプロジェクト名と同じにしましょう。<br>
              （僕は解りやすく、new-projと打ちましたが説明の為なので、お気になさらずｗ）<br>
              <br>
              <img src="../assets/learn/firebase_5.png" alt="firebase_5"><br>
              ここのやつね<br>
              もしも、「toka-portfolio」とした場合は、<code>vue create toka-portfolio</code>となりますね。<br>
              <br>
              <img src="../assets/learn/site_13.png" alt="site_13"><br>
              続いて、どのバージョンで作りますか？って聞いてくるので、「vue3」の方（多分すでに色ついてて選ばれてる）を選択してEnterを押してください。<br>
              <br>
              <img src="../assets/learn/site_14.png" alt="site_14"><br>
              また、入力待ち状態になったら作成完了です！<br>
              <br>
              <img src="../assets/learn/site_15.png" alt="site_15"><br>
              では、作ったプロジェクトで作業できるように、フォルダを移動します。<br>
              <code>cd ./プロジェクト名</code>と打って、Enterを押してください。<br>
              「toka-portfolio」とした場合は、<code>cd ./toka-portfolio</code>となります。<br>
              すると、「C:\Users\名前\Documents\develop」だった入力待ちの部分が、<br>
              「C:\Users\名前\Documents\develop\プロジェクト名 >」となっています。<br>
              <br>
              <img src="../assets/learn/site_16.png" alt="site_16"><br>
              フォルダ移動が完了したら、<code>npm run build</code>と打って、Enterを押してください。<br>
              またがちゃがちゃと動きます。<br>
              <br>
              <img src="../assets/learn/site_17.png" alt="site_17"><br>
              終わって、入力待ちになったら続いて、<code>npm run serve</code>と打って、Enterを押してください。<br>
              <br>
              <img src="../assets/learn/site_18.png" alt="site_18"><br>
              そしたら、画像の様な状態になります。（画像では8081ってなってますが、おそらく8080のはずです）<br>
              また、Windowsがこれ、実行するけど良いの？みたいなダイアログを出してくることがありますが、出てきた場合はOK的なボタンを押してください。<br>
              <br>
              <img src="../assets/learn/site_19.png" alt="site_19"><br>
              では、Chromeのインターネットブラウザを表示して、ターミナルに表示されている<br>
              「http～」から始まる文字をブラウザのURL部分に打ち込んでEnterを押してください。<br>
              多分、<code>http://localhost:8080/</code>となっていると思います。<br>
              ここまで来たら、一旦休憩です！<br>
              この後、軽く画面をカスタマイズ、世界に公開という手順を踏んでいきましょう！<br>
              <br>
              <br>
              <button @click="closeDetails('site5-sum')">このセクションを閉じる</button>
            </div>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ItLearn',
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
  .it-learn {
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
