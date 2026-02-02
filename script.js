const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("bgMusic");

let isPlaying = false;

// No button floats but stays inside screen 😄
["mouseover", "touchstart"].forEach(event => {
    noBtn.addEventListener(event, () => {
        const padding = 20;

        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});


// Yes button = Yes + Play 🎶
yesBtn.addEventListener("click", () => {
    if (!isPlaying) {
        music.play();
        isPlaying = true;

        yesBtn.textContent = "🎶 Playing...";
        yesBtn.disabled = true;
        noBtn.style.display = "none";
    }
});
