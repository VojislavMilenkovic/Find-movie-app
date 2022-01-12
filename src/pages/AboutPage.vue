<template>
  <the-header></the-header>
  <section>
    <div class="title">
      <h2>Welcome to the About page...</h2>
    </div>
    <div class="content">
      <p>
        This is a Movie app practise project. In this project we are using
        <a :href="vue"><strong>Vue.js</strong></a> JavaScript Framework and
        <a :href="vueRouter"><strong>Vue Router</strong></a>, the official router for Vue.js.
      </p>
      <p>
        In this project we are fetching data from OMDb API (The Open Movie
        Database). The OMDb API is a RESTful web service to obtain movie
        information, all content and images on the site are contributed and
        maintained by users. If you want to find out more about OMDb API
        click on the button bellow!
      </p>
      <div class="link">
        <a class="omdb-link" :href="url">OMDb API</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      url: "http://www.omdbapi.com/",
      vue: "https://vuejs.org/",
      vueRouter: "https://router.vuejs.org/",
    };
  },
};
</script>

<style scoped>
section {
  text-align: center;
  padding: 50px 0;
}

.title {
  font-size: 25px;
  color: #3d008d;
  margin-bottom: 20px;
}
.content {
  text-align: left;
  font-size: 20px;
  color: #3d008d;
}
.content p {
  margin-bottom: 20px;
}
.link {
  text-align: center;
}
.omdb-link {
  padding: 5px 3px;
  border: 1px solid #3d008d;
  border-radius: 5px;
  cursor: pointer;
  background-color: #3d008d;
  color: #f391e3;
  font-size: 20px;
  text-decoration: none;
}
</style>