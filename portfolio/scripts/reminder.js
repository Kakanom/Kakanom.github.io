// function checkReminderClosed() {
//   return localStorage.getItem("reminder_closed") === "true";
// }

function showReminder() {
  // if (!checkReminderClosed) {
    document.getElementById("reminder__popup").classList.add("open");
  // }
}

function closeReminder() {
  document.getElementById("reminder__popup").classList.remove("open");
  localStorage.setItem("reminder_closed", "true");
}

window.onload = function() {
  setTimeout(showReminder, 3000);
};
