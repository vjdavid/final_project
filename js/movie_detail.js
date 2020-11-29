new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.themoviedb.org/3/movie/238?api_key=97d131009d6fad412fe943c626f285d0&language=es-MX')
      .then(response => ( this.info = response.data.results))
  }
})

