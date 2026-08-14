// =========================
// TYPING EFFECT
// =========================
const words = [
    "Full Stack Developer",
    "Python Developer",
    "AI Enthusiast",
    "Machine Learning Learner",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
const typing = document.getElementById("typing");

function typeEffect() {
    if (!typing) return;
    let currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typing.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(typeEffect, deleting ? 70 : 120);
}

document.addEventListener("DOMContentLoaded", () => {
    if (typing) {
        typeEffect();
    }
});