/*====================================================
        ALVARO ❤️ LUCIANA
        SCRIPT.JS
====================================================*/

/*==============================
        MÚSICA
==============================*/

const startButton = document.getElementById("startButton");
const music = document.getElementById("music");

startButton.addEventListener("click", () => {

    music.play().catch(() => {
        console.log("La reproducción automática fue bloqueada.");
    });

    document.getElementById("intro").scrollIntoView({
        behavior: "smooth"
    });

});

/*==============================
        CONTADOR
==============================*/

const startDate = new Date("2023-01-01T00:00:00");

function updateCounter() {

    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();

    }

    if (months < 0) {

        years--;
        months += 12;

    }

    const diff = now - startDate;

    const hours = Math.floor(diff / (1000 * 60 * 60));

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;

}

updateCounter();

setInterval(updateCounter, 60000);

/*==============================
    APARICIÓN AL HACER SCROLL
==============================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".section").forEach(section => {

    observer.observe(section);

});
/*====================================================
            ESTRELLAS ANIMADAS
====================================================*/

const starsContainer = document.getElementById("stars");

for(let i = 0; i < 120; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 5 + "s";

    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    starsContainer.appendChild(star);

}

/*====================================================
            PARTÍCULAS DORADAS
====================================================*/

const particlesContainer = document.getElementById("particles");

function createParticle(){

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.animationDuration = (8 + Math.random() * 8) + "s";

    particle.style.opacity = Math.random();

    particlesContainer.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    },16000);

}

setInterval(createParticle,250);

/*====================================================
            EFECTO BOTÓN
====================================================*/

startButton.addEventListener("mouseenter",()=>{

    startButton.style.transform="translateY(-5px) scale(1.05)";

});

startButton.addEventListener("mouseleave",()=>{

    startButton.style.transform="translateY(0) scale(1)";

});
/*====================================================
            LIGHTBOX GALERÍA
====================================================*/

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightbox.innerHTML = `
            <img src="${image.src}" alt="">
        `;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

/*====================================================
            CERRAR CON ESC
====================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});

/*====================================================
            BRILLO DEL CORAZÓN
====================================================*/

const heart = document.querySelector(".heart");

if(heart){

    setInterval(()=>{

        heart.style.filter="drop-shadow(0 0 15px #ff3355)";

        setTimeout(()=>{

            heart.style.filter="none";

        },600);

    },3000);

}

/*====================================================
            ANIMACIÓN HERO
====================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/*====================================================
            MENSAJE EN CONSOLA
====================================================*/

console.log("%c❤️ Alvaro & Luciana ❤️",
"color:#d4af37;font-size:22px;font-weight:bold;");

console.log("%cHecho con amor para Luciana",
"color:#ff3355;font-size:14px;");
