// ===========================================
// FOR SIDRA ❤️
// PART 3A
// ===========================================

const loadingScreen = document.getElementById("loadingScreen");

const envelope = document.getElementById("envelope");

const openEnvelope = document.getElementById("openEnvelope");

const typingText = document.getElementById("typingText");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const backBtn = document.getElementById("backBtn");

const continueBtn = document.getElementById("continueBtn");

const continueNo = document.getElementById("continueNo");

const hugButton = document.getElementById("hugButton");

const musicButton = document.getElementById("musicButton");

const music = document.getElementById("bgMusic");

const heartContainer = document.getElementById("heart-container");

const pages = {

envelope: document.getElementById("envelopeSection"),

question: document.getElementById("questionSection"),

yes: document.getElementById("yesSection"),

no: document.getElementById("noSection"),

final: document.getElementById("finalSection")

};

// ===========================
// Loading Screen
// ===========================

window.addEventListener("load",()=>{

setTimeout(()=>{

loadingScreen.style.opacity="0";

loadingScreen.style.transition="1s";

setTimeout(()=>{

loadingScreen.style.display="none";

},1000);

},2500);

});

// ===========================
// Change Page
// ===========================

function showPage(page){

Object.values(pages).forEach(section=>{

section.classList.remove("active");

});

page.classList.add("active");

}

// ===========================
// Envelope
// ===========================

openEnvelope.addEventListener("click",()=>{

envelope.classList.add("open");

setTimeout(()=>{

showPage(pages.question);

startTyping();

},5800);

});

// ===========================
// Typewriter
// ===========================

const sentence="Are you still hurt because of what happened?";

let index=0;

function startTyping(){

typingText.innerHTML="";

index=0;

typeWriter();

}

function typeWriter(){

if(index<sentence.length){

typingText.innerHTML+=sentence.charAt(index);

index++;

setTimeout(typeWriter,45);

}

}

// ===========================
// YES
// ===========================

yesBtn.addEventListener("click",()=>{

showPage(pages.yes);

});

// ===========================
// NO
// ===========================

noBtn.addEventListener("click",()=>{

showPage(pages.no);

});

// ===========================
// BACK
// ===========================

backBtn.addEventListener("click",()=>{

showPage(pages.question);

});

// ===========================
// Continue
// ===========================

continueBtn.addEventListener("click",()=>{

showPage(pages.final);

});

continueNo.addEventListener("click",()=>{

showPage(pages.final);

});
// ===========================================
// FOR SIDRA ❤️
// PART 3B
// ===========================================

// ===========================
// Floating Hearts
// ===========================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    heart.style.animationDuration = (6 + Math.random() * 4) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 700);

// ===========================
// Music
// ===========================

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    if (!musicPlaying) {

        music.play();

        musicButton.innerHTML = "⏸ Pause Our Song";

        musicPlaying = true;

    } else {

        music.pause();

        musicButton.innerHTML = "🎵 Play Our Song";

        musicPlaying = false;

    }

});

// ===========================
// Virtual Hug
// ===========================

hugButton.addEventListener("click", () => {

    for (let i = 0; i < 50; i++) {

        setTimeout(createHeart, i * 60);

    }

    document.querySelector(".final-card").style.transform = "scale(1.05)";
    document.querySelector(".final-card").style.transition = ".4s";

    setTimeout(() => {

        document.querySelector(".final-card").style.transform = "scale(1)";

    }, 500);

    setTimeout(() => {

        alert("❤️ Love You Forever Sidra ❤️\n\nThank you for giving me another chance.\n\n- Abdul ❤️");

    }, 700);

});

// ===========================
// Hidden A ❤️ S Easter Egg
// ===========================

let logoClicks = 0;

document.querySelectorAll(".logo").forEach(logo => {

    logo.addEventListener("click", () => {

        logoClicks++;

        if (logoClicks >= 5) {

            logoClicks = 0;

            for (let i = 0; i < 80; i++) {

                setTimeout(createHeart, i * 40);

            }

            alert("💖 Forever isn't enough with you, Sidra. 💖");

        }

    });

});

// ===========================
// Keyboard Shortcut ❤️
// Press H for hearts
// ===========================

document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "h") {

        for (let i = 0; i < 30; i++) {

            setTimeout(createHeart, i * 50);

        }

    }

});

// ===========================
// Prevent Double Click Zoom
// ===========================

let lastTouch = 0;

document.addEventListener("touchend", function (event) {

    const now = Date.now();

    if (now - lastTouch <= 300) {

        event.preventDefault();

    }

    lastTouch = now;

}, { passive: false });

// ===========================
// End ❤️
// ===========================

console.log("❤️ Website made with love for Sidra ❤️");