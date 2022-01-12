<template>
  <the-header></the-header>
  <div class="movie-content">
    <div class="movie-info">
      <h3 class="movie-title">{{ title }}</h3>
      <p class="year">Released: {{ year }}</p>
      <p class="type">Type: {{ type }}</p>
    </div>
    <img :src="poster" alt="movie-poster" />
  </div>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";
export default {
  components: { TheHeader },
  computed: {
    title() {
      return this.$route.params.title;
    },
    year() {
      return this.$route.params.year;
    },
    poster() {
      return this.$route.params.poster;
    },
    type() {
      return this.$route.params.type;
    },
  },
  created() {
    this.$route.params.id;
  },
};
</script>

<style scoped>
.movie-content {
  padding: 30px 0;
}
.movie-content{
  text-align: center;
}
.movie-content .movie-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 5px;
}

.movie-info .movie-title,
.movie-info .year,
.movie-info .type {
  font-size: 20px;
  color: #3d008d;
  font-weight: 700;
}
.movie-content img{
  height: 600px;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>

