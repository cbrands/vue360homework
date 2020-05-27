<template>
  <div id="app">
    <MyTwitterBox msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import MyTwitterBox from "./components/TwitterBox.vue";

export default {
  name: "App",
  components: {
    MyTwitterBox
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
