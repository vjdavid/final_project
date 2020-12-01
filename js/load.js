new Vue({
  el: '#app',
  data: {
    movies: [],
    movieToSearch: ""
  },
  methods: {
    getMovies() {
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=97d131009d6fad412fe943c626f285d0&language=en-US&page=1')
        .then(response => response.json())
        .then(res => {
          this.movies = res.results;
      });
    },
    searchMovie() {
      let query = this.movieToSearch.replace(" ", "%20");
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=97d131009d6fad412fe943c626f285d0&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(res => {
          this.movies = res.results;
      });
    }
  },
  created() {
    this.getMovies();
  }
})
