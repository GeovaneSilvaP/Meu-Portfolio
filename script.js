// clique no menu
const specialty = document.querySelector("#btn-especialidade");
const btnSpecialty = document.querySelector("#btn-btn-hability");
const onMe = document.querySelector("#sobre-mim");
const btnOn = document.querySelector("#btn-sobre");
const projects = document.querySelector("#projetos");
const btnProjet = document.querySelector("#btn-btn-projet");
const form = document.querySelector("#formulario");
const btnForm = document.querySelector("#btn-btn-contato");
const sitebtn = document.querySelector(".site-btn");
const on = document.querySelector("#sobre");
const btnAboutTop = document.querySelector("#btn-sobre-topo");

//Evento de click menu
function eventDeClick() {
  sitebtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.scrollIntoView({ behavior: "smooth" });
  });

  btnSpecialty.addEventListener("click", (e) => {
    e.preventDefault();
    specialty.scrollIntoView({ behavior: "smooth" });
  });

  btnOn.addEventListener("click", (e) => {
    e.preventDefault();
    onMe.scrollIntoView({ behavior: "smooth" });
  });

  btnProjet.addEventListener("click", (e) => {
    e.preventDefault();
    projects.scrollIntoView({ behavior: "smooth" });
  });

  btnForm.addEventListener("click", (e) => {
    e.preventDefault();
    form.scrollIntoView({ behavior: "smooth" });
  });

  btnAboutTop.addEventListener("click", (e) => {
    e.preventDefault();
    on.scrollIntoView({ behavior: "smooth" });
  });
}

eventDeClick();

//Botão menu-mobile
const menuMobileBtn = document.getElementById("menu-mobile-btn");
const menuMobile = document.getElementById("menu-mobile");

menuMobileBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("active");

  menuMobileBtn.innerHTML = menuMobile.classList.contains("active")
    ? '<i class="bi bi-x"></i>'
    : '<i class="bi bi-list"></i>';

  document.body.style.overflow =
    menuMobile.classList.contains("active") ? "hidden" : "auto";
});

// Fecha ao clicar em um link
document.querySelectorAll(".navegador a").forEach(link => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("active");
    menuMobileBtn.innerHTML = '<i class="bi bi-list"></i>';
    document.body.style.overflow = "auto";
  });
});


// Criar formas geométricas
function createShapes() {
  const background = document.getElementById("geometric-background");
  const shapeTypes = ["square", "circle", "triangle", "rectangle"];

  for (let i = 0; i < 40; i++) {
    const shape = document.createElement("div");
    const shapeClass =
      shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    shape.className = `shape ${shapeClass}`;

    // Posições aleatórias
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    // Propriedades de animação aleatórias
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 10;

    // Aplicar estilos
    shape.style.left = `${posX}%`;
    shape.style.top = `${posY}%`;
    shape.style.animationDelay = `${delay}s`;
    shape.style.animationDuration = `${duration}s`;

    background.appendChild(shape);
  }
}

// Criar partículas
function createParticles() {
  const particlesContainer = document.getElementById("particles");

  for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // Posições aleatórias
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    // Propriedades de animação aleatórias
    const delay = Math.random() * 8;
    const duration = Math.random() * 4 + 4;

    // Aplicar estilos
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    particlesContainer.appendChild(particle);
  }
}

// Interação com movimento do mouse
function addMouseInteraction() {
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const shapes = document.querySelectorAll(".shape");
    shapes.forEach((shape) => {
      const speed = 0.05;
      const shapeX = parseFloat(shape.style.left);
      const shapeY = parseFloat(shape.style.top);

      shape.style.left = `${shapeX + (x - 0.5) * speed}%`;
      shape.style.top = `${shapeY + (y - 0.5) * speed}%`;
    });
  });
}

// Inicializar animação
document.addEventListener("DOMContentLoaded", () => {
  createShapes();
  createParticles();
  addMouseInteraction();
});

// LOGO
const logo = document.querySelector(".logo");
const button = document.getElementById("rotateBtn");
let rotations = 0;

// Animação de "quicar" (loop)
anime({
  targets: ".logo",
  scale: [
    { value: 1.25, duration: 1000, easing: "easeInOutQuad" },
    { value: 1, duration: 1000, easing: "easeOutElastic(1, .5)" },
  ],
  loop: true,
  direction: "alternate",
  delay: 250,
});

// projetos scroll
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".titulos, .text-title, .section-title, .cards, .", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".projetos, .image-1, .info, .habilidades-tecnicas", {
  delay: 600,
  origin: "bottom",
});
ScrollReveal().reveal(".text-box, .form-container, .hero-content", {
  delay: 700,
  origin: "right",
});
ScrollReveal().reveal(".projet-icons i, .titulo-form, .hero-img-wrapper", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".projeto-02, .image-2, .projeto-03, .image-3, .card", {
  delay: 500,
  origin: "top",
});
ScrollReveal().reveal(".media-info li, ", {
  delay: 500,
  origin: "left",
  interval: 200,
});

//Formulario
function myForm() {
  const formForm = document.getElementById("formForm");

  formForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formEmail = document.getElementById("formEmail").value;
    const nameName = document.getElementById("nameName").value;
    const statusForm = document.getElementById("statusForm");

    if (!nameName || !formEmail) {
      statusForm.textContent = "⚠️ Preencha todos os campos!";
      statusForm.style.color = "orange";
      return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(formEmail)) {
      statusForm.textContent = "❌ E-mail inválido!";
      statusForm.style.color = "red";
      return;
    }

    statusForm.textContent = "✅ Formulário enviado com sucesso!";
    statusForm.style.color = "limegreen";

    formForm.reset();
  });
}

myForm();
