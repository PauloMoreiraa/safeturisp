<template>
  <div id="app">
    <Map />
  </div>
</template>

<script>
import Map from "./components/Map.vue";

export default {
  name: "App",
  components: { Map }
};
</script>

<style>
#app {
  font-family: Poppins, sans-serif;
  padding: 20px;
}
</style>