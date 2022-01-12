<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
}
img {
  width: 100%;
}
.container {
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid transparent;
}
</style>
