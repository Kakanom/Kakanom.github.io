document.getElementById("feedback__button").addEventListener("click", function() {
  document.getElementById("feedback__popup").classList.add("opened");
  document.getElementById("feedback__popup").classList.add("visible");
});

function closePopup() {
  document.getElementById("feedback__popup").classList.remove("visible");
  document.getElementById("feedback__popup").classList.remove("opened");
}

document.getElementById("feedback__form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  if (name === "" || phone === "" || email === "" || message === "") {
    alert("Please, fill in all the gaps");
    return;
  }

  var phoneRegex = /^\+?(\d{1,3})\)?[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{2})[- ]?(\d{2})$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!phoneRegex.test(phone) || !emailRegex.test(email)) {
    alert("Please, enter the correct phone number and email");
    return;
  }

  var submit__button = document.getElementById("submit__button");
  submit__button.textContent = "We are sending it...";
  submit__button.classList.add("disabled");
  submit__button.disabled = true;

  setTimeout(function() {
    document.getElementById("feedback__message").textContent = "The information has been sent successfully";
    submit__button.textContent = "Sent";
    submit__button.style.backgroundColor = "#5cb85c";
  }, 400);
});
