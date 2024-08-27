
// play audio function
function play(id) {
  var audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
}


// nose implementation
var honk_counter = 0;
function playScreamer() {
  var honkAudio = document.getElementById('honk');

  // Reset and play the honk sound
  honkAudio.currentTime = 0.1;
  honkAudio.play();
  honk_counter += 1;

  if (honk_counter == 10) {
    var screamAudio = document.getElementById('screamer');
    var screamImg = document.getElementById('screamer-image');
    // Trigger the screamer after a delay
    setTimeout(function() {
      honkAudio.pause(); // Pause the honk sound
      screamAudio.currentTime = 0;
      screamAudio.play(); // Play the scream sound
      screamImg.style.display = 'block'; // Show the scream image 

      setTimeout(function() {
        screamImg.style.display = 'none';
      }, 1900); // 1.9 seconds
    }, 2000); // 2-second delay before the screamer
    honk_counter = 0;
  }
}
