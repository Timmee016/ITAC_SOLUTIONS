(function() {
    emailjs.init('itacsolutions'); // Replace with your EmailJS user ID
  })();

  function sendMail(e) {
    e.preventDefault();
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value
    })
    .then(function(response) {
      alert("Message sent successfully!");
      document.querySelector("form").reset();
    }, function(error) {
      alert("Failed to send message. Please try again later.");
    });
  }

