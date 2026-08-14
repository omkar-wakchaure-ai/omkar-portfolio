// =========================
// CREATE CANVAS
// =========================
const canvas = document.createElement("canvas");
const container = document.getElementById("particles-js");

if (container) {
    container.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    // =========================
    // CANVAS SIZE
    // =========================
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // =========================
    // PARTICLES ENGINE
    // =========================
    const particles = [];
    const particleCount = 80;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 1;
            this.speedY = (Math.random() - 0.5) * 1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "#7c3aed";
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgba(124,58,237,0.15)";
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    const mouse = { x: null, y: null };
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
            particle.update();
            particle.draw();

            if (mouse.x && mouse.y) {
                let dx = particle.x - mouse.x;
                let dy = particle.y - mouse.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgba(255,255,255,0.25)";
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        });

        connectParticles();
        requestAnimationFrame(animate);
    }
    animate();
}