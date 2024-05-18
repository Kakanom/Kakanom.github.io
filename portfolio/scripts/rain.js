const rainButton = document.getElementById('rain-button');
let isRaining = false;

rainButton.addEventListener('click', () => {
    const rain = document.getElementById('rain');
    if (isRaining) {
        rain.classList.remove('rain');
        rainButton.innerHTML = 'Let it rain!';
    } else {
        rain.classList.add('rain');
        rainButton.innerHTML = 'Stop it!';
    }
    isRaining = !isRaining;
});