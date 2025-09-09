// Função que anima os contadores
function animateCounter(counter) {
  const target = +counter.getAttribute("data-target"); // número final
  const increment = target / 100; // velocidade da contagem
  let current = 0;

  const update = () => {
    current += increment;
    if (current < target) {
      counter.innerText = Math.ceil(current);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
}

// Ativar a animação quando o usuário acessar a seção
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => animateCounter(counter));
});
