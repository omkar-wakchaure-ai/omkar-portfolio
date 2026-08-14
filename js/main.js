
// ======================================
// LOAD TRIGGER GUARD (Ensures execution)
// ======================================
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeLogoSlideshow);
} else {
    initializeLogoSlideshow();
}

// ======================================
// ACTIVE NAVIGATION Tracking
// ======================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ======================================
// SMOOTH SCROLL ROUTERS
// ======================================
navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.querySelectorAll(".btn, .btn2").forEach(button => {
    const href = button.getAttribute("href");
    if (href && href.startsWith("#")) {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(href);
            if(target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});
// ======================================
// CERTIFICATE FILTER ENGINE
// ======================================

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const certificateCards = document.querySelectorAll(".certificate-card");

    console.log("🔍 Filter Engine Initialized. Buttons found:", filterButtons.length, "Cards found:", certificateCards.length);

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 1. Fix Button Highlights
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");
            console.log("🎯 Filter Clicked:", filterValue);

            // 2. Filter the Cards
            certificateCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterValue === "all" || cardCategory === filterValue) {
                    // Show matching cards smoothly
                    card.style.display = "block"; 
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 10);
                } else {
                    // Hide non-matching cards smoothly
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.8)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300); // Matches the transition delay
                }
            });
        });
    });
});
// ======================================
// DUAL-CIRCLE CURSOR CONTROLLER
// ======================================
document.addEventListener("DOMContentLoaded", () => {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    if (cursorDot && cursorOutline) {
        window.addEventListener("mousemove", (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Instantly maps the core point
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Maps the outer ring (CSS transitions handle the lag interpolation)
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        });

        // Detect all links, buttons, and filter tabs for dynamic click scaling
        const interactives = document.querySelectorAll("a, button, .filter-btn, .certificate-btn");
        
        interactives.forEach(elem => {
            elem.addEventListener("mouseenter", () => {
                document.body.classList.add("cursor-hover-active");
            });
            elem.addEventListener("mouseleave", () => {
                document.body.classList.remove("cursor-hover-active");
            });
        });
    }
});