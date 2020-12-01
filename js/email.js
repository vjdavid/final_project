new Vue({
  el: '#app',
  mounted() {
    console.log('componente montado');
  },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_xmftqle', 'template_lmwalfa', e.target, 'user_sRybl9IohtO41jrUV3ajZ')
        .then((result) => {
          Swal.fire(
            'Haz sido inscrito!',
            'En hora buena!',
            'success'
          )
        }, (error) => {
          console.log('failed', result.status, result.text);
        })
    }
  }
})
