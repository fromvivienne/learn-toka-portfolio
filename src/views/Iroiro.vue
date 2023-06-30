<template>
  <div class="iroiro">
    <ol>
      <li>
        yudu27n08k2@gmail.com宛てにGoogleドライブ共有を送っていますので、<br>
        <p><a href="https://drive.google.com/drive/folders/15DVmXOcWnc1FgVMEk4XQRfD4ayRGBrgj?usp=sharing" target="_blank"><b>こちら</b></a>
        から、googleドライブに入ってください。</p>
      </li>
      <li>
        共有フォルダ内にあるファイルをダウンロードしてください。
      </li>
      <li>
        fabric-installer-0.11.2.exeをダブルクリックしてインストールしてください（特に変更する箇所なし）<br>
        終わったら、右上の×ボタンで終了してください（画面内のボタンを押すともう一度インストールしようとする様です）
      </li>
      <li>
        上記のインストーラ（fabric-installer-0.11.2.exe）と、シェーダー（SEUS-Renewed-v1.0.1.zip）以外のjarファイルを<br>
        modsフォルダに移動してください。Modsフォルダへの行き方は…<br>
        <img src="../assets/images/iroiro/appdata.png" alt=""><br>
        上記イメージの様に、上部入力に「%APPDATA」と入力しEnterで飛んだ先の上から二つ目くらい…に「.minecraft」フォルダがあるので、<br>
        ダブルクリックで入る。で、modsフォルダがあると思います（無ければ新規フォルダで作成してください）
      </li>
      <li>
        上記が終わったら、マイクラを起動します。
      </li>
      <li>
        fabricの起動構成が出来ている筈ですので、それで起動してください。<br>
        <img src="../assets/images/iroiro/kidou.png" alt="">
      </li>
      <li>
        ビデオ設定に入ります（fabricでビデオ設定の雰囲気がデフォルトと少し違います）<br>
        <img src="../assets/images/iroiro/shader.png" alt="">
      </li>
      <li>
        シェーダータブを選択し、下部の「パックフォルダーを開く」ボタンを押して、開いたフォルダーに「SEUS-Renewed-v1.0.1.zip」を入れて、
        マイクラに戻ると、ファイル名で選択できるようになっているので、選択し、完了します。<br>
        <img src="../assets/images/iroiro/seus.png" alt="">
      </li>
      <li>
        これで、シェーダーの適用と、マップModが適用されていると思います！
        お疲れ様でした！<br>
        <img src="../assets/images/iroiro/kakunin.png" alt="">
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Iroiro',
  mounted() {
  }
}
</script>

<style scoped>
.iroiro {
  width: 60%;
  margin: 2vw auto;
}
li {
  margin: 2vw;
}
</style>
