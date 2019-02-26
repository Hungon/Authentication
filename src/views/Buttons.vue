<template>
  <div class="buttons">
    <Nagigation title="Authentication" />
    <img alt="logo" src="../assets/logo.png" />
    <h1>This is a page to edit dialogue and motion.</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Nagigation from "@/components/Navigation.vue";
export default {
  name: "buttons",
  components: {
    Nagigation
  }
};
</script>
