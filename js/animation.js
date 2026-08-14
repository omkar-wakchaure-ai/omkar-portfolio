// ======================================
// 3D CARD HOVER EFFECT
// ======================================
const cards = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, .achievement-card, .education-card"
);

cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 15;
        const rotateY = (x - rect.width / 2) / 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
});

// ======================================
// MAGNETIC BUTTON EFFECT
// ======================================
const buttons = document.querySelectorAll(".btn, .btn2, .live-btn, .code-btn, .certificate-btn");

buttons.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.transform = `translate(${(x - rect.width / 2) / 8}px, ${(y - rect.height / 2) / 8}px)`;
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translate(0,0)";
    });
});

// ======================================
// MOUSE FOLLOWER
// ======================================
const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});