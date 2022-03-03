<template>
  <div id="app">
    <img
      width="200"
      height="200"
      alt="Vue logo"
      src="./assets/calculator.jpeg"
    />
    <HelloWorld msg="calculator Vue.js" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#img {
  max-width: 100%;
  object-fit: contain;
}
</style>
