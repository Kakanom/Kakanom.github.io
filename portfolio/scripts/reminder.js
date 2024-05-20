function showReminder() {
  document.getElementById("reminder__popup").classList.add("open");
  localStorage.setItem("reminder_opened", "true");
}

function closeReminder() {
  document.getElementById("reminder__popup").classList.remove("open");
  localStorage.setItem("reminder_opened", "false");
  setTimeout(showReminder, 10000);
}

window.onload = function() {
  console.log(localStorage.getItem("reminder_opened"));
  console.log(localStorage.getItem("reminder_opened") === "true");
  if (localStorage.getItem("reminder_opened") === "true") {
    showReminder();
    return
  }
  setTimeout(showReminder, 10000);
};
