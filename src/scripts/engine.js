const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("src/tunes/a.wav");
let mapedKeys = [];

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    },150)
}

pianoKeys.forEach((key) => {
    mapedKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
})

document.addEventListener("keydown",(evento) => {
    if(mapedKeys.includes(evento.key)) playTune(evento.key);
})