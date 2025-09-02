const btn = document.getElementById("butaoloco");
const imgs = document.querySelectorAll(".todasimage");

const frases = [
  "ta doido pai",
  "clica aqui nao",
  "olha pra tras",
  "vai tomando",
  "caio é gay",
];

btn.addEventListener("click", () => {
  alert(frases[Math.floor(Math.random() * frases.length)]);

  const x = Math.floor(Math.random() * 300) - 150;
  const y = Math.floor(Math.random() * 300) - 150;
  img.style.transform = `translate(${x}px, ${y}px) rotate(${
    Math.random() * 360
  }deg)`;
});

btn.addEventListener("click", () => {
  imgs.forEach((img) => {
    img.classList.toggle("spin");
  });
});

setInterval(() => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}, 1000);

// Botão ir para página inicial
const butaosalva = document.getElementById("butaosalva");
butaosalva.addEventListener("click", () => {
  window.location.href = "index.html"; // Redireciona para a página inicial
});

function randomPosition(button) {

    const bodyWidth = window.innerWidth - button.offsetWidth;
    const bodyHeight = window.innerHeight - button.offsetHeight;
  
    const randomX = Math.floor(Math.random() * bodyWidth);
    const randomY = Math.floor(Math.random() * bodyHeight);
  
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  }

  butaosalva.addEventListener("mouseenter", () => {
    randomPosition(butaosalva);
  });

