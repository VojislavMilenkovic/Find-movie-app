<template>
  <section class="query-section">
    <div>
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model.trim="enteredMovie"
      />
    </div>
    <div>
      <button class="btn" @click="getMovie">Search</button>
    </div>
  </section>
  <section class="movies-section">
    <ul class="movie-list">
      <li class="movie-item" v-for="movie in movies" :key="movie.imdbID">
        <h3 class="movie-title">{{ movie.Title }}</h3>
        <p class="movie-year"><strong>Released:</strong> {{ movie.Year }}</p>
        <div class="movie-poster">
          <img :src="movie.Poster" alt="movie-img" />
        </div>
        <div class="movie-info">
          <router-link
            class="movie-info"
            :to="{
              name: 'details',
              params: {
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster,
                type: movie.Type,
              },
            }"
            >Movie Info</router-link
          >
        </div>
      </li>
    </ul>
  </section>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      apiKey: "a27fbbdc",
      enteredMovie: "",
      movies: [],
    };
  },
  methods: {
    async getMovie() {
      const apiUrl = `http://www.omdbapi.com/?s=${this.enteredMovie}&apikey=${this.apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      this.movies = data.Search;
    },
  },
  provide() {
    return {
      movies: this.movies,
    };
  },
};
</script>

<style scoped>
.query-section {
  padding: 50px 0;
  text-align: center;
  margin-bottom: 50px;
}
.query-section input {
  width: 50%;
  font-size: 20px;
  border: 1px solid #3d008d;
  border-radius: 5px;
  outline: none;
  margin-bottom: 20px;
  color: #3d008d;
  font-weight: 600;
  padding: 5px 3px;
}
.query-section input:focus::placeholder {
  color: transparent;
}

.query-section .btn {
  width: 200px;
  font-size: 17px;
  background-color: #f391e3;
  color: #3d008d;
  border: none;
  border-radius: 5px;
  padding: 5px 0;
  font-weight: 600;
  cursor: pointer;
}

.query-section .btn:hover {
  background-color: #3d008d;
  color: #f391e3;
}

.movies-section .movie-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.movies-section .movie-list .movie-item {
  list-style: none;
  max-width: 30%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 20px;
}
.movies-section .movie-list .movie-item .movie-title {
  height: 50px;
  font-size: 20px;
  color: #3d008d;
}
.movies-section .movie-list .movie-item .movie-year {
  font-size: 17px;
  color: #3d008d;
  margin-bottom: 5px;
}
.movies-section .movie-list .movie-item .movie-poster img {
  height: 400px;
  margin-bottom: 10px;
}
.movies-section .movie-list .movie-item .movie-info {
  text-align: center;
  padding: 5px 0;
  border: 1px solid #3d008d;
  background-color: #3d008d;
  color: #f391e3;
  cursor: pointer;
  font-size: 17px;
  text-decoration: none;
}
</style>