// Sistema de órbitas tecnológicas melhorado
document.addEventListener("DOMContentLoaded", function () {
  // Detecção de dispositivos móveis
  const isMobileDevice = function () {
    // Comprovação por ancho de pantalla
    const isMobileWidth = window.innerWidth <= 768;

    // Comprovação por user agent
    const isMobileAgent =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Comprovação por características táteis
    const hasTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    return isMobileWidth || (isMobileAgent && hasTouchScreen);
  };

  const isMobile = isMobileDevice();
  console.log("Dispositivo móvel aceito?", isMobile);  

  if (!isMobile) {
    console.log("Configurando sistema orbital para desktop");
    setupOrbitSystem();
  } else {
    console.log("Dispositivo móvil detectado. Sistema orbital desactivado.");
  }
});

function setupOrbitSystem() {
  // Obtém o conteúdo da imagem do perfil
  const heroImage = document.querySelector(".hero-img");

  if (!heroImage) {
    console.log("Não foi encontrado o recipiente da imagem do herói");
    return;
  }

  // Cria o contêiner de órbitas
  const orbitContainer = document.createElement("div");
  orbitContainer.className = "orbit-container";
  orbitContainer.id = "orbit-container";
  heroImage.appendChild(orbitContainer);

  // Tecnologias para mostrar - atualizadas para incluir Node.js
  const technologies = [
    { name: "HTML", icon: "fab fa-html5", color: "#E34F26" },
    { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", icon: "fab fa-js", color: "#F7DF1E" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952B3" },
    { name: "MySQL", icon: "fas fa-database", color: "#00758F" },
    { name: "React", icon: "fab fa-react", color: "rgba(0, 238, 255, 0.56)" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "Java", icon: "fab fa-java", color: "#007396" },
    { name: "CodeIgniter", icon: "fas fa-fire", color: "#f09732ff" },
  ];

  // Criar as órbitas
  const numberOfOrbits = 3;

  for (let i = 0; i < numberOfOrbits; i++) {
    // Criar a órbita
    const orbit = document.createElement("div");
    orbit.className = `orbit orbit-${i + 1}`;
    orbitContainer.appendChild(orbit);

    // Número de tecnologias nesta órbita - ajustado para 10 tecnologias
    const techsPerOrbit = [3, 4, 3]; // Distribuir 10 tecnologías en 3 órbitas
    const techPerOrbit = techsPerOrbit[i];

    // Distribuir as tecnologias nesta órbita
    for (let j = 0; j < techPerOrbit; j++) {
      // Calcula o índice para obter a tecnologia
      let techIndex;
      if (i === 0) {
        techIndex = j;
      } else if (i === 1) {
        techIndex = 3 + j;
      } else {
        techIndex = 7 + j;
      }

      const tech = technologies[techIndex];

      // Cria o ícone da tecnologia
      const techIcon = document.createElement("div");
      techIcon.className = "tech-icon";

      // Adiciona o conteúdo de acordo com o tipo
      if (tech.type === "img") {
        const img = document.createElement("img");
        img.src = tech.src;
        img.alt = tech.name;
        techIcon.appendChild(img);
      } else {
        const icon = document.createElement("i");
        icon.className = tech.icon;
        icon.style.color = tech.color;
        techIcon.appendChild(icon);
      }

      // Adicionar a dica de ferramenta
      const tooltip = document.createElement("div");
      tooltip.className = "tech-tooltip";
      tooltip.textContent = tech.name;
      techIcon.appendChild(tooltip);

      // Posicionar na órbita
      const angle = (360 / techPerOrbit) * j;
      const radians = angle * (Math.PI / 180);

      // Obtém as dimensões da órbita
      const orbitStyle = window.getComputedStyle(orbit);
      const orbitWidth = parseFloat(orbitStyle.width);
      const orbitHeight = parseFloat(orbitStyle.height);

      //Calcula a posição na elipse
      const x = (orbitWidth / 2) * Math.cos(radians);
      const y = (orbitHeight / 2) * Math.sin(radians);

      // Posicionar
      techIcon.style.left = `calc(50% + ${x}px)`;
      techIcon.style.top = `calc(50% + ${y}px)`;
      techIcon.style.transform = "translate(-50%, -50%)";

      // Adicionar à órbita
      orbit.appendChild(techIcon);

      // Contrarrestar a rotação da órbita para manter o ícone direito
      const orbitDuration = 20 + i * 10; // 20s, 30s, 40s
      const direction = i % 2 === 0 ? 1 : -1; // normal o reverse

      techIcon.style.animation = `tech-bob 3s ease-in-out infinite, orbit-rotation ${orbitDuration}s linear infinite ${
        direction === 1 ? "reverse" : "normal"
      }`;
    }
  }
}

// Manejar mudanças de tamanho de janela
window.addEventListener("resize", function () {
  // Verifique se agora estamos no celular ou desktop
  const isMobileWidth = window.innerWidth <= 768;

  // Obtém o sistema orbital atual (se existir)
  const orbitContainer = document.getElementById("orbit-container");

  if (isMobileWidth && orbitContainer) {
    // Si ahora estamos en móvil y el sistema orbital existe, lo eliminamos
    orbitContainer.remove();
    console.log("Cambiado para celular - Sistema orbital removido");
  } else if (!isMobileWidth && !orbitContainer) {
    // Si ahora estamos en desktop y no hay sistema orbital, lo creamos
    console.log("Mudando para desktop - Criando sistema orbital");
    setupOrbitSystem();
  }
});
