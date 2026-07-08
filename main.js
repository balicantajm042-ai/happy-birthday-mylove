// Hide letter and surprise at first
const letter = document.getElementById("letter");
const surprise = document.getElementById("surprise");

letter.style.display = "none";
surprise.style.display = "none";

// Read Letter button
document.getElementById("letterBtn").addEventListener("click", () => {
    if (letter.style.display === "none") {
        letter.style.display = "block";
        letter.scrollIntoView({ behavior: "smooth" });
    } else {
        letter.style.display = "none";
    }
});

// Surprise button
document.getElementById("surpriseBtn").addEventListener("click", () => {
    surprise.style.display = "block";

    // Hearts animation
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
});

// Create floating hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "all 4s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.top = "-100px";
        heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Floating balloons
const balloons = ["🎈","🎈","🎈","🎈","🎈"];

setInterval(() => {
    const b = document.createElement("div");

    b.innerHTML = balloons[Math.floor(Math.random()*balloons.length)];
    b.style.position = "fixed";
    b.style.left = Math.random() * window.innerWidth + "px";
    b.style.top = window.innerHeight + "px";
    b.style.fontSize = "40px";
    b.style.pointerEvents = "none";
    b.style.transition = "all 8s linear";

    document.body.appendChild(b);

    setTimeout(() => {
        b.style.top = "-100px";
    }, 100);

    setTimeout(() => {
        b.remove();
    }, 8000);

}, 800);
