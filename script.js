const canvas = document.getElementById('snowfall');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();

const snowflakes = [];

for (let i = 0; i < 200; i++) {
    snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 1,
        d: Math.random() + 1
    });
}

function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();

    snowflakes.forEach(s => {
        ctx.moveTo(s.x, s.y);
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    });

    ctx.fill();
    moveSnow();
}

function moveSnow() {
    snowflakes.forEach(s => {
        s.y += s.d;
        if (s.y > canvas.height) {
            s.y = 0;
            s.x = Math.random() * canvas.width;
        }
    });
}

setInterval(drawSnow, 25);

window.addEventListener('resize', resize);

// gifts
const gifts = document.querySelectorAll(".gift");
const emojis = ["🎁", "🎀", "🧸", "🍬"];

gifts.forEach(g => {
    g.textContent = emojis[Math.floor(Math.random() * emojis.length)];
});

// music
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

music.volume = 0.3;
let playing = false;

musicBtn.addEventListener("click", () => {
    if (!playing) {
        music.play();
        musicBtn.textContent = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Play Music";
    }
    playing = !playing;
});

// memories
const albumBtn = document.getElementById("albumBtn");
const album = document.getElementById("album");
const closeAlbum = document.querySelector(".close");
const cards = document.querySelectorAll(".card");

albumBtn.addEventListener("click", () => {
    album.classList.remove("hidden");
});

closeAlbum.addEventListener("click", () => {
    album.classList.add("hidden");
});

// Click manual
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});

// Carrusel automático
let current = 0;
setInterval(() => {
    cards.forEach(c => c.classList.remove("flipped"));
    cards[current].classList.add("flipped");
    current = (current + 1) % cards.length;
}, 6000);

// current year
function currentYear() {
    const yearSpan = document.getElementById("year");
    const year = new Date().getFullYear();
    yearSpan.textContent = year;
}

currentYear();