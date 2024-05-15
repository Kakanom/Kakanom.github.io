function countdown() {
    const countDownDate = new Date("June 30, 2027 23:59:59").getTime();
  
    const x = setInterval(function() {
      const cur_time = new Date().getTime();
      const delta = countDownDate - cur_time;
  
      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((delta % (1000 * 60)) / 1000);
      const milliseconds = Math.floor((delta % (1000 * 60)) % 1000);
  
      document.getElementById("countdown").innerHTML = days + " days " + hours + " hours "
      + minutes + " minutes " + seconds + " seconds " + milliseconds + " milliseconds";
    }, 1);
  }
  
  countdown();