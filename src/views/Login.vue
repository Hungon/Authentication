<template>
  <form class="login" @submit.prevent="login">
    <div id="header">
      <h1>Authentication</h1>
    </div>
    <p class="description">
      Welcome!<br />
      This is Authentication Application.<br />
      To enter the page, please put your user ID and the password.<br />
    </p>
    <img alt="logo" src="../assets/logo.png" />
    <p>
      {{ userName }}
    </p>
    <p>
      {{ password }}
    </p>
    <div>
      <input type="text" placeholder="User Name" required v-model="userName" />
    </div>
    <div>
      <input type="text" placeholder="Password" required v-model="password" />
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
</template>

<script>
import router from "../router";
import store from "../store";

export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      console.log("login()");
      let userName = this.userName;
      let password = this.password;
      store
        .dispatch("login", {
          user: userName,
          password: password
        })
        .then(() => router.push("/home"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
#header {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: grey;
}
h1 {
  padding-top: 10px;
  text-align: center;
}

input {
  width: 150px;
  border-color: black;
  text-align: center;
}
button {
  width: 158px;
  height: 30px;
  background: grey;
  color: white;
  margin-top: 10px;
}
</style>
