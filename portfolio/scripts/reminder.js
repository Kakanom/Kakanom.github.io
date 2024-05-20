function showReminder() {
  document.getElementById("reminder__popup").classList.add("open");
  localStorage.setItem("reminder_closed", "false");
}

function closeReminder() {
  document.getElementById("reminder__popup").classList.remove("open");
  localStorage.setItem("reminder_closed", "true");
}

window.onload = function() {
  if (localStorage.getItem("reminder_closed") === "false") {
    setTimeout(showReminder, 10000);
  }
};
