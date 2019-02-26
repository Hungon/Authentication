<template>
  <div class="main">
    <Navigation title="Authentication" />
    <img alt="logo" src="../assets/logo.png" />
    <Main msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/components/Main.vue";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "main",
  components: {
    Navigation,
    Main
  }
};
</script>
