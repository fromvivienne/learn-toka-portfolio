<template>
  <div class="signin">
    <table>
      <tr>
        <th>ID</th>
        <td><input id="email" type="email" v-model="email" placeholder="mail address"/></td>
      </tr>
      <tr>
        <th>PASS</th>
        <td><input id="password" type="password" v-model="password" placeholder="pass"/></td>
      </tr>
      <tr>
        <td colspan="2" align="center"><button @click="login">ログイン</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'Signin',
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
    login: function() {
      const auth = getAuth();
      signInWithEmailAndPassword( auth, this.email, this.password)
      .then(() => {
        let content = document.getElementById("content");
        content.style.backgroundImage = "url('./assets/app/bg.jpg')";
        window.location.href = "/";
      })
      .catch((error) => { 
        console.log(error);
        alert("ログインに失敗しました");
      });
    }
  }
}
</script>
<style scoped>
  table {
    margin-left: auto;
    margin-right: auto;
    padding-top: 2vw;
  }
  input {
    width: 12vw;
    height: 1.2vw;
    border-radius: 5px;
  }
  th {
    text-align: right;
    padding-right: 0.5vw;
  }
  tr {
    line-height: 2vw;
  }
  button {
    background-color: darkgray;
    border: none;
    padding: 0.5vw 1.6vw;
    border-radius: 5px;
    color: aliceblue;
    font-size: 0.8vw;
    font-weight: bold;
  }
  @media screen and (max-width:640px) {
    .signin {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    input {
      width: 50vw;
      height: 8vw;
      border-radius: 5px;
      margin-bottom: 2vw;
    }
    button {
      background-color: darkgray;
      border: none;
      padding: 3vw 6vw;
      border-radius: 5px;
      color: aliceblue;
      font-size: 3vw;
      font-weight: bold;
    }
  }
</style>
