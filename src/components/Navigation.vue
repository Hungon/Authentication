<template>
  <div id="header">
    <h1>{{ title }}</h1>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/buttons">Buttons</router-link>
      <router-link to="/history">History</router-link>
      <span v-if="isLoggedIn"><a @click="logout">Logout</a></span>
      <span v-else><router-link to="/login">Login</router-link></span>
    </div>
  </div>
</template>
<script>
import store from "../store";
import router from "../router";

export default {
  name: "Navigation",
  props: {
    title: String
  },
  computed: {
    isLoggedIn: function() {
      return store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      store.dispatch("logout").then(() => {
        router.push("/");
      });
    }
  }
};
</script>

<style lang="scss">
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
.nav {
  width: 40%;
  margin-left: auto;
  a {
    margin: 10px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
