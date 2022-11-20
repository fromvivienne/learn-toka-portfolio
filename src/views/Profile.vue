<template>
  <div class="profile">
    <div class="profile-content">
      <div class="img-div">
        <img class="profile-img" src="../assets/profile/profile.jpg" alt="profile">
      </div>
    </div>
    <div class="profile-content">
      <div class="profile-text">
        <span class="profile-title">透夏さんのプロフィール文章</span>
        <span class="profile-sentence">{{ sentence }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'Profile',
  props: {
  },
  data: function() {
    return {
      sentence: "コンポーネントインスタンスのリアクティブプロパティまたは算出関数（computed function）の変更を監視します。コールバックは指定されたプロパティの新しい値と古い値とともに呼び出されます。トップレベルの data、props、computed プロパティ名は文字列でしか渡すことができません。より複雑な式や、入れ子になったプロパティの場合は、代わりに関数を使います。"
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
    document.getElementsByClassName("profile-menu")[0].classList.add("selected-menu");
  }
}
</script>

<style scoped>
  .profile {
    display: inline-flex;
    width: 100%;
    height: 100%;
    background-color:rgba(255, 255, 255, 0.4);
    background-blend-mode: lighten;
  }
  .profile-content {
    width: 50%;
  }
  .img-div {
    position: relative;
    margin-top: 2vw;
  }
  .profile-img {
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    border: solid 2px black;
    margin: 0 auto;
    position: relative;
    display: block;
  }
  .profile-text {
    position: relative;
    text-align: left;
    width: 70%;
    height: 20vw;
    background-color: aliceblue;
    margin-top: 2vw;
    border: solid 1px black;
    border-radius: 5vw 0 5vw 0;
  }
  .profile-title {
    margin-top: 2vw;
    margin-left: 2vw;
    position: absolute;
    font-size: 1.4vw;
    font-weight: bold;
  }
  .profile-sentence {
    margin-top: 5vw;
    margin-left: 2vw;
    margin-right: 2vw;
    position: absolute;
    font-size: 1vw;
  }
  @media screen and (max-width:640px) {
    .profile {
      display: inline-table;
      width: 100%;
      height: 100%;
      background-color:rgba(255, 255, 255, 0.4);
      background-blend-mode: lighten;
    }
    .profile-content {
      width: 100%;
    }
    .profile-img {
      width: 50vw;
      height: 50vw;
      border-radius: 50%;
      border: solid 2px black;
      margin: 0 auto;
      position: relative;
      display: block;
    }
    .img-div {
      position: relative;
      margin-top: 10vw;
    }
    .profile-text {
      position: relative;
      text-align: left;
      width: 80%;
      height: 90vw;
      background-color: aliceblue;
      margin: 8vw auto;
      border: solid 1px black;
      border-radius: 5vw 0 5vw 0;
    }
    .profile-title {
      margin-top: 2vw;
      margin-left: 3vw;
      position: absolute;
      font-size: 4vw;
      font-weight: bold;
    }
    .profile-sentence {
      margin-top: 10vw;
      margin-left: 3vw;
      margin-right: 3vw;
      position: absolute;
      font-size: 3vw;
    }
  }
</style>