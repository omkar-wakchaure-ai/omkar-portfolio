// =========================
// SCROLL REVEAL ANIMATION
// =========================
function revealOnScroll() {
    const revealElements = document.querySelectorAll(
        ".title, .skill-card, .project-card, .timeline-item, .certificate-card, .achievement-card, .info-box, .contact-container form, .resume-box"
    );

    revealElements.forEach((element) => {
        // Force add show state class to guarantee visibility
        element.classList.add("show");
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    });
}

// Run immediately when page loads
document.addEventListener("DOMContentLoaded", revealOnScroll);
window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

// =========================
// NAVBAR GLOW SHADOW
// =========================
window.addEventListener("scroll", () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
        if (window.scrollY > 50) {
            sidebar.style.boxShadow = "0 0 30px rgba(124,58,237,.4)";
        } else {
            sidebar.style.boxShadow = "none";
        }
    }
});