function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  emailjs.send('service_hpyep98', 'template_lkk305a', params, 'pbnan-SLXhyvjpod8')
    .then(function (res) {
      $.toast({
        heading: 'Success!!',
        text: 'Your message has been sent!!',
        icon: 'success',
        loader: true,
        loaderBg: '#9EC600'
      })
    });
}