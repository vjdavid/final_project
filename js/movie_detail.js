new Vue({
  el: '#app',
  data: {
    info: {},
    videoUrl: null
  },
  mounted () {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=97d131009d6fad412fe943c626f285d0&language=en-US`)
      .then(response => response.json())
      .then(res => {
        this.info = res
      })

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=97d131009d6fad412fe943c626f285d0&language=en-US`)
      .then(response => response.json())
      .then(res => {
        this.videoUrl = "//www.youtube.com/watch?v=" + res.results[0]["key"];
      })
  }
})

