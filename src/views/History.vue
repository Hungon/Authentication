<template>
  <div class="history">
    <Nagigation title="Authentication" />
    <img alt="logo" src="../assets/logo.png" />
    <h1>This is a history page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Nagigation from "@/components/Navigation.vue";
export default {
  name: "history",
  components: {
    Nagigation
  }
};
</script>
