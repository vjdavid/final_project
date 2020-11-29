new Vue({
  el: '#app',
  data: {
    movies: [],
    movieToSearch: ""
  },
  mounted() {
    console.log('component loaded');
  },
  methods: {
    getMovies() {
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=97d131009d6fad412fe943c626f285d0&language=en-US&page=1')
        .then(response => response.json())
        .then(res => {
          if (this.movieToSearch) {
            this.movies = res.results.filter(movie =>
              movie.title.toLowerCase().includes(this.movieToSearch.toLowerCase())
            );
          } else {
            this.movies = res.results;
          }
      });
    }
  },
  created() {
    this.getMovies();
  }
})
