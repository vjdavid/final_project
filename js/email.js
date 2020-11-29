import emailjs from 'emailjs-com'

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then((result) => {
          console.log('success', result.status, result.text);
        }, (error) => {
          console.log('failed', result.status, result.text);
        })
    }
  }
}
